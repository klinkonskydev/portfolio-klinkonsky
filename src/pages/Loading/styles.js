import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  background: #05091f;

  svg {
    position: relative;
    width: 150px;
    height: 150px;

    animation: rotate 2s linear infinite;

    circle {
      width: 100%;
      height: 100%;

      fill: none;
      stroke-width: 10;
      stroke: #00a1ff;
      stroke-linecap: round;
      transform: translate(5px, 5px);
      stroke-dasharray: 440;
      stroke-dashoffset: 440;

      animation: animate 4s linear infinite;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes animate {
    0%,
    100% {
      stroke-dashoffset: 440;
    }
    50% {
      stroke-dashoffset: 0;
    }
    50.1% {
      stroke-dashoffset: 880;
    }
  }
`;
