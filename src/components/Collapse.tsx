import { useState } from 'react';
import iconArrow from '../assets/images/icon/arrow_back_ios-24px.svg';

type CollapseProps = React.PropsWithChildren<{ title: string }>;

function Collapse({ title, children }: CollapseProps) {
  const [isToggle, setIsToggle] = useState(false);

  const handleChange = () => {
    setIsToggle((prev) => !prev);
  };

  const rotateArrow = isToggle ? ' Collapse-header__arrow--rotate' : '';
  const classNameArrow = `Collapse-header__arrow${rotateArrow}`;

  const translateMain = isToggle ? ' Collapse__main--active' : '';
  const classNameMain = `Collapse__main${translateMain}`;

  return (
    <article className="Collapse">
      <div className="Collapse-header" onClick={handleChange}>
        <h3 className="Collapse-header__title">{title}</h3>
        <img className={classNameArrow} src={iconArrow} alt="arrow icon" />
      </div>

      {isToggle && <div className={classNameMain}>{children}</div>}
    </article>
  );
}

export default Collapse;
