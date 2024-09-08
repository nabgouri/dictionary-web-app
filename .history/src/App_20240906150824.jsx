import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import InputFeild from "./components/InputField";
import WordSpeeling from "./components/WordSpelling";
import WordInfo from "./components/WordInfo";
import Footer from "./components/Footer";
import { useState } from "react";
import Error from "./components/Error";
import LoadSpinner from "./components/LoadSpinner";
import { FontContext } from "./store/font-theme-context";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [wordInfo, setWordInfo] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [font, setFont] = useState("Sans Serif");
  const handleReset = () => {
    setWordInfo(null);
    setFont("Sans Serif");
    setDarkMode(false);
  };
  const handleFont = (name) => {
    setFont(name);
    console.log(name);
  };
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const fetchWordInfo = async (word) => {
    if (!word) {
      setWordInfo(null);
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(
          word
        )}`
      );
      if (!response.ok) {
        throw new Error("Failed to find the word");
      }
      const data = await response.json();
      setWordInfo(data[0]);
      setError(null); // Clear any previous error
    } catch (error) {
      setError(error);
      // setWordInfo(null); // Clear word info if there's an error
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSynonymsWord = (synonym) => {
    fetchWordInfo(synonym);
  };
  const fontCTX = {
    font,
    handleFont,
  };
  return (
    <FontContext.Provider value={fontCTX}>
      <Wrapper isDark={darkMode}>
        <Header
          handleReset={handleReset}
          toggleTheme={toggleTheme}
          isDark={darkMode}
        />
        <InputFeild onFetch={fetchWordInfo} />
        {error ? (
          <Error message={error} />
        ) : isLoading ? (
          <LoadSpinner />
        ) : (
          wordInfo && (
            <>
              <WordSpeeling wordInfo={wordInfo} />
              {wordInfo.meanings?.map((meaning, index) => (
                <WordInfo
                  key={index}
                  title={meaning.partOfSpeech}
                  definitions={meaning.definitions}
                  synonyms={meaning.synonyms}
                  fetchSynonymsWord={fetchSynonymsWord}
                />
              ))}
              <Footer word={wordInfo.word} />
            </>
          )
        )}
      </Wrapper>
    </FontContext.Provider>
  );
}

export default App;
