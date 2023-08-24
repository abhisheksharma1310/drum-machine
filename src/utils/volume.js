import { useEffect, useState } from "react";

const useVolume = (volume, delay = 500) => {
  const [value, setValue] = useState(volume);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(volume);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [volume]);

  return [value];
};

export default useVolume;
