import { useState } from 'react';
import styles from "./carousel.module.css";
import { Link } from 'react-router-dom';

export default function Carousel() {
    const slides = [
        { id: 1, imgSrc: "https://images.unsplash.com/photo-1433477155337-9aea4e790195?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3", alt: "Slide 1" },
        { id: 2, imgSrc: "https://images.unsplash.com/photo-1620765970451-17271d5aeba9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNvbWJyYXMlMjBlbSUyMCVDMyVBMXJ2b3Jlc3xlbnwwfHwwfHx8MA%3D%3D", alt: "Slide 2" },
        { id: 3, imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCT8H4J5m_qqoLXEHj8bJEeeKwlgMMYxWjqw&s", alt: "Slide 3" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div className={styles.carouselContainer}>
            <button className={styles.leftArrow} onClick={prevSlide}>&lt;</button>
            
            <div className={styles.slideContainer}>
                <img
                    className={styles.slide}
                    src={slides[currentIndex].imgSrc}
                    alt={slides[currentIndex].alt}
                />
                <Link className={styles.centerButton} to={"/ingresso"}>Compre Seu Ingresso Antecipado!</Link>
            </div>

            <button className={styles.rightArrow} onClick={nextSlide}>&gt;</button>
        </div>
    );
}
