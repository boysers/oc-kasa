import starRed from '../assets/images/icon/star-red.svg';
import starGrey from '../assets/images/icon/star-grey.svg';

type RatingProps = { value: number };

function Rating({ value }: RatingProps) {
  const stars = [...Array(value)].map((star, index) => {
    index++;
    const key = `star ${index}`;
    return <img src={starRed} alt={key} key={key} />;
  });

  for (let i = 1; i <= 5; i++) {
    if (stars.length < 5) {
      const key = `star ${stars.length + 1}`;
      stars.push(<img src={starGrey} alt={key} key={key} />);
    }
  }

  return <div className="Rating">{stars}</div>;
}

export default Rating;
