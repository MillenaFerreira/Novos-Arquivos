import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import styles from "./footer.module.css";
import logo from "../../assets/logo.svg";
export default function Footer() {
    return (
        <footer id="contacts" className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerInfo}>
                    <div className={styles.footerLogo}>
                        <img src={logo} alt="Logo" className={styles.logo} />
                    </div>
                    <div className={styles.footerDados}>
                        <p><FaMapMarkerAlt className={styles.iconFooter} /> Travessa Morada do Servidor, 19 - Jardim Maria Helena, Barueri - SP </p>
                        <p><FaPhoneAlt className={styles.iconFooter} />+55 (11)91040-7129</p>
                        <p><FaEnvelope className={styles.iconFooter} /> mail@info.com</p>
                    </div>
                </div>
                <div className={styles.footerSocial}>
                    <p>Siga-nos</p>
                    <div className={styles.socialIcons}>
                        <a href="https://api.whatsapp.com/send/?phone=5511910407129&text&type=phone_number&app_absent=0"><FaWhatsapp className={styles.iconFooter} /></a>
                        <a href="https://www.instagram.com/hmmburguer_/"><FaInstagram className={styles.iconFooter} /></a>
                        <a href="#"><FaFacebook className={styles.iconFooter} /></a>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>&copy; 2024 Hmmburguer. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
