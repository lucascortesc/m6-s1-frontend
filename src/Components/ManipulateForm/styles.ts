import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;

  top: 0;
  left: 0;

  position: fixed;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.8);
`;

export const Modal = styled.div`
  width: 95%;
  max-width: 600px;
  min-height: 320px;

  background-color: rgba(0, 0, 0, 1);

  border-radius: 15px;
  border: 1px solid #ff9000;

  cursor: initial;

  padding: 15px;

  text-align: center;

  position: relative;

  .modal__title {
    text-align: center;
    color: #ff9000;
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 20px;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    width: 100%;
  }

  .TextField,
  .TextField label,
  .TextField div,
  .TextField fieldset {
    color: #ff9000;
    border-color: white !important;
  }

  .TextField {
    width: 70%;
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
      border-color: white;
    }
  }

  .button-wrap {
    text-align: center;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
  }

  .close {
    font-size: 16px;
    color: white;
    position: absolute;
    right: 15px;
    cursor: pointer;

    &:hover {
      color: #ff9000;
    }
  }

  .erro__wrap {
    width: 70%;
    display: flex;
  }

  .erro {
    color: #ff9000;
  }
`;
