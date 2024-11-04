import { Link, useNavigate } from 'react-router-dom';
import styles from './creditCardPayment.module.css';
import { useState } from 'react';

export default function CreditCardPayment() {
    const navigate = useNavigate();
    const parcelas = localStorage.getItem('parcelas');

    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cardMonth, setCardMonth] = useState('');
    const [cardYear, setCardYear] = useState('');
    const [cardCvv, setCardCvv] = useState('');

    const handleSave = async () => {

        if (cardName === '' || cardNumber === '' || cardMonth === '' || cardYear === '' || cardCvv === '') {
            alert("Todos os campos são obrigatórios.");
            return;
        }

        const sanitizedCardNumber = cardNumber.replace(/\s/g, '');
        if (!/^\d{16}$/.test(sanitizedCardNumber)) {
            alert("Número do cartão inválido. Deve conter entre 16 a 19 dígitos.");
            return;
        }

        const currentYear = new Date().getFullYear() % 100;
        const expiryYear = parseInt(cardYear);
        const expiryMonth = parseInt(cardMonth);
        const currentMonth = new Date().getMonth() + 1;

        if (expiryYear < currentYear || (expiryYear === currentYear && expiryMonth < currentMonth)) {
            alert("Data de expiração do cartão inválida.");
            return;
        }

        if (!/^\d{3}$/.test(cardCvv)) {
            alert("CVV inválido. Deve conter 3 dígitos.");
            return;
        }

        try {
            const dataToSend = {
                parcelas: parcelas,
                nomeCompleto: cardName,
                numeroCartao: cardNumber,
                mes: cardMonth,
                ano: cardYear,
                cvv: cardCvv,
            };

            console.log(dataToSend);

            const response = await axios.post('/api/payment/save', dataToSend);

            if (response.status === 200) {
                alert("Pagamento salvo com sucesso!");
                navigate('/confirmacao');
            }
        } catch (error) {
            alert("Erro ao salvar o pagamento. Tente novamente.");
        }
    };

    const handleCardNameChange = (e) => {
        setCardName(e.target.value);
    };

    const handleCardNumberChange = (e) => {
        let value = e.target.value;

        value = value.replace(/[^\d\s]/g, '');

        // Adicionar espaço a cada 4 dígitos
        value = value.replace(/(\d{4})(?=\d)/g, '$1 ');

        setCardNumber(value);
    };

    const handleCardMonthChange = (e) => {
        setCardMonth(e.target.value);
    }

    const handleCardYearChange = (e) => {
        setCardYear(e.target.value);
    }

    const handleCardCvvChange = (e) => {
        let value = e.target.value;

        value = value.replace(/[^\d\s]/g, '');

        setCardCvv(value);
    };


    return (
        <div className={styles.cardDetails} >
            <div className={styles.creditCardDetails}>
                <div className={styles.header}>
                    <h2>Insira suas informações de pagamento</h2>
                    <Link to="/escolher-pagamento">Alterar Opção</Link>
                </div>
                <p>Você escolheu pagar em {parcelas} parcelas.</p>
                <div className={styles.cardHolderName}>
                    <label htmlFor="cardHolder">Nome do titular do cartão</label>
                    <input
                        id="cardHolder"
                        type="text"
                        placeholder="Nome do titular"
                        value={cardName}
                        maxlength={45}
                        onChange={handleCardNameChange}
                        required
                    />
                </div>
                <div className={styles.cardNumber}>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input
                        id="cardNumber"
                        type="text"
                        placeholder="Número do cartão"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        maxLength={19}
                        pattern="[0-9]*"
                        required
                    />
                </div>
                <div className={styles.expiryDate}>
                    <label htmlFor="expiry">Válido até:</label>
                    <div className={styles.dateSelect}>
                        <select name="month" id="expiryMonth" value={cardMonth} onChange={handleCardMonthChange}>
                            <option value="" hidden>MM</option>
                            {(() => {
                                const options = [];
                                for (let i = 1; i <= 12; i++) {
                                    const month = i < 10 ? `0${i}` : i;
                                    options.push(<option key={month} value={month}>{month}</option>);
                                }
                                return options;
                            })()}
                        </select>
                        <select name="year" id="expiryYear" value={cardYear} onChange={handleCardYearChange}>
                            <option value="" hidden>YY</option>
                            {(() => {
                                const options = [];
                                for (let i = 23; i <= 32; i++) {
                                    options.push(<option key={i} value={i}>{i}</option>);
                                }
                                return options;
                            })()}
                        </select>
                    </div>
                </div>
                <div className={styles.cvv}>
                    <label htmlFor="cvv">Código de segurança</label>
                    <input
                        id="cvv"
                        type="text"
                        placeholder="CVV"
                        value={cardCvv}
                        onChange={handleCardCvvChange}
                        pattern="[0-9]*"
                        maxLength={3}
                        required
                    />
                </div>
                <div className={styles.buttons}>
                    <Link to="/escolher-pagamento" className={styles.close}>Cancelar</Link>
                    <Link onClick={handleSave} className={styles.save}>Salvar</Link>
                </div>
            </div>
        </div>

    );
}
