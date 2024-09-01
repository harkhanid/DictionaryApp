import { useEffect, useState } from "react";
import DictionaryCard from "../../ReusableComponents/DictionaryCard/DictionaryCard";
import NoWordFound from "../NoWordFound/NoWordFound";
import Word from "../Word/Word";
import "./Dictionary.css";

const Dictionary = ({ word, setWordFn }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
      .then((response) => response.json())
      .then((result) => {
        setData(result[0]);
        console.log(result[0]);
      });
  }, [word]);
  return (
    <>
      {data != null ? (
        <>
          <Word
            word={data.word}
            phonetic={data.phonetic}
            phonetics={data.phonetics}
          />
          {data.meanings.map((meaning) => (
            <DictionaryCard meaning={meaning} setWordFn={setWordFn} />
          ))}
        </>
      ) : (
        <NoWordFound />
      )}
    </>
  );
};

export default Dictionary;
