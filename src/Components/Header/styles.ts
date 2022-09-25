import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 80px;

  position: absolute;

  border-bottom: 1px solid #ff9000;
  background-color: rgba(0, 0, 0, 0.7);

  .header__limiter {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 15px;
  }

  .header__username {
    color: white;
    font-size: 30px;
    width: 90px;
  }

  .header__logout {
    background-color: transparent;

    border: 2px solid #ff9000;
    border-radius: 5px;

    color: #ff9000;
    font-weight: 500;
    width: 90px;
    height: 32px;

    &:hover {
      border-color: white;
      color: white;
    }
  }

  .header__formater-div {
    width: 90px;
  }

  @media screen and (max-width: 480px) {
    .header__formater-div {
      width: 0px;
    }

    .header__limiter {
      justify-content: space-between;
    }
  }
`;
