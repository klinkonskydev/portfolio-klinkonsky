import styled from "styled-components";

export const Wrapper = styled.section`
  display: grid;
  place-items: center;

  height: 100vh;

  padding: 0 2rem;

  p
  {
    font: 300 1.2rem var(--font-family);
    text-align: center; 
    line-height: 2.5rem;

    @media (max-width: 500px) {
      text-align: left;
    }
  }
}
`;

export const CV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    font: var(--biggest-text);
    text-transform: uppercase;
    font-weight: 300;
    opacity: 0.6;
    font-size: 2.5rem;

    margin: 0 0 4rem;
    transition: 0.2s ease-in-out;

    @media (max-width: 410px) {
      margin: 1rem 0;
    }

    &::after {
      content: "";

      display: block;
      background-color: var(--blue-grotto);

      width: 100%;
      height: 0.125rem;
      opacity: 0.4;
    }
  }

  > a {
    font: var(--space-normal-text);
    border: 1px solid var(--blue-grotto);

    text-transform: lowercase;
    text-decoration: none;

    padding: 1rem 4rem;
    border-radius: 4px;

    color: var(--blue-grotto);
    transition: all 0.2s;

    &:hover {
      color: white;
      background-color: var(--blue-grotto);
    }
  }
`;
