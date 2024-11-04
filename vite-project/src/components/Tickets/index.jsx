import { Link } from "react-router-dom";
import styles from "./tickets.module.css";
export default function Tickets() {
    return (
        <>
            <h1 id="tickets" className={styles.title}>Garanta seu Ingresso Agora !</h1>
            <div className={styles.pricingContainer}>
                <div className={styles.pricingCard}>
                    <h1>Criança</h1>
                    <h3>até 10 anos</h3>
                    <div className={styles.priceBox}>
                        <span className={styles.currency}>R$</span>
                        <span className={styles.price}>39</span>
                        <span className={styles.cents}>,50</span>
                        <p>POR PESSOA</p>
                    </div>
                    <Link className={styles.ticketsButton} to={"/ingresso"}><span>Compre Agora !</span></Link>
                </div>
                <div className={styles.pricingCard}>
                    <div>
                        <h1>Acesso</h1>
                        <h3>Antecipado</h3>
                    </div>
                    <div className={styles.priceBox}>
                        <span className={styles.currency}>R$</span>
                        <span className={styles.price}>70</span>
                        <span className={styles.cents}>,00</span>
                        <p>POR PESSOA</p>
                    </div>
                    <Link className={styles.ticketsButton} to={"/ingresso"}><span>Compre Agora !</span></Link>
                </div>
                <div className={styles.pricingCard}>
                    <h1>Criança</h1>
                    <h3>até 4 anos</h3>
                    <div className={styles.priceBox}>
                        <h2 className={styles.price}>Grátis</h2>
                    </div>
                </div>
            </div>
        </>
    )
}