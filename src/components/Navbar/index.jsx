import * as S from "./styles";

import githubIMG from "../../assets/github.svg";
import linkedinIMG from "../../assets/linkedin.svg";
import whatsappIMG from "../../assets/whatsapp.svg";

import { useState } from "react";

export function Navbar() {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  return (
    <S.Wrapper onClick={() => setIsNavBarOpen(!isNavBarOpen)}>
      <S.Navbar>
        <div className={isNavBarOpen && "open"}></div>
        <div className={isNavBarOpen && "close-one"}></div>
        <div className={isNavBarOpen && "close-two"}></div>
      </S.Navbar>

      {isNavBarOpen && (
        <S.Nav>
          <div>
            <a
              href="https://github.com/klinkonskydev"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIMG} alt="github" />
              <span>/klinkonskydev</span>
            </a>
          </div>

          <div>
            <a
              href="https://www.linkedin.com/in/klinkonsky/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinIMG} alt="linkedin" />
              <span>/klinkonsky</span>
            </a>
          </div>

          <div>
            <a
              href="https://api.whatsapp.com/send?phone=5544997643638&text=Ol%C3%A1%20Matheus%20Klinkonsky!!%20me%20chamo%20NAME_HERE%20"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsappIMG} alt="" />
              <span>(55)+44997643638</span>
            </a>
          </div>
        </S.Nav>
      )}
    </S.Wrapper>
  );
}
