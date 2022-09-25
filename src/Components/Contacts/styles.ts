import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  justify-content: center;

  .contact__info {
    border: 2px solid #ff9000;
    border-radius: 5px;
    margin-top: 15px;

    width: 100%;
    min-height: 150px;
    max-width: 320px;
    padding: 15px;

    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    flex-direction: column;
    gap: 10px;

    span {
      margin-right: 15px;
    }
  }

  .contact__info-wrap {
    display: flex;
    flex-wrap: wrap;
  }

  .contact__buttons-wrap {
    width: 100%;
    display: flex;
    justify-content: end;
    gap: 15px;

    button {
      background-color: transparent;
      border: none;
      color: #ff9000;

      &:hover {
        color: white;
      }
    }
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 70px;

  .contact__title {
    color: #ff9000;
    font-weight: bold;
  }

  .contact__button-create {
    background-color: transparent;
    border-radius: 5px;
    padding: 5px;
    border-color: #ff9000;
    color: #ff9000;

    &:hover {
      color: white;
      border-color: white;
    }
  }
`;
