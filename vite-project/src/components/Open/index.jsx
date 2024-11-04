import styles from "./open.module.css";
import { FaHamburger, FaPizzaSlice, FaBeer, FaGlassCheers } from "react-icons/fa";
import miniBurgues from "../../assets/miniBurgues.svg";
import porcoes from "../../assets/porcoes.svg";
import chopp from "../../assets/chopp.svg";
import refri from "../../assets/refri.svg";

function Card({ icon: Icon, text, image }) {
    return (
        <div className={styles.imageContainer}>
            <div className={styles.iconContainer}>
                <Icon />
            </div>
            <div className={styles.overlay}></div>
            <img src={image} alt={text} className={styles.image} />
            <p className={styles.imageText}>{text}</p>
        </div>
    );
}

export default function Open() {
    return (
        <>
            <div id="open" className={styles.open}>
                <h1>Open Bar & Open Food</h1>
                <h3>O que está incluso no Open?</h3>
            </div>
            <div className={styles.card}>
                <Card
                    icon={FaHamburger}
                    text="Mini Burgues"
                    image={miniBurgues}
                />
                <Card
                    icon={FaPizzaSlice}
                    text="Porções Diversas"
                    image={porcoes}
                />
                <Card
                    icon={FaBeer}
                    text="Chopp Liberado"
                    image={chopp}
                />
                <Card
                    icon={FaGlassCheers}
                    text="Refrigerante á vontade"
                    image={refri}
                />
            </div>
        </>
    );
}
