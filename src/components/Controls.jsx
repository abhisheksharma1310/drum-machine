import { useContext } from "react";
import { DrumContext } from "../context/drumContext";
import ControlButton from "./ControlButton";
import Display from "./Display";
import VolumeControl from "./VolumeControl";

const Controls = () => {
  const { power, bank, handlePower, handleBank } = useContext(DrumContext);

  return (
    <div className="controls-container">
      <ControlButton name="Power" mode={power} handle={handlePower} />
      <Display />
      <VolumeControl />
      <ControlButton name="Bank" mode={bank} handle={handleBank} />
    </div>
  );
};

export default Controls;
