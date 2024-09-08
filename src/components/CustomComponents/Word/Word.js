import { useState, useRef, useEffect } from "react";
import "./Word.css";

const Word = ({ word, phonetic, phonetics }) => {
  const phoneticWAudio = phonetics.filter(
    (phonetic) => phonetic.audio !== null && phonetic.audio !== ""
  );
  const audioLink = phoneticWAudio == null ? null : phoneticWAudio[0].audio;
  const [isPlaying, setIsPlaying] = useState(false);
  let playSoundRef = useRef(new Audio(audioLink));

  useEffect(() => {
    const handlePlay = () => {
      setIsPlaying(true);
      console.log(isPlaying);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };
    playSoundRef.current.addEventListener("play", handlePlay);
    playSoundRef.current.addEventListener("ended", handleEnded);
  });

  const playPhonetic = () => {
    playSoundRef.current.play();
  };
  return (
    <div className="title-container split">
      <div>
        <h1>{word}</h1>
        <p>{phonetic}</p>
      </div>
      <div>
        <button className="btn" onClick={playPhonetic}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="75"
            viewBox="0 0 75 75"
          >
            <g fill="#A445ED" fill-rule="evenodd">
              <circle
                cx="37.5"
                cy="37.5"
                r="37.5"
                opacity={isPlaying ? "1" : ".25"}
              />
              <path fill={isPlaying ? "#fff" : ""} d="M29 27v21l21-10.5z" />
            </g>
          </svg>{" "}
        </button>
      </div>
    </div>
  );
};

export default Word;
