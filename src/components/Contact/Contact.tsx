import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contact" style={{ padding: "2rem", maxWidth: "800px", margin: "auto", color: "white", fontFamily: "Arial, sans-serif" }}>
      <header>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" , color : "#23CE6B"}}>Contact</h2>
        <h3 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>Ready to Elevate Your AI/ML Journey or Career?</h3>
        <ul className="contact-list" style={{ marginTop: "1rem", marginBottom: "2rem", paddingLeft: "1.5rem" }}>
          <li style={{ marginBottom: "1rem" }}><strong>Data Science Interview Prep:</strong> Get ready to land your next role</li>
          <li style={{ marginBottom: "1rem" }}><strong>LIVE Data Science Classes:</strong> Enroll in interactive, hands-on sessions</li>
          <li style={{ marginBottom: "1rem" }}><strong>AI/ML Career Guidance:</strong> Navigate career paths in LLMs, Computer Vision, NLP, ML, and Time Series Forecasting</li>
          <li style={{ marginBottom: "1rem" }}><strong>Guest Lectures:</strong> Book me for speaking engagements on cutting-edge topics</li>
        </ul>
        <p>Contact me now for a <strong>Free consultation</strong>.</p>
        <p>Let’s get started!</p>
        <p>
          <strong>Calendly:</strong>{" "}
          <a
            href="https://calendly.com/chrs897"
            style={{
              color: "#1d72b8",
              fontWeight: "bold",
              textDecoration: "none",
              padding: "0.2rem 0.5rem",
              marginTop : '1rem',
              // border: "2px solid #1d72b8",
              borderRadius: "4px",
              transition: "background-color 0.3s ease, color 0.3s ease",
            }}
           
          >
            https://calendly.com/chrs897
          </a>
        </p>
      </header>

      <div className="contacts" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div className="contact-item" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <a href="mailto:adityachrs7@gmail.com">
            <img src={emailIcon} alt="Email" style={{ width: "24px", height: "24px" }} />
          </a>
          <a href="mailto:adityachrs7@gmail.com" style={{ color: "#333", textDecoration: "none" }}>
            adityachrs7@gmail.com
          </a>
        </div>
      </div>

      <Form />
    </Container>
  );
}
