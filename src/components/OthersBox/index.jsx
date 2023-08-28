import styles from "./style.module.css"

export default function OthersBox({ titulo, boxIcon }) {
    return (
        <button style={{ backgroundImage: `url(${boxIcon})` }} className={styles.othersItemBox}>
            <p>{titulo}</p>
        </button>
    )
}