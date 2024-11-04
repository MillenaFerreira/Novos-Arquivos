import React, { useState } from "react";
import styles from "./buyTicket.module.css";
import Header from "../../components/Header";
import { products } from "./data";
import { FaUser, FaChild, FaBaby, FaChevronLeft, FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

export default function BuyTicket() {

    const navigate = useNavigate();

    const icons = {
        "1": <FaUser />,
        "2": <FaChild />,
        "3": <FaBaby />,
    };

    const [quantities, setQuantities] = useState({
        1: 0,
        2: 0,
        3: 0,
    });

    const calculateSubtotal = (price, quantity) => {
        return price * quantity;
    };

    // Função para atualizar a quantidade de produtos
    const handleQuantityChange = (id, action) => {
        setQuantities(prevQuantities => {
            const currentQuantity = prevQuantities[id];

            const newQuantity = action === "increment"
                ? currentQuantity + 1
                : (currentQuantity > 0 ? currentQuantity - 1 : 0); // Garante que a quantidade não fique negativa

            return { ...prevQuantities, [id]: newQuantity };
        });
    };

    const createPurchaseSummary = () => {
        const purchaseSummary = {
            totalDaCompra: calculateTotal(),
            ingressosAntecipados: quantities[1],
            quantidadeCriancasAte10: quantities[2],
            quantidadeCriancasAte4: quantities[3],
        };

        localStorage.setItem('list', JSON.stringify(purchaseSummary));
        return purchaseSummary;
    };

    const handleCheckout = () => {
        if (quantities[1] === 0 && quantities[2] === 0 && quantities[3] === 0) {
            alert("Você não escolheu nenhum ingresso.");
            return;
        }
        createPurchaseSummary();
        navigate("/login");
    };

    const calculateTotal = () => {
        let total = 0;
        products.forEach(product => {
            total += calculateSubtotal(product.price, quantities[product.id]);
        });
        return total;
    };

    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.tableContainer}>
                    <div className={styles.venda}>
                        <FaChevronLeft />
                        <h2>Venda Geral</h2>
                    </div>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Produto</th>
                                <th>Valor</th>
                                <th>Quantidade</th>
                                <th className={styles.subtotal}>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td className={styles.product}>
                                        {icons[product.id]}
                                        {product.name}
                                    </td>
                                    <td className={styles.price}>
                                        R$ {product.price.toFixed(2)}
                                    </td>
                                    <td className={styles.quantity}>
                                        <div className={styles.quantityContainer}>
                                            <input
                                                type="text"
                                                value={quantities[product.id]}
                                                readOnly
                                                className={styles.quantityInput}
                                            />
                                            <div className={styles.quantityButtons}>
                                                <button
                                                    onClick={() => handleQuantityChange(product.id, "increment")}
                                                    className={styles.quantityButton}
                                                >
                                                    <FaChevronUp />
                                                </button>
                                                <button
                                                    onClick={() => handleQuantityChange(product.id, "decrement")}
                                                    className={styles.quantityButton}
                                                >
                                                    <FaChevronDown />
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={styles.subtotal}>
                                        R$ {calculateSubtotal(product.price, quantities[product.id]).toFixed(2)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className={styles.card}>
                    <div className={styles.cartTotal}>
                        <h3>Valor Total</h3>
                        <div className={styles.cartSummary}>
                            <p>Subtotal: <span>R$ {calculateTotal().toFixed(2)}</span></p>
                            <p>Taxa de Entrega: <span>Grátis</span></p>
                            <p>Total: <span>R$ {calculateTotal().toFixed(2)}</span></p>
                        </div>
                        <button className={styles.checkoutButton} onClick={handleCheckout}>Continuar Processando</button>
                    </div>
                </div>
            </div>
        </>
    );
}
