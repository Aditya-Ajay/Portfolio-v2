import { Container } from "./styles";
import VinayakSingh from "../../assets/AdityaChourasiya.png";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
          Data Science | Machine Learning | Deep Learning | Generative AI | Computer Vision | LLMs

Expert in solving complex business problems with cutting-edge AI/ML solutions. <br/><br/>

Specialized in: <br/>
- Data analysis and predictive modeling <br/>
- Machine learning and deep learning algorithms <br/>
- Computer vision and image processing <br/>
- Natural Language Processing and LLMs <br/>
- Generative AI applications <br/><br/>

Skilled in transforming complex data into actionable insights through visualization and storytelling. 
Proven track record of successful projects across diverse industries. 
Active thought leader with 6000+ engaged LinkedIn followers. 
Passionate about driving innovation through AI-powered solutions.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3><br/>
          <p>
    <ol>
        <li>&nbsp;1. Programming and Data Analysis<br/>
            <ul>
                <li>&nbsp;&nbsp;Python</li>
                <li>&nbsp;&nbsp;Statistics</li>
                <li>&nbsp;&nbsp;Numpy</li>
                <li>&nbsp;&nbsp;Pandas</li>
                <li>&nbsp;&nbsp;MS Excel</li>
            </ul>
        </li><br/>
        <li>&nbsp;2. Data Visualization<br/>
            <ul>
                <li>&nbsp;&nbsp;Matplotlib</li>
                <li>&nbsp;&nbsp;Seaborn</li>
            </ul>
        </li><br/>
        <li>&nbsp;3. Machine Learning and Deep Learning<br/>
            <ul>
                <li>&nbsp;&nbsp;Scikit-Learn</li>
                <li>&nbsp;&nbsp;Tensorflow</li>
                <li>&nbsp;&nbsp;PyTorch</li>
                <li>&nbsp;&nbsp;Keras</li>
            </ul>
        </li><br/>
        <li>&nbsp;4. Natural Language Processing / LLMs<br/>
            <ul>
                <li>&nbsp;&nbsp;NLTK</li>
                <li>&nbsp;&nbsp;Transformer based models</li>
                <li>&nbsp;&nbsp;GPT</li>
                <li>&nbsp;&nbsp;BERT</li>
                <li>&nbsp;&nbsp;HuggingFace</li>
                <li>&nbsp;&nbsp;LLMs</li>
                <li>&nbsp;&nbsp;LangChain</li>
            </ul>
        </li><br/>
        <li>&nbsp;5. Computer Vision<br/>
            <ul>
                <li>&nbsp;&nbsp;OpenCV</li>
                <li>&nbsp;&nbsp;Pillow</li>
                <li>&nbsp;&nbsp;YOLO</li>
                <li>&nbsp;&nbsp;HuggingFace</li>
                <li>&nbsp;&nbsp;Transformer based models</li>
            </ul>
        </li><br/>
        <li>&nbsp;6. Advanced AI Techniques<br/>
            <ul>
                <li>&nbsp;&nbsp;GANs</li>
                <li>&nbsp;&nbsp;Autoencoders</li>
                <li>&nbsp;&nbsp;LSTM</li>
                <li>&nbsp;&nbsp;GRU</li>
                <li>&nbsp;&nbsp;Retrieval Augmented Generation (RAG)</li>
                <li>&nbsp;&nbsp;DSPy</li>
            </ul>
        </li> <br/>
        <li>&nbsp;7. Data Engineering and Workflow<br/>
            <ul>
                <li>&nbsp;&nbsp;Apache Airflow</li>
                <li>&nbsp;&nbsp;VectorDB</li>
                <li>&nbsp;&nbsp;MySQL</li>
            </ul>
        </li><br/>
        <li>&nbsp;8. Cloud and DevOps<br/>
            <ul>
                <li>&nbsp;&nbsp;Azure</li>
                <li>&nbsp;&nbsp;AWS</li>
                <li>&nbsp;&nbsp;Docker</li>
                <li>&nbsp;&nbsp;GitHub</li>
                <li>&nbsp;&nbsp;Streamlit</li>
            </ul>
        </li><br/>
    </ol>
</p>


        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
           
          </div>
          <div className="hability">
           
          </div>
          <div className="hability">
          
          </div>
          <div className="hability">
           
          </div>
          <div className="hability">
            
          </div>
          <div className="hability">
           
          </div>
          <div className="hability">
          
          </div>
          <div className="hability">
           
          </div>
          <div className="hability">
          
          </div>
          <div className="hability">
           
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={VinayakSingh} alt="Vinayak Singh" height="300px" width="100px"/>
        </ScrollAnimation>
      </div>
    </Container>
  )
}
