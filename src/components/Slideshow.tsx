import { useState } from 'react';
import arrowLeft from '../assets/images/icon/arrow_left.svg';
import arrowRigth from '../assets/images/icon/arrow_right.svg';

type SlideshowProps = { pictures: string[] };

function Slideshow({ pictures }: SlideshowProps) {
  const [slideId, setSlideId] = useState(1);

  const picturesLenght = pictures.length;
  const slide = pictures[slideId - 1];

  if (picturesLenght <= 1) {
    return (
      <div className="Slideshow">
        <img src={slide} alt={`accommodation ${slideId}`} />
      </div>
    );
  }

  const handleClickPrevious = () => {
    setSlideId((prev) => (prev <= 1 ? picturesLenght : --prev));
  };

  const handleClickNext = () => {
    setSlideId((prev) => (prev >= picturesLenght ? 1 : ++prev));
  };

  return (
    <div className="Slideshow">
      <div
        onClick={handleClickPrevious}
        className="Slideshow__arrow Slideshow__arrow__left"
      >
        <img src={arrowLeft} alt="arrow left" />
      </div>

      <div
        onClick={handleClickNext}
        className="Slideshow__arrow Slideshow__arrow__right"
      >
        <img src={arrowRigth} alt="arrow right" />
      </div>

      <img src={slide} alt={`accommodation ${1}`} />

      <p className="Slideshow__dots">
        {slideId}/{picturesLenght}
      </p>
    </div>
  );
}

export default Slideshow;
