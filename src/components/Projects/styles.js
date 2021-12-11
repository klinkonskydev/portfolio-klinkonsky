import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;

  @media (min-width: 1000px){
    height: 100vh;

    display: grid;
    place-items: center;
    padding: 1rem 0 3rem;
  }

  .footer-title
  {
    font: var(--biggest-text);
    text-transform: uppercase;
    
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
    
    cursor: default;
    
    transition: .3s;
    &:hover
    {
      border-color: var(--blue-grotto);
    }

    @media (max-width: 410px){
      margin: 1rem 0;
    }
    
  }

  .projects
  {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px 50px;
    
    @media (max-width: 1190px){
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 740px){
      grid-template-columns: 1fr;
    }

    @media (max-width: 735px){
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    > a
    {
      text-decoration: none;
    }

    .project-container
    {
 
      width: 330px;
      height: 340px;
      
      background-color: var(--white-default);
      box-shadow: 0 0 8px var(--shadow-color), inset 0 0 2px var(--shadow-color);

      transition: .13s linear;
      border-radius: 7px;

      &:hover
      {
        box-shadow: 0 0 10px #1616164b;
      }
      
      img
      {
        border-radius: 7px 7px 0 0;
      }
      
      .legend
      {
        height: 140px;
        
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
      }
      
      .project-text
      {
        font: var(--space-normal-text);
        color: #000;
        text-shadow: 0 0 2px var(--shadow-color);
        
        cursor: pointer;
        text-align: center;
      }

      @media (max-width: 735px){
        width: 60%;
        height: 370px;
      }

      @media (max-width: 480px){
        width: 90%;
      }
    }

  }

`;