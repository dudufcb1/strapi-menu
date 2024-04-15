import React, { useRef } from 'react';
import sublinks from './data';
import { useGlobalContext } from './Context';

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = sublinks.find((item) => item.pageId === pageId);

  //Solo apunta a un elemento, no obtenemos más datos, eso es con getBoundingClientRect()
  const subMenuRef = useRef(null);

  const handleMouseLeave = (e) => {
    const submenu = subMenuRef.current;
    const { right, left, bottom } = submenu.getBoundingClientRect();
    const { clientX, clientY } = e; // estos valores vienen de event
    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null);
    }
  };

  return (
    <div
      ref={subMenuRef}
      onMouseLeave={handleMouseLeave}
      className={currentPage ? 'submenu show-submenu' : 'submenu'}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links.length > 3 ? '1fr 1fr' : '1fr',
        }}
      >
        {currentPage?.links?.map((link) => {
          const { id, url, label, icon } = link;
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
