import { useContext, useRef, useEffect, memo, useCallback } from "react";
import audios from "../assets/audios";
import { DrumContext } from "../context/drumContext";

const pad_no = { q: 0, w: 1, e: 2, a: 3, s: 4, d: 5, z: 6, x: 7, c: 8 };

const DrumPad = memo(({ track, audioRef, padRef, power, handleDrum }) => {
  const _trackUrl = track.url;
  const _id = track.id;
  audioRef.current[_id] = new Audio(_trackUrl);
  return (
    <div
      ref={(element) => (padRef.current[_id] = element)}
      className="drum-pad"
      style={{ "--bg-color": power ? "goldenrod" : "#808080" }}
      onClick={() => {
        handleDrum(_id);
      }}
    >
      {track.keyTrigger}
    </div>
  );
});

const PadBank = () => {
  const audioRef = useRef({});
  const padRef = useRef({});
  const { handleTime, handleDisplay, bank, power, volume } = useContext(
    DrumContext
  );
  const activeBank = bank ? audios[0] : audios[1];

  const handleDrum = useCallback(
    (id) => {
      handleTime();
      handleDisplay(id);
      const audio = audioRef.current[id];
      if (power && audio) {
        audio.currentTime = 0;
        audio.volume = volume;
        audio.play();
      }
    },
    [power, volume]
  );

  useEffect(() => {
    const handleKeyDown = (event) => {
      const index = pad_no[event.key];
      if (index !== undefined && power) {
        const _id = activeBank[index]?.id;
        const pad = padRef.current[_id];
        pad.classList.add("drum-pad-blink");
        handleDrum(_id);
        setTimeout(() => {
          if (pad) pad.classList.remove("drum-pad-blink");
        }, 300);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className="pad-bank">
      {activeBank.map((track) => {
        return (
          <DrumPad
            key={track.id}
            track={track}
            audioRef={audioRef}
            padRef={padRef}
            power={power}
            handleDrum={handleDrum}
          />
        );
      })}
    </div>
  );
};

export default PadBank;
