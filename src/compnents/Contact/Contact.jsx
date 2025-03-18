import ContactForm from "../Landing_Page/Form";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Contact = () => {
    useEffect(() => {
            AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
          }, []);
    return (
        <>
            <div data-aos="zoom-in">
                <ContactForm />
            </div>
        </>
    )
}

export default Contact;