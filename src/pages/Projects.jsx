import '../styles/projects.scss'

import cronometroIMG from'../assets/Screenshot/Cronometro.png'
import drumIMG from '../assets/Screenshot/Drum.png'
import flexPainelIMG from '../assets/Screenshot/FlexPainel2.png'
import devFinancesIMG from'../assets/Screenshot/devfinances.png'
import clockIMG from'../assets/Screenshot/Clock.png'
import calculadoraIMG from'../assets/Screenshot/calculadora.png'

export function Project() {
  return (
    <footer id="projects">

      <div className="footer-title_div">
        <h1 className="footer-title">Projects</h1>
      </div>

      <div className="projects">

        <a href="https://klinkonskydev.github.io/cronometro/" className="project-container" target="_blank" rel="noreferrer">
          <div>
            <img src={cronometroIMG} alt="My Project" width="100%" height="200px" />
          </div>

          <div className="legend">
            <p className="project-text">Timer Project</p>
          </div>
        </a>

        <a href="https://klinkonskydev.github.io/DrumKit/" className="project-container" target="_blank"  rel="noreferrer">
          <div>
            <img src={drumIMG} alt="My Project" width="100%" height="200px" />
          </div>

          <div className="legend">
            <p className="project-text">Drum Project</p>
          </div>
        </a>

        <a href="https://klinkonskydev.github.io/FlexPanel/" className="project-container" target="_blank"  rel="noreferrer">
          <div>
            <img src={flexPainelIMG} alt="My Project" width="100%" height="200px" />
          </div>

          <div className="legend">
            <p className="project-text">Flex Painel Project</p>
          </div>
        </a>


        <a href="https://klinkonskydev.github.io/DEV.FINANCES-WITH-ROCKETSEAT/" className="project-container" target="_blank"  rel="noreferrer">
          <div>
            <img src={devFinancesIMG} alt="My Project" width="100%" height="200px" />
          </div>

          <div className="legend">
            <p className="project-text" title="Maked with RocketSeat">DevFinance$ Project</p>
          </div>
        </a>

        <a href="https://klinkonskydev.github.io/Clock/" className="project-container" target="_blank"  rel="noreferrer">
          <div>
            <img src={clockIMG} alt="My Project" width="100%" height="200px" />
          </div>

          <div className="legend">
            <p className="project-text">Clock Project</p>
          </div>
        </a>

        <a href="https://calculator-klinkonskydev.netlify.app/" className="project-container" target="_blank"  rel="noreferrer">
          <div>
            <img src={calculadoraIMG} alt="My Project" width="100%" height="200px"/>
          </div>

          <div className="legend">
            <p className="project-text">Calculator - React JS</p>
          </div>
        </a>

      </div>

    </footer>
  );
}