import styles from "./style.module.css"

export default function CreateButton({ texto }) {
    return (
        <button className={styles.createButton}>
            {texto}
        </button>
    )
}