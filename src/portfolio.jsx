import Navbar from "./Navbar";
import './style.css';
import React, { useState, useEffect } from 'react';
import image from './images/prfile pic.jpg';
import aos from 'aos';
import 'aos/dist/aos.css';
import image1 from './images/phone.gif' ;
import image2 from './images/home.gif';
import image3 from './images/sent.gif';
import image4 from './images/facebook.gif';
import image5 from './images/whatsapp.gif';
import image6 from './images/insta.gif';
import image7 from './images/linkedin.gif';
import Service from "./Services.jsx";
import Image9 from './images/Bootstraplogo.jpg';
import Image10 from './images/HTMLlogo.png';
import Image11 from './images/csslogo.jpg';
import image8 from "./images/your pic background.png"
function Portfolio() {
  return (
    <>
      <div className="header">
        <Navbar />
      </div>
      <div className="body">
        <Landingpage />
        <Aboutme />
       <Service/>
       <Links/>
        <Contactme />
      </div>
    </>
  )
}
function Landingpage() {
  return (
    <>
      <section class="bgimage" id="home">
        <div className="main">
          <div className="child">
            <h1>Hi, it's me Abdur-Rehman</h1>
            <p>I am professional Web developer in the City</p>
          </div>
        </div>
      </section>
    </>

  )
}
// Aboutme.js
function Aboutme() {
  useEffect(() => {
    aos.init({ duration: 2000 });
  })
  return (
    <section id="about">
      <div className="container1">
        <h1 className="text-center"><li>About Me</li></h1>
        <div className="row1" >
          <div className="col4" data-aos="fade-right">
            <img className="image" src={image} alt="image" />
          </div>
          <div className="col5" data-aos="fade-left">
            <h2><li>Web-Development Skills</li></h2>
            <p>(press reload to see the animations)</p>
            <br />
            <div className="row4">
              <SkillBar name={'HTML'} />
              <SkillBar1 name={'CSS'} />
              <SkillBar1 name={'JAVAScript'} />
              <SkillBar2 name={'React'} />
            </div>
          </div>
        </div>
        <div className="row2" data-aos="fade-up">
          <div className="col6">
            <ul>
              <li className="li">Name:<span className="details" > Abdur Rehman</span> </li>
              <li className="li">Age:<span className="details"> 20</span></li>
              <li className="li">Occupation:<span className="details"> Web Developer</span></li>
            </ul>
          </div>
        </div>
        <div className="row3 ">

          <div className="col8">
            <h1 align='left'><li>About Me</li></h1>
            <p data-aos="fade-down">
              I embody the essence of diligence and dedication, effortlessly intertwining the essentials
              of life with I unwavering work ethic. I commitment to excellence is palpable in every
              endeavor I undertake, as I seamlessly navigate the balance between priorities and passion.
              Through I relentless pursuit of success, I inspire those around I to elevate their own
              standards, demonstrating the transformative power of hard work and perseverance.
              In I presence, the mundane transforms into the extraordinary,
              fueled by I relentless drive to surpass boundaries and achieve greatness.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
function Links() {
  useEffect(() => {
    aos.init({ duration: 2000 });
  })
  return (
    <>
      <section id='links'>
        <div className="container122" data-aos="fade-right">
          <div className="headerdiv" data-aos="fade-right">
            <h1 className='text-center' ><li>Projects</li></h1>
          </div>
          <div className="maindiv" data-aos="fade-right">
            <div className="card1-1" data-aos="fade-right">
              <a href='http://127.0.0.1:5500/Assignments/Assignment2-1.html' target='_blank'>
                <img className='straplogo' src={Image9} alt="logo" />
                <div class="card-body">
                  <h1>Bootstrap</h1>
                  <p>This is a websites about the forms and how to make the site responsive
                    Bootstrap also includes a wide range of UI components, such as buttons, forms, navigation bars,
                    and carousels, which can be easily customized and styled using CSS classes. These components help
                    developers save time by providing ready-made solutions for common interface elements.
                  </p>
                </div>
              </a>
            </div>

            <div className="card1-1" data-aos="fade-right">
              <a href='http://127.0.0.1:5500/Assignments/assignment4%20.html' target='_blank'>
                <img className='htmllogo' src={Image10} alt="logo" />
                <div class="card-body">
                  <h1>HTML</h1>
                  <p>This is a websites about the forms and all the way for the simple and elegant designing of
                    input fields interacting with each other
                    Overall, this HTML document serves as a template for generating a visually appealing and
                    informative certificate or mark sheet for students,
                    complete with customizable sections for entering marks and uploading images.
                  </p>
                </div>
              </a>
            </div>
            <div className="card1-1" data-aos="fade-right">
              <a href='http://127.0.0.1:5500/Assignments/assignment3-1.html' target='_blank'>
                <img className='csslogo' src={Image11} alt="logo" />
                <div class="card-body">
                  <h1>CSS</h1>
                  <p>Overall, the website serves as a comprehensive form for users planning to undertake
                    the Hajj pilgrimage, allowing them to input essential details and calculate the associated
                    costs conveniently. The combination of HTML, CSS,
                    and JavaScript facilitates an interactive and user-friendly experience for visitors</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <br /><br />
        <h1 className='projects' data-aos="fade-right">Download the CV from here </h1>
      <div className="Container6676">
        <div className="text233">
          <h2 id="resume" data-aos="fade-right">My Resume !</h2>
        </div>
        <div className="text122" data-aos="fade-right">
          <p>
            In today's digital age, resumes are often submitted electronically, either through
            job portals or email attachments. It's essential to format the resume appropriately for
            digital viewing and ensure that it is compatible with
            applicant tracking systems (ATS) used by many employers to screen candidates.
          </p>
        </div>
      </div>
      <div className="container221" data-aos="fade-right">
        <a href="https://drive.google.com/file/d/1VNPx7-HMibbsrSeCBiSda2DAoOo4pF8f/view?usp=drive_link" target="_blank" download ><button className='download-button' id='cv'>Download CV</button></a>
      </div>
      </section>
    </>
  )
}
function SkillBar({ name }) {
  const [level, setLevel] = useState(0);

  useEffect(() => {
    // Set a random skill level between 1 and 100 on component mount
    setLevel(Math.floor(0.90 * 100) + 1);
  }, []);

  return (
    <div className="skill">
      <h2 className="skill-name">{name}</h2>
      <div className="skill-bar">
        <div className="skill-level" style={{ width: `${level}%` }}></div>
      </div>
      <p>{level}% Expertise</p>
    </div>
  );
}
function SkillBar1({ name }) {
  const [level, setLevel] = useState(0);

  useEffect(() => {
    // Set a random skill level between 1 and 100 on component mount
    setLevel(Math.floor(0.65 * 100) + 1);
  }, []);

  return (
    <div className="skill">
      <h2 className="skill-name">{name}</h2>
      <div className="skill-bar">
        <div className="skill-level1" style={{ width: `${level}%` }}></div>
      </div>
      <p>{level}% Expertise</p>
    </div>
  );
}
function SkillBar2({ name }) {
  const [level, setLevel] = useState(0);

  useEffect(() => {
    // Set a random skill level between 1 and 100 on component mount
    setLevel(Math.floor(0.40 * 100) + 1);
  }, []);

  return (
    <div className="skill">
      <h2 className="skill-name">{name}</h2>
      <div className="skill-bar">
        <div className="skill-level2" style={{ width: `${level}%` }}></div>
      </div>
      <p>{level}% Expertise</p>
    </div>
  );
}
function Contactme() {
  useEffect(() => {
    aos.init({ duration: 2000 });
  })
  const [text, setText] = useState('');
  // Function to handle changes in the textarea
  const handleChange = (event) => {
    setText(event.target.value);
  };
const SendEmail=(e)=>{
  e.preventDefault();
  alert("SubmitteD")
}
  return (
    <>
      <section id="contact">
        <div className="block" data-aos="fade-right">
          <div className="child1" data-aos="fade-right">
            <p id="p1">Contact Us</p>
            <p data-aos="fade-right"> Contact me for any Queries !</p>
            <form className="contact form" onSubmit={SendEmail}>
            <input type="text" id="t1" placeholder="Full name" data-aos="fade-right"/>
            <br /><br />
            <input type="text" id="t2" placeholder="Email"  data-aos="fade-right"/>
            <br /><br />
            <textarea
            id="t3"
              value={text}
              onChange={handleChange}
              rows={4}
              cols={50} 
              placeholder="Message...."
            />
            <br />
            <button id="b1">
              Send
            </button>
            </form>
          </div>
          <div className="child2">
            <div className="image1" data-aos="fade-right">
            <img src={image2} alt="logo" className="img1"/>
            <span >H #1434, st #39, Usman-block</span>
            </div>
            <br />
            <br /><br />
            <div className="image1" data-aos="fade-right">
            <img src={image1} alt="logo" className="img2"/>
            <span >+923143241469</span>
            </div>
            <br />
            <br /><br />
            <div className="image1" data-aos="fade-right">
            <img src={image3} alt="logo" className="img2"/>
            <span >abidmani790@gmail.com</span>
            </div>
            <br /><br /><br />
            <a href="https://www.facebook.com/abdurrehman.abid.902" target="_blank"><img src={image4} className="img2-1" data-aos="fade-left"/></a>
            <a href="https://wa.me/923143241469?text=I'm%20interested%20in%20your%20portfolio" target="_blank"><img src={image5} className="img2-1" data-aos="fade-left"/></a>
            <a href="https://www.instagram.com/abdurrehman._abid" target="_blank"><img src={image6} className="img2-1" data-aos="fade-right"/></a>
            <a href="https://www.linkedin.com/in/abdurrehman-abid-a51737250" target="_blank"><img src={image7} className="img2-1" data-aos="fade-right"/></a>
            <br /><br />
          </div>
        </div>
        <br /><br /><br />
      </section>
    </>
  )
}


export default Portfolio;