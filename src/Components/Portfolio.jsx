import React from "react";
import { Row } from "reactstrap";
import spotify from "../img/spotify.png";
import snakeGame from "../img/snake-game.png";
import linkedin from "../img/linkedin.png";
import colorGame from "../img/color-game.png";
import gameOfLife from "../img/game-of-life.png";
import idealPlaceToWork from "../img/ideal-place-to-work.png";

const Portfolio = () => {
  return (
    <div className="main-portfolio-div" id="portfolio">
      <div className="portfolio-div">
        <div className="main-phrase-portfolio">
          <h1>Projects</h1>
        </div>
        <div className="projects-div">
          <Row>
            {/* Spotify */}

            <div className="col-lg-6 col-xs-12 big-div-portfolio">
              <div className="projects-name">
                <h5>Spotify</h5>
              </div>
              <div className="div-for-dingle-project">
                <div className="singe-project-div">
                  <div className="project-promo" style={{backgroundImage: `url(${spotify})`}}>
                    <div className="project-info-hover">
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, dolore. Dicta incidunt tenetur voluptates quidem nesciunt odit doloremque unde eum quod qui, sunt nostrum nisi mollitia? Aliquam eligendi quidem eius.</p>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <h5 className="projects-tools">ReactJS</h5>
                  <h5 className="projects-tools"> Redux</h5>
                </div>
                <div className="project-info">
                  <a
                    target="_blank"
                    href="https://github.com/fainapahanko/react-spotify"
                    className="projects-tools"
                  >
                    RepoURL
                  </a>
                  <a
                    target="_blank"
                    href="https://react-spotify-app2020.herokuapp.com/"
                    className="projects-tools"
                  >
                    LiveDemo
                  </a>
                </div>
              </div>
            </div>

            {/* Snake-game */}

            <div className="col-lg-6 col-xs-12 big-div-portfolio">
              <div className="projects-name">
                <h5>Snake-game</h5>
              </div>
              <div className="div-for-dingle-project">
                <div className="singe-project-div">
                  <div className="project-promo" style={{backgroundImage: `url(${snakeGame})`}}>
                    <div className="project-info-hover">
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, dolore. Dicta incidunt tenetur voluptates quidem nesciunt odit doloremque unde eum quod qui, sunt nostrum nisi mollitia? Aliquam eligendi quidem eius.</p>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <h5 className="projects-tools">Vanilla JS</h5>
                </div>
                <div className="project-info">
                  <a
                    target="_blank"
                    href="https://github.com/fainapahanko/snake-game"
                    className="projects-tools"
                  >
                    RepoURL
                  </a>
                  <a
                    target="_blank"
                    href="https://miiitsu.github.io/ "
                    className="projects-tools"
                  >
                    LiveDemo
                  </a>
                </div>
              </div>
            </div>

            {/* Game of life */}

            <div className="col-lg-6 col-xs-12 big-div-portfolio">
              <div className="projects-name">
                <h5>Conway's game of life</h5>
              </div>
              <div className="div-for-dingle-project">
                <div className="singe-project-div">
                  <div className="project-promo" style={{backgroundImage: `url(${gameOfLife})`}}>
                    <div className="project-info-hover">
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, dolore. Dicta incidunt tenetur voluptates quidem nesciunt odit doloremque unde eum quod qui, sunt nostrum nisi mollitia? Aliquam eligendi quidem eius.</p>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <h5 className="projects-tools">Vanilla JS</h5>
                </div>
                <div className="project-info">
                  <a
                    target="_blank"
                    href="https://github.com/fainapahanko/Conway-s-Game-Of-Life"
                    className="projects-tools"
                  >
                    RepoURL
                  </a>
                  <a
                    target="_blank"
                    href="https://conway-game-of-life-faina.netlify.app/"
                    className="projects-tools"
                  >
                    LiveDemo
                  </a>
                </div>
              </div>
            </div>

            {/* Linkedin */}

            <div className="col-lg-6 col-xs-12 big-div-portfolio">
              <div className="projects-name">
                <h5>Linkedin</h5>
              </div>
              <div className="div-for-dingle-project">
                <div className="singe-project-div">
                  <div className="project-promo" style={{backgroundImage: `url(${linkedin})`}}>
                    <div className="project-info-hover">
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, dolore. Dicta incidunt tenetur voluptates quidem nesciunt odit doloremque unde eum quod qui, sunt nostrum nisi mollitia? Aliquam eligendi quidem eius.</p>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <h5 className="projects-tools">
                    ReactJS
                  </h5>
                  <h5 className="projects-tools">
                    {" "}
                    Redux
                  </h5>
                  <h5 className="projects-tools">
                    {" "}
                    NodeJs
                  </h5>
                  <h5 className="projects-tools">
                    {" "}
                    Express
                  </h5>
                  <h5 className="projects-tools">
                    {" "}
                    MongoDB
                  </h5>
                </div>
                <div className="project-info project-info-linkedin">
                  <a
                    target="_blank"
                    href="https://github.com/fainapahanko/linkedin-be"
                    className="projects-tools"
                  >
                    RepoURL(BE)
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/fainapahanko/frontend-linkedin"
                    className="projects-tools"
                  >
                    RepoURL(FE)
                  </a>
                  <a
                    target="_blank"
                    href="https://linkedin-frontend.herokuapp.com/"
                    className="projects-tools"
                  >
                    LiveDemo
                  </a>
                </div>
              </div>
            </div>

            {/* Ideal Place To Work */}

            <div className="col-lg-6 col-xs-12 big-div-portfolio">
              <div className="projects-name">
                <h5>Ideal Place To Work</h5>
              </div>
              <div className="div-for-dingle-project">
                <div className="singe-project-div">
                  <div className="project-promo" style={{backgroundImage: `url(${idealPlaceToWork})`}}>
                    <div className="project-info-hover">
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, dolore. Dicta incidunt tenetur voluptates quidem nesciunt odit doloremque unde eum quod qui, sunt nostrum nisi mollitia? Aliquam eligendi quidem eius.</p>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <h5 className="projects-tools">
                    ReactJS
                  </h5>
                  <h5 className="projects-tools">
                    {" "}
                    NodeJs
                  </h5>
                  <h5 className="projects-tools">
                    {" "}
                    Express
                  </h5>
                  <h5 className="projects-tools">
                    {" "}
                    MongoDB
                  </h5>
                  <h5 className="projects-tools">
                    {" "}
                    Google API
                  </h5>
                </div>
                <div className="project-info project-info-linkedin">
                  <a
                    target="_blank"
                    href="https://github.com/Jakub41/IdealPlaceToWorrk-API"
                    className="projects-tools"
                  >
                    RepoURL(BE)
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/abybabu5/Ideal-place-to-work-FE"
                    className="projects-tools"
                  >
                    RepoURL(FE)
                  </a>
                  <a
                    target="_blank"
                    href="https://ideal-place-to-work-fe.herokuapp.com/"
                    className="projects-tools"
                  >
                    LiveDemo
                  </a>
                </div>
              </div>
            </div>

            {/* Color-game */}

            <div className="col-lg-6 col-xs-12 big-div-portfolio">
              <div className="projects-name">
                <h5>Color-game</h5>
              </div>
              <div className="div-for-dingle-project">
                <div className="singe-project-div">
                  <div className="project-promo" style={{backgroundImage: `url(${colorGame})`}}>
                    <div className="project-info-hover">
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, dolore. Dicta incidunt tenetur voluptates quidem nesciunt odit doloremque unde eum quod qui, sunt nostrum nisi mollitia? Aliquam eligendi quidem eius.</p>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <h5 className="projects-tools">ReactJS</h5>
                </div>
                <div className="project-info">
                  <a
                    target="_blank"
                    href="https://github.com/fainapahanko/color-game"
                    className="projects-tools"
                  >
                    RepoURL
                  </a>
                  <a
                    target="_blank"
                    href="http://color-game-app-react.herokuapp.com/"
                    className="projects-tools"
                  >
                    LiveDemo
                  </a>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
