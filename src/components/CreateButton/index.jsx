import styles from "./style.module.css"

export default function CreateButton({ texto }) {
    return (
        <button style={{ display: "inline" }} className={styles.createButton}>
            <p>{texto}</p>
        </button>
    )
}