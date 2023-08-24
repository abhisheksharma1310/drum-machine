import { useState, useEffect } from "react";

const useBackLit = (display, time, power) => {
  const [backLit, setBackLit] = useState(false);
  useEffect(() => {
    setBackLit(true);
    const timer = setTimeout(() => {
      setBackLit(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [display, time]);

  return power ? backLit : false;
};

export default useBackLit;
