import useFetch from "./useFetch";
import { type Word } from "../types/Word";

const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en";

export default function useWord(word: string) {
	return useFetch<Array<Word>>(`${API_URL}/${word}`);
}