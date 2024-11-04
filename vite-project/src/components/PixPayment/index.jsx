import React, { useState } from "react";
import styles from './pixPayment.module.css';
import { Link } from "react-router-dom";
import Lottie from 'lottie-react';
import done from "../../animation/done.json"

export default function PixPayment() {
    const [paymentStatus, setPaymentStatus] = useState("pending");
    const pixCode = "00020126360014BR.GOV.BCB.PIX0114[your_pix_key]520400";

    const handleCopyCode = () => {
        navigator.clipboard.writeText(pixCode)
            .then(() => {
                alert("Código PIX copiado!");
            })
            .catch(() => {
                alert("Falha ao copiar o código.");
            });
    };

    const handleConfirmPixPayment = () => {
        setPaymentStatus("paid");
    };

    return (
        <div className={styles.pixDetails}>

            {paymentStatus === "pending" ? (
                <>
                    <div className={styles.header}>
                        <h2>Insira suas informações de pagamento</h2>
                        <Link to="/escolher-pagamento">Alterar Opção</Link>
                    </div>
                    <p>Escaneie o QR code abaixo para realizar o pagamento.</p>
                    <div className={styles.qrCode}>
                        {/* Substituir por um componente de QR code real */}
                        <img src="https://codigosdebarrasbrasil.com.br/wp-content/uploads/2019/09/codigo_qr-300x300.png" alt="QR code PIX" />
                    </div>
                    <p className={styles.codigo}>{pixCode}</p>
                    <button onClick={handleCopyCode} className={styles.copy}>Copiar Código</button>
                    <button onClick={handleConfirmPixPayment} className={styles.confirmButton}>Confirmar Pagamento</button>
                </>
            ) : (
                <>
                    <Lottie
                        animationData={done}
                        loop={false}
                        autoplay={true}
                        style={{ width: 250, height: 250 }}
                    />
                    <button className={styles.copy}>Pagamento realiazado</button>
                    <button className={styles.copy}>Ver o Código</button>
                </>


            )}
        </div>
    );
}
