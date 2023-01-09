import backgroundImg from '../assets/images/background/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg';
import { Collapse } from '../components';
import abouts from '../assets/json/abouts.json';

function About() {
  return (
    <div className="About">
      <section className="fullwidth-image">
        <img
          className="fullwidth-image__picture"
          src={backgroundImg}
          alt="home background"
        />
        <div className="fullwidth-image__container"></div>
      </section>

      <section className="About__container">
        {abouts.map(({ title, content }, index) => (
          <Collapse title={title} key={`${index}-${title}`}>
            <p>{content}</p>
          </Collapse>
        ))}
      </section>
    </div>
  );
}

export default About;
