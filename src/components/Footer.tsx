import styles from "./Footer.module.css";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<p>&copy; {currentYear} Dictionary. All rights reserved.</p>
			<p>Made with ❤️ by Azuyamat</p>
			<p>Thanks to <a href="https://dictionaryapi.dev/" target="_blank" rel="noopener noreferrer">Dictionary API</a> for the word data.</p>
		</footer>
	)
}