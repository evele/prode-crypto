import style from '../Header/Header.module.css'

const Header = () => {
  return (
    <header>
      <nav style={style.header}>
        <img
            style={style.header}
            ref="logo"
        />
        {/* Navigation links */}
      </nav>
    </header>
  );
};

export default Header;