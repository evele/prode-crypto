// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/utils/cryptography/EIP712.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFTPrediction is ERC721, ERC721Enumerable, ERC721URIStorage, Pausable, Ownable, ERC721Burnable, EIP712 {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("NFTPrediction", "NFT") EIP712("NFTPrediction", "1") {}

    function _baseURI() internal pure override returns (string memory) {
        return "prodero.com";
    }

    bool mintEnabled;

    uint8 immutable TOTAL_GAMES  = 24; 
    uint8 immutable LOCAL = 0;
    uint8 immutable EMPATE = 1;
    uint8 immutable VISITANTE = 2;

    uint256 public publicPrice = 1 ether;
    
    mapping (address => bool) allowList; // TODO: to use it in some promo

    struct Game {
        uint8 id; //will be here too, just to be easy to return (I think)
        uint8 team1;
        uint8 team2;
        uint8[2] result;
        bool set;
    } 

    mapping(uint8 => Game) public games;  // game_ids -> game

    mapping(uint256 => Game[]) predictions; // token ID -> prediction (Game[])

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function safeMint(address to, string memory uri, Game[] memory _prediction) public onlyOwner {
        require(mintEnabled,"Minting its not allowed");
        require(_prediction.length == TOTAL_GAMES, "There should be a prediction for each game");
        uint256 tokenId = _tokenIdCounter.current();
        _safeMint(to, tokenId);
        for (uint8 index = 0; index < _prediction.length; index++) {
            predictions[tokenId].push(_prediction[index]);
        }
        _tokenIdCounter.increment();
        _setTokenURI(tokenId, uri);
    }

    function mintPublic(Game[] memory _prediction) public payable {
        // We cannot just use balanceOf to create the new tokenId because tokens
        // can be burned (destroyed), so we need a separate counter.
        require(mintEnabled,"Minting its not allowed");
        require(_prediction.length == TOTAL_GAMES, "There should be a prediction for each game");
        require(msg.value == publicPrice, "Wrong, not exactly amount sent.");
        uint256 tokenId = _tokenIdCounter.current();
        _safeMint(msg.sender, tokenId);
        for (uint8 index = 0; index < _prediction.length; index++) {
            predictions[_tokenIdCounter.current()].push(_prediction[index]);
        }
        _tokenIdCounter.increment();
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
        internal
        whenNotPaused
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    // The following functions are overrides required by Solidity.

    function _afterTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
        internal
        override(ERC721)
    {
        super._afterTokenTransfer(from, to, tokenId, batchSize);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    // setRound(1,[[1, 1, 2, [0,0],false],[2, 3, 4, [0,0],false],[3, 5, 6, [0,0],false],[4, 7, 8, [0,0],false]])
    // initializa all in [0,0] 
    function setGames(Game[] memory _games) public onlyOwner returns(bool success)  {
        require(_games.length == TOTAL_GAMES );
        uint8[24] memory ids;
        for (uint8 index = 0; index < _games.length; index++) {
            ids[index] = _games[index].id;
            games[_games[index].id] = _games[index];
        }
        return true;
    }

    function setGameResult(uint8 _gameId, uint8 _team1Score, uint8 _team2Score) public onlyOwner returns (bool success) {
        require(_gameId >0 && _gameId <=24, "The gane ID do not exist ");
        games[_gameId].result[0] = _team1Score;
        games[_gameId].result[1] = _team2Score;
        games[_gameId].set = true;
        return true;
    }

}
