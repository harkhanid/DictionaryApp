import { useState } from "react";
import "./Search.css";

const Search = ({ word, setWordFn }) => {
  const [errorState, setErrorState] = useState(false);
  const onSubmit = (e) => {
    setErrorState(false);
    if (e.key === "Enter") {
      console.log(e.target.value);
      if (e.target.value == "") {
        setErrorState(true);
      }
      setWordFn(e.target.value);
    }
  };

  return (
    <>
      <div className={`input-container ${errorState ? "input-error" : ""}`}>
        <input
          type="text"
          placeholder="search for any word"
          onKeyDown={onSubmit}
        />
        <img src="/images/icon-search.svg" />
      </div>
      {errorState && <p className="error-message">Whoops, can’t be empty…</p>}
    </>
  );
};

export default Search;
