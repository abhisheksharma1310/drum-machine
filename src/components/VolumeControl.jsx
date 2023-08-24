import { useContext, useEffect, useState } from "react";
import { DrumContext } from "../context/drumContext";
import useVolume from "../utils/volume";

const VolumeControl = () => {
  const { volume, handleVolume } = useContext(DrumContext);
  const [range, setRange] = useState(volume);
  const [_volume] = useVolume(range);

  const handleChange = (event) => {
    const { value } = event.target;
    setRange(value);
  };

  useEffect(() => {
    handleVolume(_volume);
  }, [_volume]);

  return (
    <div className="volume-control">
      <input
        type="range"
        min="1"
        max="100"
        volume={range}
        className="volume-slider"
        id="volume-slider"
        onChange={handleChange}
      />
    </div>
  );
};

export default VolumeControl;
