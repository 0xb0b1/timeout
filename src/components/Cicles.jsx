import styles from "../styles/components/Cicles.module.css";

export function Cicles() {
    return (
        <div className={styles.cicleContainer}>
            <p>Inicie um ciclo para receber desafios</p>
            <img src="icons/level-up.svg" alt="level up" />
            <p>Avance de nivel completando os desafios</p>
        </div>
    )
}