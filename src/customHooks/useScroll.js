import { useEffect, useState } from "react";

const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(null);

  useEffect(() => {
    document.addEventListener("scroll", handleScrollEvent);

    return () => {
      document.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  const handleScrollEvent = () => {
    setScrollPosition(window.scrollY);
  };

  return scrollPosition;
};

export default useScroll;
