import { aboutStyle } from "../../../assets"
import { Profile } from "../../../assets"

const About = () => {
  return (
    <div className={aboutStyle.about} id='about'>
        <div >
            <img src={Profile} alt="profile" />
        </div>
        <div className={aboutStyle.aboutContent}>
            <h1>About me</h1>
            <p>I'm a prefinal year student at IIT(ISM) Dhanbad pursuing Bachelor of Technology in computer science and engineering. I am interested in Data structure and algorithms along with Web development.</p>
        </div>
    </div>
  )
}

export default About