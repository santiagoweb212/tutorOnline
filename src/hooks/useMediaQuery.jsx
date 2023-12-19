
import { useState, useEffect, useCallback } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() => {
    try {
      const mediaQuery = window.matchMedia(query);
      return mediaQuery.matches;
    } catch (error) {
      console.error("Error al evaluar la consulta de medios:", error);
      return false;
    }
  });

  const handleMediaQueryChange = useCallback((event) => {
    setMatches(event.matches);
  }, []);

  useEffect(() => {
    let mediaQuery;

    try {
      mediaQuery = window.matchMedia(query);

      if (!mediaQuery) {
        console.error("No se pudo crear el objeto MediaQueryList.");
        return;
      }
    } catch (error) {
      console.error("Error al evaluar la consulta de medios:", error);
      return;
    }

    handleMediaQueryChange(mediaQuery);

    const handleCleanUp = () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };

    mediaQuery.addListener(handleMediaQueryChange);

    return handleCleanUp;
  }, [query, handleMediaQueryChange]);

  return matches;
};

export default useMediaQuery;
