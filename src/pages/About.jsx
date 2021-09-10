import '../styles/about.scss'

export function About(){
  return(
    <div id="about">
      <div>
        <p className="about-text">
          🪐 My name is Matheus Gabriel Klinkonsky - I have 17 years old 🪐
          <br />
          I started my study <time dateTime="2021-01-15">in February - 2021.</time>
          <br />
          <br />
          I dedicate myself to be the best I can do, 
          I love study programing, I study 13 hours a day!!
          <br />
          I love turn ideas in real projects, and applying all my knowledge!!
          <br />
          I love teaching just as I love learning, 
          I love to talk, do projects and apply all my knowledge to it
        </p>
      </div>

      <div className="CV" >
        <h1>Download my CV</h1>

        <a href="https://www.mediafire.com/file/ze33azf4n7wuwdl/Resume+-+klinkonsky+pdf.pdf/file" target="_blank" rel="noreferrer">
          <span>Download</span>
        </a>
      </div>

    </div>
  );
}