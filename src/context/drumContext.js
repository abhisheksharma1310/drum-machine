import { createContext, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "setPower":
      return {
        ...state,
        power: !state.power,
        display: state.power ? "" : "Welcome!"
      };
    case "setBank":
      return {
        ...state,
        bank: !state.bank,
        display: state.bank ? "Smooth Piano Kit" : "Heater Kit"
      };
    case "setDisplay":
      return { ...state, display: action.payload };
    case "setTime":
      return { ...state, time: action.payload };
    case "setVolume":
      return {
        ...state,
        volume: action.payload / 100.0,
        display: `Volume: ${Math.round(action.payload)}`
      };
    default:
      return state;
  }
};

export const DrumContext = createContext(null);

const DrumContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    power: true,
    bank: true,
    display: "Drum Master",
    volume: 50,
    time: new Date().getSeconds()
  });

  const handlePower = () => {
    dispatch({ type: "setPower" });
  };

  const handleBank = () => {
    dispatch({ type: "setBank" });
  };

  const handleDisplay = (value) => {
    dispatch({ type: "setDisplay", payload: value });
  };

  const handleVolume = (value) => {
    dispatch({ type: "setVolume", payload: value });
  };

  const handleTime = () => {
    const time = new Date().getSeconds();
    dispatch({ type: "setTime", payload: time });
  };

  const { power, bank, display, volume, time } = state;

  return (
    <DrumContext.Provider
      value={{
        power,
        bank,
        display,
        volume,
        time,
        handlePower,
        handleBank,
        handleDisplay,
        handleVolume,
        handleTime
      }}
    >
      {children}
    </DrumContext.Provider>
  );
};

export default DrumContextProvider;
