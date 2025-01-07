import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FiArrowUp } from "react-icons/fi";  
import "./ScrollToTop.css";  

// Scroll to top functionality
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Effect to handle the scroll event and toggle visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <Button
          variant="link"
          onClick={scrollToTop}
          className="backToTopBtn"
          aria-label="Back to Top"
        >
          <FiArrowUp size={24} /> 
        </Button>
      )}
    </div>
  );
};

export default ScrollToTop;
