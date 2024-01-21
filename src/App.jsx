import { useState } from 'react'
import './App.css'
import './Responsive.css'
import experience from './assets/experience.png'
import education from './assets/education.png'
import checkmark from './assets/checkmark.png'
import linkedin from './assets/linkedin.png'
import github from './assets/github.png'
import email from './assets/email.png'
import cv from './assets/CV_ATS.pdf'
import kucing from './assets/cat.jpg'
import bangkit from './assets/bangkit.png'
import haus from './assets/Haus-Indonesia.jpg'
import desnet from './assets/desnet-logo.png'


function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };


  const download_cv = () => {
    window.open(
      cv
    );
  };

  const gotoLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/danydarmawan/", "_blank")
  }
  const gotoGithub = () => {
    window.open(
      "https://github.com/RazoelZ", "_blank")
  }

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">Razoel</div>
        <div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skill">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Razoel</div>
        <div className="hamburger-menu">
        </div>
      </nav>
      <section id="profile">
        <div className="section__pic-container">
          <img src={kucing} alt="Dany Darmawan profile picture" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Dany Darmawan</h1>
          <p className="section__text__p2">Application Developer</p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick={download_cv}
            >
              Download CV
            </button>
            <button className="btn btn-color-1" onClick={
              () => {
                document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
              }
            }>
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src={linkedin}
              alt="My LinkedIn profile"
              className="icon"
              onClick={gotoLinkedIn}
            />
            <img
              src={github}
              alt="My Github profile"
              className="icon"
              onClick={gotoGithub}
            />
          </div>
        </div>
      </section>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img
                  src={experience}
                  alt="Experience icon"
                  className="icon"
                />
                <h3>Experience</h3>
                <p>1+ years <br />Application Development</p>
              </div>
              <div className="details-container">
                <img
                  src={education}
                  alt="Education icon"
                  className="icon"
                />
                <h3>Education</h3>
                <p>Diponegoro University<br />Computer Science with GPA: 3.76/4.00</p>
              </div>
            </div>
            <div className="text-container">
              <p>
                Undergraduate from Informatics, Diponegoro University, with a purpose-driven mindset and a quick-learning attitude.
                Committed to acquiring new skills and making impactful contributions. Experienced in managing software development and
                software project management, demonstrating excellent communication skills. Passionate about relationship building and
                eager to create a positive impact on the community. Aspiring programmer with a strong desire for professional growth. Seeking
                opportunities in a dynamic workplace to enhance my skills and deliver exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="skill">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Skills</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                <article>
                  <img
                    src={checkmark}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>HTML</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmark}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>CSS</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmark}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>React</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmark}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmark}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Flutter</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmark}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Material UI</h3>
                    <p>Basic</p>
                  </div>
                </article>

              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Backend Development</h2>
              <div className="article-container">
                <article>
                  <img
                    src={checkmark}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>PostgreSQL</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmark}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>MySQL</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmark}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Node JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmark}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Express JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmark}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Laravel</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src={checkmark}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h3>Git</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="experience">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Experiences</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={bangkit}
                  alt="Project 1"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">Bangkit! Academy</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick="location.href='https://github.com/'"
                >
                  Github
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={haus}
                  alt="Project 2"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">Haus! Indonesia</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick="location.href='https://github.com/'"
                >
                  Github
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={desnet}
                  alt="Project 3"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">Desnet</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick="location.href='https://github.com/'"
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick="location.href='https://github.com/'"
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img
              src={email}
              alt="Email icon"
              className="icon contact-icon email-icon"
            />
            <p><a href="mailto:danydarmawannn@gmail.com">danydarmawannn@gmail.com</a></p>
          </div>
          <div className="contact-info-container">
            <img
              src={linkedin}
              alt="LinkedIn icon"
              className="icon contact-icon"
            />
            <p><a onClick={gotoLinkedIn}>LinkedIn</a></p>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#skill">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2023 Razoel. All Rights Reserved.</p>
      </footer>
      <script src="script.js"></script>
    </>
  )
}

export default App
