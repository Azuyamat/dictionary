import { type Word } from "../types/Word";
import { type IndependentWord } from "../types/Word";

export function toIndependant(wordData: Word): IndependentWord[] {
	const independantWords: IndependentWord[] = [];
	wordData.meanings.forEach((meaning) => {
		meaning.definitions.forEach((definition) => {
			independantWords.push({
				word: wordData.word,
				phonetics: wordData.phonetics,
				partOfSpeech: meaning.partOfSpeech,
				definition: definition.definition,
				example: definition.example || undefined,
				synonyms: definition.synonyms,
				antonyms: definition.antonyms,
				sourceUrls: wordData.sourceUrls,
			});
		});
	});
	return independantWords;
}