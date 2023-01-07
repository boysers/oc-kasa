import { useNavigate, useParams } from 'react-router-dom';
import { Collapse, Rating, Slideshow } from '../components';
import { getLogement } from '../services';
import { useEffect } from 'react';

function Logement() {
  const { id } = useParams();
  const navigate = useNavigate();
  const logement = getLogement(id);

  useEffect(() => {
    if (!logement) return navigate('/404');
  }, [logement, navigate]);

  const {
    title,
    location,
    tags,
    host,
    rating,
    description,
    equipments,
    pictures,
  } = logement;

  const [firstName, name] = host.name.split(' ');

  return (
    <article className="Logement">
      <section className="Logement__header">
        <Slideshow pictures={pictures} />

        <div className="Logement__header__info">
          <div className="Logement__header__appartement">
            <div>
              <h2 className="Logement__header__title">{title}</h2>
              <address className="Logement__header__location">
                {location}
              </address>
            </div>

            <div className="Logement__header__tags">
              {tags.map((tag, index) => {
                return (
                  <div
                    key={`${index}-${tag}`}
                    className="Logement__header__tags__item"
                  >
                    {tag}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="Logement__header__host">
            <div className="Logement__header__host__rating">
              <Rating value={rating} />
            </div>

            <div className="Logement__header__host__details">
              <h3 className="Logement__header__host__name">
                <span>{firstName}</span>
                <span>{name}</span>
              </h3>
              <img
                className="Logement__header__host__picture"
                src={host.picture}
                alt={host.name}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="Logement__details">
        <Collapse title="Description" className="Logement__details__collapse">
          <div>
            <p>{description}</p>
          </div>
        </Collapse>

        <Collapse title="Équipements" className="Logement__details__collapse">
          <div>
            {equipments.map((equipment, index) => (
              <p key={`${index}-${equipment}`}>{equipment}</p>
            ))}
          </div>
        </Collapse>
      </section>
    </article>
  );
}

export default Logement;
