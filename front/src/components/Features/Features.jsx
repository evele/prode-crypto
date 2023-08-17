import style from "../../components/Features/Feauters.module.css"

const Features = () => {
    return (
      <section className={style.feature-section}>
        <div className="features-container">
          <div className="feature">
            <div className={style.feature-icon}>⚽</div>
            <h2 className="feature-title">Gran variedad de deportes</h2>
            <p className="feature-description">
              Apuesta en una amplia gama de deportes, desde fútbol hasta tenis y mucho más.
            </p>
          </div>
          <div className="feature">
            <div className="feature-icon">💰</div>
            <h2 className="feature-title">Oportunidades de ganar</h2>
            <p className="feature-description">
              Accede a cuotas competitivas y aumenta tus posibilidades de obtener ganancias.
            </p>
          </div>
          <div className="feature">
            <div className="feature-icon">📱</div>
            <h2 className="feature-title">Apuesta desde cualquier lugar</h2>
            <p className="feature-description">
              Disfruta de la comodidad de apostar desde tu dispositivo móvil en cualquier momento.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;