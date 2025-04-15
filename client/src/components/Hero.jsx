import { useContext } from "react";
import "../styles/Hero.css";
import heroImage from "../assets/secure.png";
import Context from "../contexts/Context.js";

const Hero = () => {
  const { user } = useContext(Context);
  return (
    <>
      <div className="hero-section">
        <img src={heroImage} alt="hero-image" />
        <h4>Hello, {user ? user.name : "Developer"}</h4>
        <h1>Welcome to MERN Authentication Site</h1>
        <p>
          In this project you are going to use complete authentication using
          MERN stack including OTP verification through email and phone call
          using Twilio and Nodemailer.
        </p>
      </div>
    </>
  );
};

export default Hero;
