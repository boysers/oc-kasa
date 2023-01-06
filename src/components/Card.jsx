import { useNavigate } from 'react-router-dom';

function Card({ id, title, cover }) {
  const navigate = useNavigate();

  const handleClickNavigate = () => {
    navigate(`/logements/${id}`);
  };

  return (
    <figure className="Card" onClick={handleClickNavigate}>
      <img className="Card__picture" src={cover} alt={title} />
      <div className="Card__shadow" />
      <figcaption className="Card__title">
        <h3>{title}</h3>
      </figcaption>
    </figure>
  );
}

export default Card;
