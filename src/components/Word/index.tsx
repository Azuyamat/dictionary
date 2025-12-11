import type { IndependentWord, Word as WordType } from "../../types/Word"
import Phonetic from "./Phonetic";
import styles from "./Word.module.css"

type Props = {
	word: IndependentWord;
}

export default function Word({ word }: Props) {
	return (
		<div className={styles.word}>
			<h2 className={styles.wordTitle}>
				{word.word} {word.phonetics.map((phonetic, index) => (
					<Phonetic key={`${word.word}-phonetic-${index}`} phonetic={phonetic} />
				))}
			</h2>
			{word.meanings.map((meaning, index) => (
				<Meaning key={`${word.word}-meaning-${index}`} {...meaning} />
			))}
			{word.sourceUrls.length > 0 && (
				<p className={styles.source}>
					{word.sourceUrls.map((url, index) => (
						<a key={url} href={url} target="_blank" rel="noopener noreferrer">
							{url}
							{index < word.sourceUrls.length - 1 && ", "}
						</a>
					))}
				</p>
			)}
		</div>
	)
}

function Meaning(meaning: WordType["meanings"][0]) {
	return (
		<div className={styles.meaning}>
			<h3 className={styles.partOfSpeech}>{meaning.partOfSpeech}</h3>
			{meaning.definitions.map((definition, index) => (
				<Definition key={`definition-${index}`} {...definition} />
			))}
		</div>
	)
}

function Definition(definition: WordType["meanings"][0]["definitions"][0]) {
	return (
		<div className={styles.definition}>
			<p>{definition.definition}</p>
			{definition.example && <blockquote className={styles.example}>{definition.example}</blockquote>}
		</div>
	)
}