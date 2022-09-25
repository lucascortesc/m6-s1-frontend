import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  .wrap {
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 15px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .container-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    width: 640px;
    padding: 15px;
    border-radius: 10px;

    background-color: rgba(0, 0, 0, 0.2);
  }

  .container-lottie {
    height: 60%;
    max-height: 500px;
  }

  .title-form {
    color: #ff9000;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 15px;

    width: 100%;
    max-width: 480px;
  }

  .TextField,
  .TextField label,
  .TextField div,
  .TextField fieldset {
    color: #ff9000;
    border-color: #ff9000 !important;
  }

  .button {
    background-color: transparent;
    color: #ff9000;
    border: 1px solid #ff9000;
    border-radius: 3px;
    height: 30px;
    width: 120px;
    margin-bottom: 10px;

    &:hover {
      filter: brightness(1.1);
      background-color: rgba(0, 0, 0, 0.4);
    }
  }

  .button-wrap {
    text-align: center;
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .register {
    font-size: 12px;
    color: #ff9000;
    cursor: pointer;

    &:hover {
      filter: brightness(0.7);
    }
  }

  .erro {
    color: #ff9000;
  }
`;

export const Loading = styled.div`
  width: 25px;
  height: 25px;
  background-color: transparent;
  border-style: inset;
  border-bottom: 2px solid #ff9000;
  border-top: 2px solid #ff9000;
  border-left: 2px solid #ff9000;
  border-right: 2px solid transparent;

  border-radius: 50%;

  animation: spin 0.5s infinite linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
