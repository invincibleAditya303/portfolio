import "./index.css"

import ThemeContext from "../../context/ThemeContext"

const Email = () => (
    <ThemeContext.Consumer>
        {value => {
            const {isDarkTheme} = value
            const activeEmailTextColor = isDarkTheme? "dark-theme-email-text" : ""
            return (
                <div className="portfolio-email-container align-self-md-end">
                    <p className={`portfolio-email ${activeEmailTextColor}`}>sinhaanishkumar@outlook.com</p>
                </div>
            )
        }}
    </ThemeContext.Consumer>
)

export default Email