import children from "../../assets/children.svg";
import costumeAwards from "../../assets/costumeAwards.svg";
import open from "../../assets/open.svg";
import styles from "./rulesAdditionalInformation.module.css";
export default function RulesAdditionalInformation() {
    return (
        <>
            <h1 id="rules" className={styles.rules}>Regras e Informações Adicionais</h1>
            <div className={styles.rulesAdditionalInformation}>
                <div className={styles.cardRules}>
                    <img src={children} alt="Crianças" />
                    <div>
                        <h3>Crianças</h3>
                        <p>Regras de pagamento: Crianças até 4 anos não pagam, e de 5 a 10 anos pagam meia entrada.</p>
                    </div>
                </div>
                <div className={styles.cardRules}>
                    <img src={open} alt="Open Bar & Open Food" />
                    <div>
                        <h3>Open Bar & Open Food</h3>
                        <p>Tempo do Open: O Open Food & Bar é válido das 19h até o encerramento do evento.</p>
                    </div>
                </div>
                <div className={styles.cardRules}>
                    <img src={costumeAwards} alt="Premiação de Fantasia" />
                    <div>
                        <h3>Premiação de Fantasia</h3>
                        <p>Melhor Fantasia: O concurso de fantasias premiará o participante com a fantasia mais criativa da noite!</p>
                    </div>
                </div>
            </div>
        </>
    )
}