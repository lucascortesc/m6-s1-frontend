import styled from "styled-components";
import background from "../../Assets/imgs/background.png";

export const Background = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-position: 30%;
  filter: blur(5px);
  transform: scale(1.1);

  position: fixed;
  z-index: -1;

  &::after {
    content: "";
    width: 100vw;
    min-height: 100vh;
    position: absolute;

    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 48px;
  color: #ff9000;
  text-shadow: 1px 1px 1px white;
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;

  .home__title-container {
    width: 100vw;
    height: 160px;
    background-color: rgba(0, 0, 0, 0.5);
    border-top: 1px solid #ff9000;
    border-bottom: 1px solid #ff9000;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ContaienrButton = styled.div`
  position: absolute;
  bottom: 50px;

  width: 100vw;
  display: flex;
  justify-content: center;

  .home__singIN {
    width: 150px;
    height: 60px;

    font-size: 36px;

    background-color: rgba(0, 0, 0, 0.1);

    border: 1px solid #ff9000;
    border-radius: 15px;
    color: #ff9000;

    animation: jump 2s infinite linear;

    @keyframes jump {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(5px);
      }
      100% {
        transform: translateY(0px);
      }
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
      color: #ff9000;
    }
  }
`;
