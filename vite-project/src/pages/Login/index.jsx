import { useState } from "react";
import Header from "../../components/Header";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async () => {
        const errorMessage =
            !email.trim() && "Por favor, preencha o email!" ||
            !password.trim() && "Por favor, preencha a senha!";

        if (errorMessage) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: errorMessage,
            });
            return;
        }

        Swal.showLoading();

        const loginData = { email, password };

        try {
            const response = await axios.post("https://sua-api.com/login", loginData);

            if (response.status === 200) {
                const { token } = response.data;
                localStorage.setItem("userToken", token);
                Swal.close();
                Swal.fire({
                    title: "Login realizado com sucesso!",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false
                });
                navigate("/escolher-pagamento");
            }
        } catch (error) {
            Swal.close();
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Não foi possível fazer login. Verifique suas credenciais e tente novamente.",
            });
        }
    };

    return (
        <>
            <Header />
            <div className={styles.loginContainer}>
                <div className={styles.formContainer}>
                    <div className={styles.between}>
                        <h1 className={styles.title}>Entre</h1>
                        <p className={styles.newHere}>
                            Novo por aqui? <a href="/registro" className={styles.link}>Registre-se aqui</a>
                        </p>
                    </div>
                    <form className={styles.form}>
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
                            <a href="/forgot-password" className={styles.forgotPassword}>
                                Esqueci minha senha
                            </a>
                        </div>
                        <button
                            type="button"
                            className={styles.submitButton}
                            onClick={handleLogin}
                        >
                            Próximo
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
