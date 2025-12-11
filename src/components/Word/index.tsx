import { Check, Copy } from "lucide-react";
import type { IndependentWord } from "../../types/Word"
import Phonetic from "./Phonetic";
import styles from "./Word.module.css"
import { useState } from "react";

type Props = {
	word: IndependentWord;
}

export default function Word({ word }: Props) {
	const selectedPhonetic = word.phonetics.find(p => p.audio) || word.phonetics[0];

	return (
		<div className={styles.word}>
			<h2 className={styles.wordTitle}>
				{word.word} {selectedPhonetic && (
					<Phonetic phonetic={selectedPhonetic} />
				)}
			</h2>
			<Meaning {...word} />
			<Siblings {...word} />
			<SourceLink word={word} />
		</div>
	)
}

function Meaning(word: IndependentWord) {
	return (
		<div className={styles.meaning}>
			<h3 className={styles.partOfSpeech}>{word.partOfSpeech}</h3>
			<Definition {...word} />
		</div>
	)
}

function Definition(word: IndependentWord) {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(word.definition);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	}

	return (
		<div className={styles.definition}>
			<p>
				{word.definition}
				<button 
					className={styles.copyIcon}
					onClick={handleCopy}
					type="button"
				>
					{copied ? <Check size={16} /> : <Copy size={16} />}
				</button>
			</p>
			{word.example && <blockquote className={styles.example}>{word.example}</blockquote>}
		</div>
	)
}

function Siblings(word: IndependentWord) {
	const synonyms = word.synonyms || [];
	const antonyms = word.antonyms || [];

	return (
		<div className={styles.siblings}>
			{synonyms.length > 0 && (
				<div className={styles.synonyms}>
					{synonyms.map((synonym) => (
						<span key={synonym} className={styles.synonym}>
							{synonym}
						</span>
					))}
				</div>
			)}
			{antonyms.length > 0 && (
				<div className={styles.antonyms}>
					{antonyms.map((antonym) => (
						<span key={antonym} className={styles.antonym}>
							{antonym}
						</span>
					))}
				</div>
			)}
		</div>
	)
}

function SourceLink({ word }: { word: IndependentWord }) {
	const urls = word.sourceUrls;

	return (
		<div className={styles.source}>
			{urls.map((url) => (
				<a key={url} href={url} target="_blank" rel="noopener noreferrer">{url}</a>
			))}
		</div>
	)
}

export function LoadingState() {
	return (
		<div className={`${styles.word} ${styles.loadingState}`}>
			<p>Loading...</p>
		</div>
	)
}

export function EmptyState() {
	return (
		<div className={`${styles.word} ${styles.emptyState}`}>
			<p>Start by typing a word in the search box above to look up its definition.</p>
		</div>
	)
}