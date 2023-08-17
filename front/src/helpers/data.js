export const PRODE_ADDRESS = ""

export const info = {
  title: "PRODE ARG"
}

export const teams = {
    1: "Argentina",
    2: "Bolivia",
    3: "Brasil",
    4: "Chile",
    5: "Colombia",
    6: "Ecuador",
    7: "Peru",
    8: "Paraguay",
    9: "Uruguay",
    10: "Venezuela",
    11: "México",
    12: "EEUU",
    13: "Canada",
    14: "Jamaica",
    15: "Costa Rica",
    16: "Panama",
  }

  export const groups = {
    A: [1, 2, 3, 4],
    B: [5, 6, 7, 8],
    C: [9, 10, 11, 12],
    D: [13, 14, 15, 16],
  }

  export const gamesO = [
    { group: "A", matchId: 1, team1: 1, team2: 2, result: [] },
    { group: "A", matchId: 3, team1: 3, team2: 4, result: [] },
    { group: "B", matchId: 2, team1: 5, team2: 6, result: [] },
    { group: "B", matchId: 4, team1: 7, team2: 8, result: [] },
    { group: "C", matchId: 5, team1: 9, team2: 10, result: [] },
    { group: "C", matchId: 7, team1: 11, team2: 12, result: [] },
    { group: "D", matchId: 6, team1: 15, team2: 16, result: [] },
    { group: "D", matchId: 8, team1: 13, team2: 14, result: [] },
    // round 2
    { group: "A", matchId: 18, team1: 1, team2: 3, result: [] },
    { group: "A", matchId: 19, team1: 4, team2: 2, result: [] },
    { group: "B", matchId: 20, team1: 5, team2: 7, result: [] },
    { group: "B", matchId: 17, team1: 8, team2: 6, result: [] },
    { group: "C", matchId: 22, team1: 12, team2: 10, result: [] },
    { group: "C", matchId: 24, team1: 9, team2: 11, result: [] },
    { group: "D", matchId: 21, team1: 16, team2: 14, result: [] },
    { group: "D", matchId: 23, team1: 13, team2: 15, result: [] },
    // round 3
    { group: "A", matchId: 33, team1: 2, team2: 3, result: [] },
    { group: "A", matchId: 34, team1: 4, team2: 1, result: [] },
    { group: "B", matchId: 35, team1: 6, team2: 7, result: [] },
    { group: "B", matchId: 36, team1: 8, team2: 5, result: [] },
    { group: "C", matchId: 39, team1: 12, team2: 9, result: [] },
    { group: "C", matchId: 40, team1: 10, team2: 11, result: [] },
    { group: "D", matchId: 37, team1: 16, team2: 13, result: [] },
    { group: "D", matchId: 38, team1: 14, team2: 15, result: [] },
  ]
  
  export const games = {
    A: [
      { group: "A", matchId: 1, team1: 1, team2: 2, result: [] },
      { group: "A", matchId: 3, team1: 3, team2: 4, result: [] },
      { group: "A", matchId: 9, team1: 1, team2: 3, result: [] },
      { group: "A", matchId: 11, team1: 4, team2: 2, result: [] },
      { group: "A", matchId: 17, team1: 2, team2: 3, result: [] },
      { group: "A", matchId: 18, team1: 4, team2: 1, result: [] },
    ],
    B: [
      { group: "B", matchId: 2, team1: 5, team2: 6, result: [] },
      { group: "B", matchId: 4, team1: 7, team2: 8, result: [] },
      { group: "B", matchId: 10, team1: 5, team2: 7, result: [] },
      { group: "B", matchId: 12, team1: 8, team2: 6, result: [] },
      { group: "B", matchId: 19, team1: 6, team2: 7, result: [] },
      { group: "B", matchId: 20, team1: 8, team2: 5, result: [] },
    ],
    C: [
      { group: "C", matchId: 5, team1: 9, team2: 10, result: [] },
      { group: "C", matchId: 7, team1: 11, team2: 12, result: [] },
      { group: "C", matchId: 13, team1: 12, team2: 10, result: [] },
      { group: "C", matchId: 15, team1: 9, team2: 11, result: [] },
      { group: "C", matchId: 23, team1: 12, team2: 9, result: [] },
      { group: "C", matchId: 24, team1: 10, team2: 11, result: [] },
    ],
    D: [
      { group: "D", matchId: 6, team1: 15, team2: 16, result: [] },
      { group: "D", matchId: 8, team1: 13, team2: 14, result: [] },
      { group: "D", matchId: 14, team1: 16, team2: 14, result: [] },
      { group: "D", matchId: 16, team1: 13, team2: 15, result: [] },
      { group: "D", matchId: 21, team1: 16, team2: 13, result: [] },
      { group: "D", matchId: 22, team1: 14, team2: 15, result: [] },
    ],
   
  }


const formatGamesData = () => {
    const arrayToReturn = []
    for (const group in games) {
      games[group].forEach((g) => {
        const element = [g.matchId, g.team1, g.team2, [0, 0], false]
        arrayToReturn.push(element)
      })
    }
    return arrayToReturn
  }
  
  export const gamesData = formatGamesData()

