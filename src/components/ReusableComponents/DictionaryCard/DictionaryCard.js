import "./DictionaryCard.css";

const DictionaryCard = ({ meaning }) => {
  return (
    <div className="dictionary-card">
      <div className="split part-of-speech">
        <p>{meaning.partOfSpeech}</p>
        <hr />
      </div>
      <h2 className="h2-title">Meaning</h2>
      <ul className="flow-content">
        {meaning.definitions.map((def) => (
          <li className="flow-content">
            <p>{def.definition} </p>
            {def.example != null && <p className="example">{def.example}</p>}
          </li>
        ))}
      </ul>

      {meaning.synonyms && meaning.synonyms.length != 0 && (
        <div className="split">
          <h2>Synonyms</h2>
          <p className="link">{meaning.synonyms}</p>
        </div>
      )}

      {meaning.antonyms && meaning.antonyms.length != 0 && (
        <div className="split">
          <h2>Antonyms</h2>
          <p className="link">{meaning.antonyms}</p>
        </div>
      )}
    </div>
  );
};

export default DictionaryCard;
