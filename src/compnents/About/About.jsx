import { useEffect } from "react";
import AboutSection from "../Landing_Page/Aboutsection";
import ContactForm from "../Landing_Page/Form";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
      }, []);
    return (
        <>
            <div data-aos="zoom-in">
                <AboutSection />
            </div>
            <ContactForm />
        </>
    )
}

export default About;