import '../styles/main.scss'
import myPhoto from '../assets/myPhoto.jpg'
import { useState } from 'react';

export function Main(){
  const [ scrollAnimate, setscrollAnimate ] = useState('down');
  const [ directory, setDirectory ] = useState('#about')
  const [ scroll, setScroll ] = useState(0)

  window.onscroll = () => {moveScreenPosition()};

  let rootElement = document.documentElement;
  function moveScreenPosition(){
    let winScroll = document.body.scrollTop || rootElement.scrollTop;

    let height = rootElement.scrollHeight - rootElement.clientHeight;

    let screen = (winScroll / height) * 100;
    setScroll(Math.round(screen))

    handleSwitch()
  }

  function handleSwitch(){
    if( scroll >= 13){
      setscrollAnimate('up')
      setDirectory('#main')
    } else {
      setscrollAnimate('down')
      setDirectory('#about')
    }
  }

  return (
    <div className="main" id="main">
      <div className="presentation-container" >
        <h1>Hi! I'am <span>klinkonsky</span></h1>
        <p>Front-end Developer</p>

        <div>
          <p>
            I love challenges and turning ideas into real projects, <br />
            very communicative, proactive and <br />
            very focused on building a project applying all my knowledge <br />
          </p>
        </div>
      </div>

      <div>
        <img src={myPhoto} alt="MyImg"/>
      </div>

      <a href={directory} onClick={handleSwitch}>
        <div 
          className={`scroll-animation ${scrollAnimate}`} 
        >

        </div>
      </a>

    </div>
  );
};