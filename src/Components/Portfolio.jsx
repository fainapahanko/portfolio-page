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
                      <p>A demo version of Spotifay’s copy in which you can listen, search for songs / artist, go to the album / artist page, etc. 
                        Data on musical artists, songs, etc. were obtained with the help of rapidapi.
                      </p>
                      <p>
                        Please be aware that rendering can take a while since it was deployed on free hosting for showing purposes.
                      </p>
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
                      <p>Good old snake game. Written in pure javascript. Two modes (easy and hard) are possible.</p>
                      <p>
                        Please be aware that rendering can take a while since it was deployed on free hosting for showing purposes.
                      </p>
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
                      <p>It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. It is imitating evolution where the cell can die of overpopulation or underpopulation or remain alive.</p>
                      <p>
                        Please be aware that rendering can take a while since it was deployed on free hosting for showing purposes.
                      </p>
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
                      <p> A demo version of Linkedin’s copy in which you can login / register, create your profile, add a post, chat with other users, react on other user's posts, etc. </p>
                      <p>
                        Please be aware that rendering can take a while since it was deployed on free hosting for showing purposes.
                      </p>
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
                      <p>"Ideal Place To Work" is a project where you can search for a cafe, coworking space, etc for working purposes. You can rate a place and filter places by fields like Goog Service, Strong WiFi, etc. Places from Google API with an extra layer that is relevant for the specific of the website were saved to the database.</p>
                      <p>
                        Please be aware that rendering can take a while since it was deployed on free hosting for showing purposes.
                      </p>
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
                      <p>Color game is a browser game where you see a color in RGB format and have to guess that specific color among others. Two modes (easy and hard) are possible.</p>
                      <p>
                        Please be aware that rendering can take a while since it was deployed on free hosting for showing purposes.
                      </p>
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
