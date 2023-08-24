import { useContext, useState } from "react";
import { DrumContext } from "../context/drumContext";
import useBackLit from "../utils/backlit";

const Display = () => {
  const { display, power, time } = useContext(DrumContext);
  const [isHovered, setIsHovered] = useState(false);
  const backLit = useBackLit(display, time, power);

  const style = {
    backgroundColor: backLit ? "#fbf9f9" : "#808080",
    ":hover": {
      backgroundColor: power ? "#fbf9f9" : "#808080"
    }
  };

  return (
    <div
      className="display"
      id="display"
      style={Object.assign({}, style, isHovered && style[":hover"])}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {power && display}
    </div>
  );
};

export default Display;
