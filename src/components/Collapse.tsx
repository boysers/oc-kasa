import { useRef, useState } from 'react';
import iconArrow from '../assets/images/icon/arrow_back_ios-24px.svg';

type CollapseProps = React.PropsWithChildren<{ title: string }>;

function Collapse({ title, children }: CollapseProps) {
  const [isToggle, setIsToggle] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  const className = {
    header: `Collapse-header${isToggle ? ' Collapse-header--active' : ''}`,
    arrow: `Collapse-header__arrow${
      isToggle ? ' Collapse-header__arrow--rotate' : ''
    }`,
    content: `Collapse__main${isToggle ? ' Collapse__main--active' : ''}`,
  };

  const handleClickToggleCollapse = () => setIsToggle((prev) => !prev);

  return (
    <article className="Collapse">
      <div className={className.header} onClick={handleClickToggleCollapse}>
        <h3 className="Collapse-header__title">{title}</h3>
        <img className={className.arrow} src={iconArrow} alt="arrow icon" />
      </div>

      <div
        className={className.content}
        ref={contentRef}
        style={{ height: isToggle ? contentRef.current?.scrollHeight : 0 }}
      >
        {children}
      </div>
    </article>
  );
}

export default Collapse;
