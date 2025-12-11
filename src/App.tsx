import { useEffect, useState } from "react";
import WordSearchInput from "./components/WordSearchInput";
import useWord from "./hooks/useWord";
import useDebounce from "./hooks/useDebounce";
import Word from "./components/Word";
import { toIndependant } from "./helpers/toIndependant";
import type { IndependentWord } from "./types/Word";

export default function App() {
	const [word, setWord] = useState("");
	const debouncedWord = useDebounce(word, 500);
	const { data, error, loading } = useWord(debouncedWord);
	const [words, setWords] = useState<IndependentWord[]>([]);

	useEffect(() => {
		if (data) {
			const independantWords = data.flatMap(entry => toIndependant(entry));
			setWords(independantWords);
		}
	}, [data]);

  	return (
		<>
			<h1>What word fascinates you?</h1>
			<WordSearchInput value={word} onChange={setWord} />
			{loading && <p>Loading...</p>}
			{error && <p style={{ color: 'red' }}>{error.message}</p>}
			{words.length > 0 && words.map((independantWord, index) => (
				<Word key={`${independantWord.word}-${index}`} word={independantWord} />
			))}
		</>
  	)
}