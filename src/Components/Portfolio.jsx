import React from "react";
import { Row } from "reactstrap";
import spotify from "../img/spotify.png";
import snakeGame from "../img/snake-game.png";
import linkedin from "../img/linkedin.png";
import colorGame from "../img/color-game.png";

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
                  <img
                    className="project-promo"
                    alt="project-promo"
                    src={spotify}
                  />
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
                  <img
                    className="project-promo"
                    alt="project-promo"
                    src={snakeGame}
                  />
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

            {/* Linkedin */}

            <div className="col-lg-6 col-xs-12 big-div-portfolio">
              <div className="projects-name">
                <h5>Linkedin</h5>
              </div>
              <div className="div-for-dingle-project">
                <div className="singe-project-div">
                  <img
                    className="project-promo"
                    alt="project-promo"
                    src={linkedin}
                  />
                </div>
                <div className="project-info">
                  <h5 className="projects-tools projects-tools-linkedin">
                    ReactJS
                  </h5>
                  <h5 className="projects-tools projects-tools-linkedin">
                    {" "}
                    Redux
                  </h5>
                  <h5 className="projects-tools projects-tools-linkedin">
                    {" "}
                    NodeJs
                  </h5>
                  <h5 className="projects-tools projects-tools-linkedin">
                    {" "}
                    Express
                  </h5>
                  <h5 className="projects-tools projects-tools-linkedin">
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

            {/* Color-game */}

            <div className="col-lg-6 col-xs-12 big-div-portfolio">
              <div className="projects-name">
                <h5>Color-game</h5>
              </div>
              <div className="div-for-dingle-project">
                <div className="singe-project-div">
                  <img
                    className="project-promo"
                    alt="project-promo"
                    src={colorGame}
                  />
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
