import "./Word.css";

const Word = ({ word, phonetic, phonetics }) => {
  const phoneticWAudio = phonetics.filter(
    (phonetic) => phonetic.audio !== null && phonetic.audio !== ""
  );
  const audioLink = phoneticWAudio == null ? null : phoneticWAudio[0].audio;
  let playSound = new Audio(audioLink);
  const playPhonetic = () => {
    playSound.play();
  };
  return (
    <div className="title-container split">
      <div>
        <h1>{word}</h1>
        <p>{phonetic}</p>
      </div>
      <div>
        <button className="btn" onClick={playPhonetic}>
          <img src="/images/icon-play.svg" />
        </button>
      </div>
    </div>
  );
};

export default Word;
