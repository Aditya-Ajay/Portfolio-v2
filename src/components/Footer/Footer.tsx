import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import huggingface from '../../assets/Huggingface.png'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import instagramIcon from '../../assets/instagram.svg'
// import discordIcon from '../../assets/discord.png'

export function Footer() {
  return (
    <Container className="footer">
     
  
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/aditya-chourasiya/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/Aditya-NeuralNetNinja"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://huggingface.co/adi-123"
          target="_blank"
          rel="noreferrer"
        >
          <img src={huggingface } alt="GitHub" />
        </a>
       
      </div>
    </Container>
  )
}
