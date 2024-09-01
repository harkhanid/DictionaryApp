import "./Search.css";

const Search = ({ word, setWordFn }) => {
  const onSubmit = (e) => {
    if (e.key === "Enter") {
      setWordFn(e.target.value);
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="search for any word"
        onKeyDown={onSubmit}
      />
      <img src="/images/icon-search.svg" />
    </div>
  );
};

export default Search;
