import { useCallback, useState } from "react";

import * as S from "./styles";
import myPhoto from "../../assets/myPhoto.jpg";

export function Main() {
  const [directory, setDirectory] = useState("#about");
  const [scrollAnimate, setScrollAnimate] = useState("#about");
  const [click, setClick] = useState(0);

  const hanldeWithScroll = useCallback(() => {
    if (click % 2 === 0) {
      setDirectory("#about");
      setScrollAnimate("down");

      return setClick((prev) => prev + 1);
    } else {
      setDirectory("#main");
      setScrollAnimate("up");

      return setClick((prev) => prev + 1);
    }
  }, [click]);

  return (
    <S.Wrapper id="main">
      <S.TextContainer>
        <h1>Hi! I'am klinkonskydev</h1>
        <p>Front-end Developer</p>

        <div>
          <p>
            I love challenges and turning ideas into real projects, <br />
            very communicative, proactive and <br />
            very focused on building a project applying all my knowledge <br />
          </p>
        </div>
      </S.TextContainer>

      <div>
        <img src={myPhoto} alt="MyImg" />
      </div>

      <a href={directory} onClick={hanldeWithScroll}>
        <div className={`scroll-animation ${scrollAnimate}`}></div>
      </a>
    </S.Wrapper>
  );
}
