import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/LevelUpModal.module.css";

export function LevelUpModal() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Você alcançou um novo level</p>

                <button type="button">
                    <img src="/icons/close.svg" alt="fechar modal" />
                </button>
            </div>
        </div>
    );
}

/* first approach, don't know it is best pratice

interface LevelProps {
    level: number;
}

export function LevelUp(props: LevelProps) {
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{props.level}</header>

                <strong>Parabéns</strong>
                <p>Você alcançou um novo level</p>

                <button type="button">
                    <img src="/icons/close.svg" alt="fechar modal" />
                </button>
            </div>
        </div>
    );
}

*/
