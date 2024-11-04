import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import styles from "./headerHome.module.css";

export default function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            <img src={logo} alt="logo" />
            <div className={styles.navigate}>
                <nav className={`${styles.nav} ${isMenuOpen ? styles.show : ''}`}>
                    <button className={styles.closeButton} onClick={closeMenu}>
                        <FaTimes />
                    </button>
                    <ul className={styles.list}>
                        <li><a href="#about" onClick={closeMenu}>Sobre o Evento</a></li>
                        <li><a href="#open" onClick={closeMenu}>Open</a></li>
                        <li><a href="#rules" onClick={closeMenu}>Regras</a></li>
                        <li><a href="#tickets" onClick={closeMenu}>Ingressos</a></li>
                        <li><a href="#contacts" onClick={closeMenu}>Contatos</a></li>
                    </ul>
                    <Link className={styles.ticketsButton}>
                        <span>Compre Ingressos</span>
                    </Link>
                </nav>
                <button className={styles.menuButton} onClick={toggleMenu}>
                    <FaBars />
                </button>
            </div>
        </header>
    );
}
