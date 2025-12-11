import styles from './WordSearchInput.module.css'

type Props = {
	value: string
	onChange: (value: string) => void
}

export default function WordSearchInput({ value, onChange }: Props) {
	return (
		<input 
			type="text" 
			placeholder="Enter a word..."
			className={styles.input}
			value={value}
			onChange={e => onChange(e.target.value)}
		/>
	)
}