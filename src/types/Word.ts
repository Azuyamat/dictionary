type Word = {
	word: string;
	phonetics: Array<{
		text: string;
		audio: string | null;
	}>;
	meanings: Array<{
		partOfSpeech: string;
		definitions: Array<{
			definition: string;
			example: string;
			synonyms: string[];
			antonyms: string[];
		}>;
	}>;
	license: {
		name: string;
		url: string;
	};
	sourceUrls: string[];
};

type IndependentWord = {
	word: string;
	partOfSpeech: string;
	phonetics: Array<{
		text: string;
		audio: string | null;
	}>;
	definition: string;
	example?: string;
	synonyms: string[];
	antonyms: string[];
}

export type { Word };
export type { IndependentWord };