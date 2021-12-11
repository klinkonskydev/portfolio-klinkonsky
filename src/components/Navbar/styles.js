import styled from "styled-components";

export const Wrapper = styled.div`
  width: 30px;
  height: 30px;

  position: fixed;
  right: 2%;
  top: 2%;
  z-index: 2;

  @media (max-width: 500px) {
    top: 8px;
    right: 8px;
  }
`;

export const Navbar = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;

  > div {
    width: 100%;
    height: 1px;

    background-color: var(--blue-grotto);
    border-radius: var(--biggest-radius);
    cursor: pointer;

    transition: 0.2s;

    &.open {
      display: none;
    }

    &.close-one {
      transform: rotate(137deg) translate(0px, -3px);
      background-color: var(--red-default);
      z-index: 2;
    }

    &.close-two {
      transform: rotate(222deg) translate(6px, 12px);
      background-color: var(--red-default);
      z-index: 2;
    }
  }
`;

export const Nav = styled.div`
  position: fixed;
  left: 0%;
  top: 0%;

  width: 100%;
  height: 60px;

  border-bottom: 2px solid var(--blue-grotto);

  opacity: 1;
  z-index: 1;

  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  background-color: #fff;

  @media (max-width: 500px) {
    height: 40px;
  }

  > div a {
    opacity: 1;
    text-decoration: none;

    display: flex;
    align-items: center;

    color: var(--blue-grotto);
    transition: 0.2s;

    &:hover {
      transform: translate(20px, 0);
    }

    > span {
      font: var(--space-normal-text);
      font-size: 1.063rem;
      cursor: pointer;

      overflow: hidden;
      width: 0px;
      transition: 0.3s;
    }

    &:hover {
      > span {
        width: 158px;
      }
    }

    > img {
      width: 50px;
      @media (max-width: 500px) {
        width: 35px;
      }
    }
  }
`;
