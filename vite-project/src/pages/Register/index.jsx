import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import Header from "../../components/Header";
import styles from "./register.module.css";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [cpf, setCpf] = useState("");
    const [nome, setNome] = useState("");
    const [data, setData] = useState("");
    const [celular, setCelular] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const togglePasswordVisibility2 = () => {
        setShowPassword2(!showPassword2);
    };

    const handleRegister = async () => {
        const errorMessage =
            !cpf.trim() && "Por favor, preencha o CPF!" ||
            !nome.trim() && "Por favor, preencha o nome completo!" ||
            !data.trim() && "Por favor, preencha a data de nascimento!" ||
            !celular.trim() && "Por favor, preencha o celular!" ||
            !email.trim() && "Por favor, preencha o email!" ||
            !password.trim() && "Por favor, preencha a senha!" ||
            password.length < 8 && "A senha deve ter pelo menos 8 caracteres!" ||
            password !== confirmPassword && "As senhas não coincidem!";

        if (errorMessage) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: errorMessage,
            });
            return;
        }

        Swal.showLoading();

        const registerData = { cpf, nome, data, celular, email, password };

        try {
            const response = await axios.post("https://sua-api.com/register", registerData);

            if (response.status === 201) {
                Swal.close();
                Swal.fire({
                    title: "Registro realizado com sucesso!",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false,
                });
                navigate("/escolher-pagamento");
            }
        } catch (error) {
            Swal.close();
            Swal.fire({
                icon: "error",
                title: "Erro",
                text: "Não foi possível realizar o registro. Tente novamente.",
            });
        }
    };

    return (
        <>
            <Header />
            <main className={styles.loginContainer}>
                <div className={styles.formContainer}>
                    <div className={styles.between}>
                        <h1 className={styles.title}>Registre-se</h1>
                        <p className={styles.newHere}>
                            Já possui uma conta? <a href="/login" className={styles.link}>Entre aqui</a>
                        </p>
                    </div>
                    <form className={styles.form}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="cpf">CPF:</label>
                            <InputMask
                                mask="999.999.999-99"
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                                placeholder="000.000.000-00"
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="nome">Nome Completo:</label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                placeholder="Seu nome completo"
                                className={styles.input}
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="data">Data de Nascimento:</label>
                            <input
                                type="date"
                                id="data"
                                name="data"
                                placeholder="01/01/2001"
                                className={styles.input}
                                value={data}
                                onChange={(e) => setData(e.target.value)}
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="celular">Celular:</label>
                            <InputMask
                                mask="(99) 99999-9999"
                                value={celular}
                                onChange={(e) => setCelular(e.target.value)}
                                placeholder="(00) 00000-0000"
                                className={styles.input}
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="email">Endereço de E-mail:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="seuemail@exemplo.com"
                                className={styles.input}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="password">Senha:</label>
                            <div className={styles.passwordContainer}>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    placeholder="Digite sua senha"
                                    className={styles.input}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <span onClick={togglePasswordVisibility} className={styles.eyeIcon}>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                            <a className={styles.forgotPassword}>
                                Escolha uma senha com, no mínimo, 8 caracteres.
                            </a>
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="confirmPassword">Confirmar Senha:</label>
                            <div className={styles.passwordContainer}>
                                <input
                                    type={showPassword2 ? "text" : "password"}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder="Digite sua senha"
                                    className={styles.input}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <span onClick={togglePasswordVisibility2} className={styles.eyeIcon}>
                                    {showPassword2 ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </div>
                        <button
                            type="button"
                            className={styles.submitButton}
                            onClick={handleRegister}
                        >
                            Próximo
                        </button>
                        <a href="/escolher-pagamento">Forma de pagamento</a>
                    </form>
                </div>
            </main>
        </>
    );
}
