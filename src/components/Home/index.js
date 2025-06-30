import "./index.css"
import HandIcon from "../HandIcon"
import BlobMask from "../BlobMask"
import SocialMediaIcons from "../SocialMediaIcons"
import Email from "../Email"
import Header from "../Header"
import ThemeContext from "../../context/ThemeContext"

const Home = () => (
    <ThemeContext.Consumer>
        {value => {
            const {isDarkTheme} = value
            const actievBackGroundColor = isDarkTheme? "dark-theme-background": ""
            const activeTextColor = isDarkTheme? "dark-theme-text" : ""
            const actievBorderColor = isDarkTheme? "dark-theme-border" : ""
            return (
                <div className={`home-bg-container ${actievBackGroundColor} d-flex flex-column align-items-center`}>
                    <Header />
                    <div className="home-container d-flex flex-column flex-md-row">
                        <div className="home-icons-container d-none d-md-block align-self-md-end">
                            <SocialMediaIcons />
                        </div>
                        <div className="portfolio-details-container order-1 order-md-1">
                            <div className="greetings-container d-flex justify-content-center align-items-center mb-2">
                                <p className="greetings-text">Hello</p>
                            </div>
                            <div className={`portfolio-title-container ${activeTextColor} d-flex align-items-center mb-3`}>
                                <h1 className="portfolio-title ">I'm <span className={`portfolio-name ${actievBorderColor}`}>Anish</span></h1>
                                <HandIcon className="hand-icon" />
                            </div>
                            <p className={`portfolio-description ${activeTextColor}`}>UI/UX Designer, Front-End Developer & Thinker.
                                Based in India.
                            </p>
                            <div className="buttons-container d-flex flex-column flex-md-row justify-content-between">
                                <button className="download-button">Download CV</button>
                                <button className="touch-button">Get in Touch</button>
                            </div>
                        </div>
                        <div className="protfolio-img-container order-0 order-md-2">
                            <BlobMask className="blob-svg" />
                            <img src="https://res.cloudinary.com/dtrjr55q7/image/upload/v1750940163/034737059c1c67ed1065fe63dc6c70b0ba6ed488_t9jsax.png" className="portfolio-img" alt="portfolio img" />
                        </div>
                        <div className="d-flex d-md-none order-3">
                            <SocialMediaIcons />
                        </div>
                        <Email />
                    </div>
                </div>
            )
        }}
    </ThemeContext.Consumer>
)

export default Home