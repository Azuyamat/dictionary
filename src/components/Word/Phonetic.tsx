import type { Word } from "../../types/Word"
import styles from "./Word.module.css"
import { Volume2 } from "lucide-react";

type Props = {
	phonetic: Word["phonetics"][0];
}

export default function Phonetic({ phonetic }: Props) {
	if (!phonetic.text && !phonetic.audio) {
		return null;
	}

	const playAudio = () => {
		if (phonetic.audio) {
			const audio = new Audio(phonetic.audio);
			audio.play();
		}
	};

	return (
		<>
			{phonetic.text && <span className={styles.phonetic}>{phonetic.text} {phonetic.audio && (
				<button 
					type="button"
					onClick={playAudio}
					className={styles.playButton}
					aria-label="Play pronunciation"
				>
					<Volume2
						size={16}
					/>
				</button>
			)}</span>}
		
		</>
	)
}