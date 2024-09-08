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
        console.log(result);
        setData(result);
      });
  }, [word]);
  return (
    <>
      {data != null && (
        <>
          {data.title != "No Definitions Found" ? (
            <>
              <Word
                word={data[0].word}
                phonetic={data[0].phonetic}
                phonetics={data[0].phonetics}
              />
              {data[0].meanings.map((meaning) => (
                <DictionaryCard meaning={meaning} setWordFn={setWordFn} />
              ))}
              <hr />
              {data[0].sourceUrls.map((url) => (
                <div className="split source-link h2-title">
                  <h2 className="">Source</h2>{" "}
                  <a href={url} target="_blank">
                    {" "}
                    {url}
                  </a>
                </div>
              ))}
            </>
          ) : (
            <NoWordFound data={data} />
          )}
        </>
      )}
    </>
  );
};

export default Dictionary;
