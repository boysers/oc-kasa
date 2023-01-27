import starRed from '../assets/images/icon/star-red.svg';
import starGrey from '../assets/images/icon/star-grey.svg';

type RatingProps = { value: number };

function Rating({ value }: RatingProps) {
  return (
    <div className="Rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <img
          src={index < value ? starRed : starGrey}
          alt={`star ${index + 1}`}
          key={`${index}-star`}
        />
      ))}
    </div>
  );
}

export default Rating;
