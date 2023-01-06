import Card from '../components/Card';
import { getLogementsForHomePage } from '../services';
import backgroundImg from '../assets/images/background/eric-muhr-P_XxsdVgtpQ-unsplash.jpg';

function Home() {
  const logements = getLogementsForHomePage();

  return (
    <div className="Home">
      <section className="fullwidth-image">
        <img
          className="fullwidth-image__picture"
          src={backgroundImg}
          alt="home background"
        />
        <div className="fullwidth-image__container">
          <h2 className="fullwidth-image__slogan">
            Chez vous, partout et ailleurs
          </h2>
        </div>
      </section>

      <section className="Home-logements">
        {logements.map((logement) => (
          <Card {...logement} key={logement.id} />
        ))}
      </section>
    </div>
  );
}

export default Home;
