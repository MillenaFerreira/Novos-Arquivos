import { useEffect, useState } from 'react';
import styles from "./countdown.module.css";

export default function Countdown() {
    const targetDate = new Date('2024-10-26T00:00:00');
    const [timeLeft, setTimeLeft] = useState({});

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000),
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div>
            {timeLeft.days !== undefined ? (
                <div className={styles.countdown}>
                    <div className={styles.day}>
                        <strong>{timeLeft.days}</strong>
                        <span>Dias</span>
                    </div>
                    <span className={styles.separator}>:</span>
                    <div className={styles.day}>
                        <strong>{timeLeft.hours}</strong>
                        <span>Horas</span>
                    </div>
                    <span className={styles.separator}>:</span>
                    <div className={styles.day}>
                        <strong>{timeLeft.minutes}</strong>
                        <span>Minutos</span>
                    </div>
                    <span className={styles.separator}>:</span>
                    <div className={styles.day}>
                        <strong>{timeLeft.seconds}</strong>
                        <span>Segundos</span>
                    </div>
                </div>
            ) : (
                <h2>Carregando...</h2>
            )}
        </div>
    );
}
