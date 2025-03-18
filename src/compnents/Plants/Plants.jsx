import { useEffect } from "react";
import ContactForm from "../Landing_Page/Form";
import Otherindustries from "../Landing_Page/Otherindustries";
import AOS from "aos";
import "aos/dist/aos.css";


const Plants = () =>{
    useEffect(() => {
            AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
          }, []);
    return(
        <>
            <div data-aos="zoom-in">
                <Otherindustries />
            </div>
            
            <ContactForm />
        </>
    )
}

export default Plants;