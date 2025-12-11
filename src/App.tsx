import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import WordSearchInput from "./components/WordSearchInput";
import useWord from "./hooks/useWord";
import useDebounce from "./hooks/useDebounce";
import Word, { EmptyState, LoadingState } from "./components/Word";
import { toIndependant } from "./helpers/toIndependant";
import ErrorBox from "./components/ErrorBox";
import type { IndependentWord } from "./types/Word";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DictionaryPage />} />
        <Route path="/:word" element={<DictionaryPage />} />
      </Routes>
      <Footer />
    </>
  );
}

function DictionaryPage() {
  const { word: urlWord } = useParams<{ word: string }>();
  const navigate = useNavigate();
  const debouncedWord = useDebounce(urlWord || "", 200);
  const { data, error, loading } = useWord(debouncedWord);

  const words = data && data.length > 0 ? data.flatMap(toIndependant) : [];

  const getErrorMessage = (error: Error) => {
    if (error.message.includes("404")) {
      return "Word not found";
    }
    return error.message;
  };

  const handleWordChange = (newWord: string) => {
    if (newWord) {
      navigate(`/${newWord}`, { replace: true });
    } else {
      navigate("/", { replace: true });
    }
  };

  return (
    <>
      <h1>What word fascinates you?</h1>
      <WordSearchInput value={urlWord || ""} onChange={handleWordChange} />
      {loading && <LoadingState />}
      <ErrorBox message={error ? getErrorMessage(error) : ""} />
      {!loading && !error && words.length === 0 && debouncedWord === "" && (
        <EmptyState />
      )}
      {!loading && !error && words.length > 0 && <Results words={words} />}
    </>
  );
}

function Results({ words }: { words: IndependentWord[] }) {
  return (
    <>
      {words.map((independantWord, index) => (
        <Word key={`${independantWord.word}-${index}`} word={independantWord} />
      ))}
    </>
  );
}
