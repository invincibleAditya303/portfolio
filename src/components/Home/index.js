import { CgFacebook } from "react-icons/cg"
import { ImInstagram } from "react-icons/im"
import { AiOutlineTwitter } from "react-icons/ai"
import { TbBrandGithubFilled } from "react-icons/tb"
import { FaLinkedinIn } from "react-icons/fa"
import { FaTelegramPlane } from "react-icons/fa"

import "./index.css"
import HandIcon from "../HandIcon"

const Home = () => (
    <div className="home-bg-container d-flex flex-column align-items-center">
        <div className="home-container d-flex flex-row">
            <div className="icons-container">
                <div className="icon-container d-flex justify-content-center align-items-center">
                    <CgFacebook className="social-icon" />
                </div>
                <div className="icon-container d-flex justify-content-center align-items-center">
                    <ImInstagram className="social-icon" />
                </div>
                <div className="icon-container d-flex justify-content-center align-items-center">
                    <AiOutlineTwitter className="social-icon" />
                </div>
                 <div className="icon-container d-flex justify-content-center align-items-center">
                    <AiOutlineTwitter className="social-icon" />
                </div>
                 <div className="icon-container d-flex justify-content-center align-items-center">
                    <TbBrandGithubFilled className="social-icon" />
                </div>
                <div className="icon-container d-flex justify-content-center align-items-center">
                    <FaLinkedinIn className="social-icon" />
                </div>
                <div className="icon-container d-flex justify-content-center align-items-center">
                    <FaTelegramPlane className="social-icon" />
                </div>
                <div className="icon-container d-flex justify-content-center align-items-center">
                    <img src="https://res.cloudinary.com/dtrjr55q7/image/upload/v1750913185/1e6b9db5700719a3e1c00ecd207d5cf97c836be5_ekgxr8.png" className="social-icon" alt="koo" />
                </div>
            </div>
            <div className="portfolio-details-container">
                <div className="greetings-container d-flex justify-content-center align-items-center">
                    <p className="greetings-text">Hello</p>
                </div>
                <div className="portfolio-title-container d-flex">
                    <h1 className="portfolio-title">I'm <span className="portfolio-name">Anish</span></h1>
                    <HandIcon className="hand-icon" />
                </div>
                <p className="portfolio-description">UI/UX Designer, Front-End Developer & Thinker.
                    Based in India.
                </p>
                <div className="buttons-container d-flex justify-content-between">
                    <button className="download-buttton">Download CV</button>
                    <button className="touch-button">Get in Touch</button>
                </div>
            </div>
            <div className="protfolio-img-container"></div>
        </div>
    </div>
)

export default Home