import { Link, withRouter } from "react-router-dom"

import "./index.css"

import MoonIcon from "../MoonIcon"
import LogoIcon from "../LogoIcon"
import LightIcon from "../LighIcon"
import ThemeContext from "../../context/ThemeContext"

const Header = () => (
    <ThemeContext.Consumer>
        {value  => {
            const {isDarkTheme, onClickTheme} = value
                const onClickThemeButton = () => onClickTheme()
                const activeHeaderTextColor = isDarkTheme? "dark-theme-header-text" : ""
        
            return (
                <div className="header-container d-flex align-items-center">
                    <div className="header-logo-container d-flex justify-content-between align-items-center">
                        <LogoIcon className={`${activeHeaderTextColor}`} />
                        <p className={`header-portfolio-name ${activeHeaderTextColor}`}>ANISH KUMAR SINHA</p>
                    </div>
                    <div className="header-links-container d-flex justify-content-between align-items-center">
                        <Link to="/">
                            <button className={`link-button ${activeHeaderTextColor}`}>Home</button>
                        </Link>
                        <Link to="/about">
                            <button className={`link-button ${activeHeaderTextColor}`}>About</button>
                        </Link>
                        <button className={`link-button ${activeHeaderTextColor}`}>Resume</button>
                        <button className={`link-button ${activeHeaderTextColor}`}>Skills</button>
                        <button className={`link-button ${activeHeaderTextColor}`}>Projects</button>
                        <button className={`link-button ${activeHeaderTextColor}`}>Contact</button>
                        <button className="theme-button" type="button" onClick={onClickThemeButton}>
                            {isDarkTheme ? <LightIcon /> : <MoonIcon />}
                        </button>
                    </div>
                </div>
            )
        }}
    </ThemeContext.Consumer>
)

export default withRouter(Header)