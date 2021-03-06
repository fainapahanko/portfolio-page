import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import me from "../img/Faina.jpg";

const AboutSection = () => {
  return (
    <div className="main-about-div" id="about-me">
      <div className="presentation-div">
        <div className="pic-div">
          <div className="avatar" style={{backgroundImage: `url(${me})`}}>
          </div>
          </div> 
        <div className="main-phrase">
          <h1>Hi, my name is Faina and I am a FullStack Developer</h1>
        </div>
        <div className="contacts-div-aboutme-section-main">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/faina-pahanko-20b206162/"
            className="contacts-div-aboutme-section"
          >
            Linkedin
          </a>
          <a target="_blank" href="https://github.com/fainapahanko" className="contacts-div-aboutme-section">
              Github
            </a>
          <a target="_blank" href="https://www.hackerrank.com/f_poganko1" className="contacts-div-aboutme-section">
              Hackerrank
            </a>
            <a target="_blank" href="https://medium.com/@pahankofaina" className="contacts-div-aboutme-section">
              Medium
            </a>
        </div>
        <div>
          <div className="tools-stack">
            <h4>
              <b>Frontend:</b> Bootstrap, JavaScript, ReactJS
            </h4>
          </div>
          <div className="tools-stack">
            <h4>
              <b>Backend:</b> NodeJS, ExpressJS, MongoDB, PostgreSQL
            </h4>
          </div>
          <div className="tools-stack">
            <h4>
              <b>Project Management Tools:</b> Slack, Trello
            </h4>
          </div>
        </div>
      </div>
      <Link to="portfolio" spy={true} smooth={true} offset={-50} duration={500}>
        <div className="arrow-down">
          <FontAwesomeIcon className="arrow-icon" icon={faChevronDown} />
        </div>
      </Link>
    </div>
  );
};

export default AboutSection;
