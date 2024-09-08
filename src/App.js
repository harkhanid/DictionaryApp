import "./App.css";
import Header from "./components/CustomComponents/Header/Header";
import Search from "./components/CustomComponents/Search/Search";
import Dictionary from "./components/CustomComponents/Dictionary/Dictionary";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

function App() {
  const [word, setWord] = useState("");
  const [font, setFont] = useState("serif");
  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
    (prefersDark) => {
      setIsDarkTheme(prefersDark);
    }
  );

  const [isDarkTheme, setIsDarkTheme] = useState(systemPrefersDark);
  return (
    <div className={`outer-container ${isDarkTheme ? "dark" : "light"}`}>
      <div className={`${font} container`}>
        <Header
          font={font}
          setFont={setFont}
          isDarkTheme={isDarkTheme}
          setIsDarkTheme={setIsDarkTheme}
        />
        <Search word={word} setWordFn={setWord} />
        <Dictionary word={word} setWordFn={setWord} />
      </div>
    </div>
  );
}

export default App;
