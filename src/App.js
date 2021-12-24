import { useState } from "react";
import Audio from "./Audio.js";
import "./App.css";

const drumSound = [
  {
    id: "0Q",
    drumKey: "Q",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    id: "1W",
    drumKey: "W",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    id: "2E",
    drumKey: "E",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    id: "3A",
    drumKey: "A",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    id: "4S",
    drumKey: "S",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    id: "5D",
    drumKey: "D",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    id: "6Z",
    drumKey: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    id: "7X",
    drumKey: "X",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    id: "8C",
    drumKey: "C",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

function App() {
  const [clip, setClip] = useState("clip-name");

  return (
    <div id="drum-machine">
      <div id="display">
      <div className="clipname">{clip}</div>
      <div className="grid">
        {drumSound.map((item) => (
          <Audio
            key={item.id}
            id={item.id}
            url={item.url}
            drumKey={item.drumKey}
            setClip={setClip}
          />
        ))}
      </div>     
    </div>
  </div>
  );
};

export default App;
