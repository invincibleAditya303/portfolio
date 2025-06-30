import "./index.css"

import SocialMediaIcons from "../SocialMediaIcons"
import Email from "../Email"
import {BlobShape1, BlobShape2, BlobShape3, BlobShape4} from "../BlobShapes"
import Header from "../Header"
import ThemeContext from "../../context/ThemeContext"

const About = () => (
    <ThemeContext.Consumer>
        {value => {
            const {isDarkTheme} = value
            const activeAboutBackgroundColor = isDarkTheme? "dark-theme-about-background": ""
            const activeAboutTextColor = isDarkTheme? "dark-theme-about-text" :""

            return(
                <section className={`about-bg-container ${activeAboutBackgroundColor}`}>
                    <Header />
                    <div className="about-container d-flex flex-column flex-md-row">
                        <div className="d-none d-md-block">
                            <SocialMediaIcons />
                        </div>
                        <div className="about-text-container text-content">
                            <div className="about-text-title-container d-flex justify-content-between align-items-center">
                                <h1 className={`about-text-heading ${activeAboutTextColor}`}>
                                    <span className="about-text-heading-highlight">T</span>his is it. ;)
                                </h1>
                                <hr className={`heading-line ${activeAboutTextColor}`} />
                            </div>
                            <p className={`about-text-description ${activeAboutTextColor}`}>
                                Anish Kr. Sinha is an Indian <span className="about-text-description-highlight">UI/UX Designer & Front End Developer</span> with a passion for designing beautiful and fuctional user experiences. Typically, 
                                he’s Driven & permanently Curious. He’s obsessed with designing things and even more obsessed with designing cool & clean stuff for the web and mobile. 
                                He has been in the business of creating since he hung his first painting on the wall when he was 11. 
                                He holds a <span className="about-text-description-highlight">bachelor degree in Computer Applications</span>. During his graduation, he has been actively involved in the web design community for the last 3 years. 
                                he has designed websites for small businesses, events, nonprofits and more. Currently he’s based in Bihar, India. Where he’s working as an independent creative. 
                                His interests, however, extend beyond the web and he loves helping people with branding and print design. He even loves designing <span className="about-text-description-highlight">3D floor plan</span>.
                                When he’s not designing, he’s probably hanging out with his girlfriend, watching series, sketching or messing around on something inspired by YouTube tutorials.
                            </p>
                            <hr className={`description-line ${activeAboutTextColor}`} />
                        </div>
                        <div className="d-md-none about-mobile-icon-container">
                            <SocialMediaIcons />
                        </div>
                        <Email />
                    </div>
                    <div className="blob-shapes-container d-none d-md-blcok">
                        <div className="blob-first-container d-flex justify-content-between">
                            <div className="about-img-container">
                                <BlobShape1 className="blob-style" />
                                <img src="https://res.cloudinary.com/dtrjr55q7/image/upload/v1751005735/056ab14a60bc4c884db61a37fce7d662bfc6b640_laeiwp.png" className="hand-img" alt="hand img" />
                            </div> 
                            <BlobShape2 className="blob-style" />
                        </div>
                        <div className="blob-second-container d-flex justify-content-between">
                            <BlobShape3 className="blob-style" />
                            <BlobShape4 className="blob-style" />
                        </div>
                    </div>
                </section>
            )
        }}
    </ThemeContext.Consumer>
)

export default About