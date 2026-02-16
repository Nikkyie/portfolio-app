import React, { useState, useEffect } from 'react';
import './scrollToTop.css';

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  const checkScrollTop = () => {
    if (!show && window.pageYOffset > 300) {
      setShow(true);
    } else if (show && window.pageYOffset <= 300) {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [show]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={show ? 'scroll-top show-scroll' : 'scroll-top'}
      onClick={scrollTop}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
};

export default ScrollToTop;