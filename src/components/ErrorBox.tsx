import styles from "./ErrorBox.module.css";

type Props = {
	message: string;
}

export default function ErrorBox({ message }: Props) {
	if (!message) {
		return null;
	}

	return (
		<div className={styles.error}>
			<p>{message}</p>
		</div>
	)
}