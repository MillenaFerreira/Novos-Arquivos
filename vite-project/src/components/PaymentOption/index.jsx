import { useState } from 'react';
import { FaCreditCard } from 'react-icons/fa';
import { useOutletContext } from 'react-router-dom';
import styles from '../../pages/PaymentMethod/paymentMethod.module.css';

const PaymentOptions = () => {
    const { handlePaymentSelection, handleConfirmPayment, installmentOptions, paymentMethod } = useOutletContext();
    const [installments, setInstallments] = useState('');

    const handleInstallmentChange = (event) => {
        setInstallments(event.target.value);
    };

    const handleConfirm = () => {
        localStorage.setItem('parcelas', installments)
  
        handleConfirmPayment(paymentMethod, installments);
    };

    return (
        <div className={styles.paymentSection}>
            <h2>Escolha sua Forma de Pagamento</h2>
            <div className={styles.paymentOption}>
                <label onClick={() => handlePaymentSelection("cartao")}>
                    <div className={styles.cardOptions}>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="cartao"
                            checked={paymentMethod === "cartao"}
                            readOnly
                        />
                        <div className={styles.cardOptionsDetails}>
                            <span>Pagamento com cartão de crédito em até 10x</span>
                            <small>Visa, MasterCard, American Express, ELO, Diners</small>
                        </div>
                    </div>
                    <FaCreditCard className={styles.cardIcon} />
                </label>
            </div>

            {paymentMethod === "cartao" && (
                <div className={styles.installmentSection}>
                    <select value={installments} onChange={handleInstallmentChange}>
                        <option value="" disabled>Por favor, selecione</option>
                        {installmentOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            <div className={styles.paymentOption}>
                <label onClick={() => handlePaymentSelection("pix")}>
                    <div>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="pix"
                            checked={paymentMethod === "pix"}
                            readOnly
                        />
                        <span>PIX</span>
                    </div>
                    <FaCreditCard className={styles.cardIcon} />
                </label>
            </div>
            <button onClick={handleConfirm} className={styles.confirmButton}>
                Confirmar Pagamento
            </button>
        </div>
    );
};

export default PaymentOptions;
