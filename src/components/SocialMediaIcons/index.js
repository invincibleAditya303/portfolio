import { CgFacebook } from "react-icons/cg"
import { ImInstagram } from "react-icons/im"
import { AiOutlineTwitter } from "react-icons/ai"
import { TbBrandGithubFilled } from "react-icons/tb"
import { FaLinkedinIn } from "react-icons/fa"
import { FaTelegramPlane } from "react-icons/fa"

import "./index.css"
import ThemeContext from "../../context/ThemeContext"

const SocialMediaIcons = () => (
    <ThemeContext.Consumer>
        {value => {
            const {isDarkTheme} = value
            const activeIconBorderColor = isDarkTheme? "dark-theme-icon-border" : ""
            const activeIconColor = isDarkTheme? "dak-theme-icon-color" : ""

            return (
                <div className="icons-container d-flex flex-md-column">
                    <div className={`icon-container ${activeIconBorderColor} d-flex justify-content-center align-items-center`}>
                           <CgFacebook className={`social-icon ${activeIconColor}`} />
                    </div>
                    <div className={`icon-container ${activeIconBorderColor} d-flex justify-content-center align-items-center`}>
                        <ImInstagram className={`social-icon ${activeIconColor}`} />
                    </div>
                    <div className={`icon-container ${activeIconBorderColor} d-flex justify-content-center align-items-center`}>
                        <AiOutlineTwitter className={`social-icon ${activeIconColor}`} />                        
                    </div>
                    <div className={`icon-container ${activeIconBorderColor} d-flex justify-content-center align-items-center`}>
                        <TbBrandGithubFilled className={`social-icon ${activeIconColor}`} />
                    </div>
                    <div className={`icon-container ${activeIconBorderColor} d-flex justify-content-center align-items-center`}>                            
                        <FaLinkedinIn className={`social-icon ${activeIconColor}`} />
                    </div>
                    <div className={`icon-container ${activeIconBorderColor} d-flex justify-content-center align-items-center`}>
                        <FaTelegramPlane className={`social-icon ${activeIconColor}`} />
                    </div>
                    <div className={`icon-container ${activeIconBorderColor} d-flex justify-content-center align-items-center`}>
                        <img src="https://res.cloudinary.com/dtrjr55q7/image/upload/v1750913185/1e6b9db5700719a3e1c00ecd207d5cf97c836be5_ekgxr8.png" className={`social-icon ${activeIconColor}`} alt="koo" />
                    </div>
                </div>
            )
        }}
    </ThemeContext.Consumer>
)

export default SocialMediaIcons
