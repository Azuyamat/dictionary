import React, { useEffect, useRef } from 'react'
import styles from './WordSearchInput.module.css'

type Props = {
	value: string
	onChange: (value: string) => void
}

export default function WordSearchInput({ value, onChange }: Props) {
	const inputRef = useRef<HTMLInputElement | null>(null)

	useEffect(() => {
		inputRef.current?.focus()
	}, [])

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			(e.target as HTMLInputElement).blur();
		}
	}

	return (
		<input 
			ref={inputRef}
			type="text" 
			placeholder="Enter a word..."
			className={styles.input}
			value={value}
			onChange={e => onChange(e.target.value)}
			onKeyDown={handleKeyDown}
		/>
	)
}