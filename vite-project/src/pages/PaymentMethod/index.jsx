import { useState } from "react";
import { useNavigate, Outlet, Link } from "react-router-dom";
import Header from "../../components/Header";
import { FaShoppingCart, FaCreditCard, FaCheckCircle } from 'react-icons/fa';
import styles from './paymentMethod.module.css';

export default function PaymentMethod() {
    const [paymentMethod, setPaymentMethod] = useState("");
    const navigate = useNavigate();

    const list = JSON.parse(localStorage.getItem('list'));
    const totalAmount = list.totalDaCompra;

    const handlePaymentSelection = (method) => {
        setPaymentMethod(method);
    };

    const handleConfirmPayment = () => {
        if (paymentMethod === "cartao") {
            navigate('cartao');
        } else if (paymentMethod === "pix") {
            navigate('pix');
        }
    };

    const installmentOptions = [
        { value: 1, label: `1 Parcela R$ ${totalAmount.toFixed(2)}` },
        { value: 2, label: `2 Parcelas R$ ${(totalAmount / 2).toFixed(2)}` },
        { value: 3, label: `3 Parcelas R$ ${(totalAmount / 3).toFixed(2)}` },
        { value: 4, label: `4 Parcelas R$ ${(totalAmount / 4).toFixed(2)}` },
        { value: 5, label: `5 Parcelas R$ ${(totalAmount / 5).toFixed(2)}` },
        { value: 6, label: `6 Parcelas R$ ${(totalAmount / 6).toFixed(2)}` },
        { value: 7, label: `7 Parcelas R$ ${(totalAmount / 7).toFixed(2)} (+ R$ 4,83 por parcela)` },
        { value: 8, label: `8 Parcelas R$ ${(totalAmount / 8).toFixed(2)} (+ R$ 4,77 por parcela)` },
        { value: 9, label: `9 Parcelas R$ ${(totalAmount / 9).toFixed(2)} (+ R$ 4,73 por parcela)` },
        { value: 10, label: `10 Parcelas R$ ${(totalAmount / 10).toFixed(2)} (+ R$ 4,71 por parcela)` },
    ];

    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.paymentContainer}>
                    <div className={styles.iconSection}>
                        <Link to="/ingresso">
                            <FaShoppingCart className={styles.icon} />
                        </Link>
                        <FaCreditCard className={`${styles.icon} ${styles.activeIcon}`} />
                        <FaCheckCircle className={styles.icon} />
                    </div>

                    <div className={styles.paymentOptions}>
                        {/* O Outlet renderiza PaymentOptions e passa o contexto */}
                        <Outlet context={{ handlePaymentSelection, handleConfirmPayment, installmentOptions, paymentMethod }} />
                    </div>
                </div>

                <div className={styles.summarySection}>
                    <div>
                        <h3>Resumo</h3>
                        {list && (
                            <>
                                {list.ingressosAntecipados > 0 && (
                                    <p>
                                        {list.ingressosAntecipados}x Acesso Antecipado
                                        <span> R$ {(78 * list.ingressosAntecipados).toFixed(2)}</span>
                                    </p>
                                )}
                                {list.quantidadeCriancasAte10 > 0 && (
                                    <p>
                                        {list.quantidadeCriancasAte10}x Criança de até 10 anos
                                        <span> R$ {(39.50 * list.quantidadeCriancasAte10).toFixed(2)}</span>
                                    </p>
                                )}
                                {list.quantidadeCriancasAte4 > 0 && (
                                    <p>
                                        {list.quantidadeCriancasAte4}x Criança de até 4 anos
                                        <span> R$ 00,00</span>
                                    </p>
                                )}
                            </>
                        )}
                    </div>
                    <div>
                        <p>TAXA DE ENTREGA <span>Grátis</span></p>
                        <h4>Total <span>R$ {totalAmount.toFixed(2)}</span></h4>
                    </div>
                </div>
            </div>
        </>
    );
}
