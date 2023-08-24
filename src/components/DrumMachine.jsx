import DrumContextProvider from "../context/drumContext";
import Controls from "./Controls";
import PadBank from "./PadBank";

const DrumMachine = () => {
  return (
    <DrumContextProvider>
      <div className="inner-container" id="drum machine">
        <PadBank />
        <Controls />
      </div>
    </DrumContextProvider>
  );
};

export default DrumMachine;
