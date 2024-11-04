import logo from "../../assets/logo.svg";
import styles from "./header.module.css";

export default function Header() {

    return (
        <header className={styles.header}>
            <img src={logo} alt="logo" />
        </header>
    );
}
