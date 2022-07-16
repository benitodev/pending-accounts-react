import { useState } from "react";

const useWindowScroll = () => {
  const [windowSize, setWindowSize] = useState({
    window: undefined,
    height: undefined,
  });
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);


  
  if (windowSize.width >= "800") {
    navbarSecondRef.current.style.display = "none";
    netflixLogoRef.current.style.display = "none";
  } else if (windowSize.width < "800") {
    navbarSecondRef.current.style.display = "flex";
    netflixLogoRef.current.style.display = "inline-block";
  }
  if (windowSize.width >= "1024") {
    containerLg.current.style.display = "flex";
    featuredContentRef.current.style.display = "none";
  } else if (windowSize.width < "1024") {
    containerLg.current.style.display = "none";
    featuredContentRef.current.style.display = "block";
  }
};
