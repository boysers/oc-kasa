import { useState } from 'react';
import arrowLeft from '../assets/images/icon/arrow_left.svg';
import arrowRigth from '../assets/images/icon/arrow_right.svg';

type SlideshowProps = { pictures: string[] };

function Slideshow({ pictures }: SlideshowProps) {
  const [slideId, setSlideId] = useState(1);

  const slide = pictures[slideId - 1];

  if (pictures.length <= 1) {
    return (
      <div className="Slideshow">
        <img src={slide} alt={`accommodation ${slideId}`} />
      </div>
    );
  }

  const handleClickPrevious = () => {
    setSlideId((prev) => (prev <= 1 ? pictures.length : --prev));
  };

  const handleClickNext = () => {
    setSlideId((prev) => (prev >= pictures.length ? 1 : ++prev));
  };

  return (
    <div className="Slideshow">
      <div className="Slideshow__arrow Slideshow__arrow__left">
        <img onClick={handleClickPrevious} src={arrowLeft} alt="arrow left" />
      </div>

      <div className="Slideshow__arrow Slideshow__arrow__right">
        <img onClick={handleClickNext} src={arrowRigth} alt="arrow right" />
      </div>
      <img src={slide} alt={`accommodation ${1}`} />
    </div>
  );
}

export default Slideshow;
