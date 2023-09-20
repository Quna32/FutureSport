import React from 'react';

const ScrollToTopButton = () => {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div>
    <button className="scrollToTopButton" onClick={scrollToTop}>
      Back to Top
    </button>
    <hr />
    </div>
  );
};

export default ScrollToTopButton;