import { Card } from '../components';
import backgroundImg from '../assets/images/background/eric-muhr-P_XxsdVgtpQ-unsplash.jpg';
import { useLoaderData } from '../hooks';
import { ILoaderDataHomeAccomodations } from '../types';

function Home() {
  const { accommodations } = useLoaderData<ILoaderDataHomeAccomodations>();

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
        {accommodations.map((accommodation) => (
          <Card {...accommodation} key={accommodation.id} />
        ))}
      </section>
    </div>
  );
}

export default Home;
