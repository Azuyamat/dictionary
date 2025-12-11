import useFetch from "./useFetch";
import { type Word } from "../types/Word";

const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en";

export default function useWord(word: string) {
	const url = word.trim() ? `${API_URL}/${word}` : "";
	return useFetch<Array<Word>>(url);
}