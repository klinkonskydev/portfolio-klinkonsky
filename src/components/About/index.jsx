import * as S from "./styles";

export function About() {
  return (
    <S.Wrapper id="about">
      <p className="about-text">
        🪐 My name is Matheus Gabriel Klinkonsky - I have 18 years old 🪐
        <br />I started my study{" "}
        <time dateTime="2021-01-15">in February - 2021.</time>
        <br />
        <br />
        I am dedicated to being the best I can do, I love studying programming
        and working in this area!
        <br />
        I love turning ideas into real projects and also applying all my
        knowledge in what I'm doing.
        <br />
        <br />
        <strong>My knowledge</strong> : HTML, CSS, SCSS, REACT, TYPESCRIPT{" "}
        <br />
        <strong> What am I learning</strong>: NEXT JS, TDD
      </p>

      <S.CV>
        <h1>Download my CV</h1>

        <a
          href="https://www.mediafire.com/file/ze33azf4n7wuwdl/Resume+-+klinkonsky+pdf.pdf/file"
          target="_blank"
          rel="noreferrer"
        >
          <span>Download</span>
        </a>
      </S.CV>
    </S.Wrapper>
  );
}
