import AboutEvent from "../../components/AboutEvent";
import Carousel from "../../components/Carousel";
import Countdown from "../../components/Countdown";
import Footer from "../../components/Footer";
import Header from "../../components/HeaderHome";
import Open from "../../components/Open";
import RulesAdditionalInformation from "../../components/RulesAdditionalInformation";
import Tickets from "../../components/Tickets";
import styles from "./home.module.css";
export default function Home() {
    return (
        <>
            <Header />
            <Carousel />
            <Countdown />
            <AboutEvent />
            <Open />
            <RulesAdditionalInformation />
            <Tickets />
            <Footer />
        </>
    )
}