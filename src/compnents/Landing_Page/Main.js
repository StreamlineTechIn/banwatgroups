import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutSection from "./Aboutsection";
import TopProduct from "./Topproducts";
import OtherIndustries from "./Otherindustries";
import ContactForm from "./Form";
import video from "../../Assests/promo_video.mp4";
import FAQ from "../FAQ/FAQ";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const videoSrc = video;

  return (
    <div className="home-container">
      <div className="video-container" data-aos="fade-up">
        <video className="promo-video" loop autoPlay muted>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      <div data-aos="fade-right">
        <AboutSection />
      </div>

      <div data-aos="zoom-in">
        <TopProduct />
      </div>

      <div data-aos="fade-left">
        <OtherIndustries />
      </div>

      <div>
        <FAQ />
      </div>

      <div data-aos="zoom-in">
        <ContactForm />
      </div>

      <style jsx>{`
        .home-container {
          width: 100%;
          overflow: hidden;
        }

        .video-container {
          width: 100vw;
          height: 100vh;
          position: relative;
        }

        .promo-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .video-container {
            height: 30vh;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
