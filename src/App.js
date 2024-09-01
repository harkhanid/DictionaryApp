import "./App.css";
import Header from "./components/CustomComponents/Header/Header";
import Search from "./components/CustomComponents/Search/Search";
import Dictionary from "./components/CustomComponents/Dictionary/Dictionary";
import { useState } from "react";

function App() {
  const [word, setWord] = useState("keyboard");
  return (
    <div className="mono">
      <Header />
      <Search word={word} setWordFn={setWord} />
      <Dictionary word={word} setWordFn={setWord} />
    </div>
  );
}

export default App;
