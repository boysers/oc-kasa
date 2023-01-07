import { useNavigate } from 'react-router-dom';

type CardProps = { id: string; title: string; cover: string };

function Card({ id, title, cover }: CardProps) {
  const navigate = useNavigate();

  const handleClickNavigate = () => {
    navigate(`/accommodations/${id}`);
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
