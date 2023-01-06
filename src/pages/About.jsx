import backgroundImg from '../assets/images/background/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg';

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
    </div>
  );
}

export default About;
