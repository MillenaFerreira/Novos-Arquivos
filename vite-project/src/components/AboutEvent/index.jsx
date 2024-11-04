import styles from "./aboutEvent.module.css";
export default function AboutEvent() {
    return (
        <>
            <main id="about" className={styles.aboutEvent}>
                <h2 className={styles.title}>Alguém disse festa? No dia 26 de Outubro, a partir das 19h, teremos uma incrível festa à fantasia na HMMBURGUER! Traga sua criatividade, venha curtir nosso Open Food e Open Bar e concorra ao prêmio de melhor fantasia da noite!</h2>
                <div className={styles.localMap}>
                    <div className={styles.dataLocalMap}>
                        <div className={styles.location}>
                            <p>LOCAL: </p>
                            <p>Travessa Morada do Servidor, 19 - Jardim Maria Helena, Barueri - SP</p>
                        </div>
                        <div className={styles.local}>
                            <p>DATA: 26/10/2024</p>
                        </div>
                        <div className={styles.local}>
                            <p>HORA: 19h00</p>
                        </div>

                        <div className={styles.awards}>
                            <p>PREMIAÇÃO</p>
                            <p>1º lugar: 150 reais</p>
                            <p>2º lugar: 100 reais</p>
                            <p>3º lugar: 50 reais</p>
                        </div>
                    </div>
                    <div className={styles.map}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9015480749897!2d-46.8537!3d-23.5026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf024daf2b0b71%3A0xc0f631ecf8a5976!2sTravessa%20Morada%20do%20Servidor%2C%2019%20-%20Jardim%20Maria%20Helena%2C%20Barueri%20-%20SP!5e0!3m2!1sen!2sbr!4v1697113377950!5m2!1sen!2sbr"
                            width="400"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </main>
        </>
    )
}