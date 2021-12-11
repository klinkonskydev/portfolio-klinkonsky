import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  padding: 0 8%;

  @media (min-width: 1000px) {
    height: 100vh;
  }

  @media (max-width: 1190px) {
    flex-direction: column;
    text-align: center;
    padding: 0 1rem;
  }

  img {
    width: 500px;
    height: 500px;
    border-radius: var(--biggest-radius);

    @media (max-width: 1435px) {
      width: 300px;
      height: 300px;
    }

    @media (max-width: 1190px) {
      width: 400px;
      height: 400px;
      order: -1;
    }

    @media (max-height: 670px) {
      width: 80%;
      height: 100%;
    }

    @media (max-width: 440px) {
      height: 350px;
      width: 350px;
    }

    @media (max-width: 360px) {
      width: 300px;
      height: 300px;
    }
  }

  .scroll-animation {
    height: 50px;
    width: 30px;

    border: 2px solid var(--blue-grotto);
    border-radius: 40px 40px 30px 30px;

    position: fixed;
    left: 49.25%;
    bottom: 50px;
    transition: 0.4s;

    @media (max-width: 500px) {
      left: 88%;
      bottom: 10px;
    }

    cursor: pointer;

    background-color: #f1f1f1;

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 20%;
      left: 50%;
      border: 2px solid var(--blue-grotto);

      height: 10px;
      width: 10px;

      transform: translate(-50%, -100%) rotate(45deg);
      border-top: transparent;
      border-left: transparent;

      animation: scroll-down 1s ease-in-out infinite;
    }

    &::after {
      top: 30%;
      animation-delay: 0.2s;
    }

    &.up {
      transform: rotate(0deg);
    }

    &.down {
      transform: rotate(180deg);
    }
  }

  @keyframes scroll-down {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      top: 90%;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8rem 0 0;

  height: 500px;
  flex: 1;

  @media (max-width: 1190px) {
    padding: 0;
  }

  h1 {
    font: 600 3rem var(--font-family);

    @media (max-width: 500px) {
      text-align: left;
    }
  }

  > p {
    filter: opacity(0.5);
    font: var(--space-normal-text);

    margin-bottom: 2rem;

    @media (max-width: 500px) {
      text-align: left;
    }
  }

  > div p {
    font: 300 1.25rem var(--font-family);
    line-height: 2.7rem;

    @media (max-width: 500px) {
      text-align: left;
    }
  }
`;
