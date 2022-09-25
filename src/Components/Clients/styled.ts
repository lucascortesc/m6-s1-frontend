import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  max-width: 1100px;
  min-height: 80%;

  background-color: rgba(0, 0, 0, 0.2);
  color: white;

  /* border: 2px solid #ff9000; */
  border-radius: 15px;

  padding: 25px;

  .clients__select-title {
    color: #ff9000;
    font-weight: bold;
    margin-bottom: 30px;
  }

  .clients__title {
    color: #ff9000;
    font-weight: bold;
    margin-top: 15px;
  }

  .clients__wrap-select {
    width: 320px;

    cursor: pointer;
    color: black;
  }

  .clients__wrap-select svg {
    cursor: pointer;
  }

  .clients__wrap-header {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .clients__button-create {
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

  .clients__info {
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

  .clients__info-wrap {
    display: flex;
    flex-wrap: wrap;
  }

  .clients__buttons-wrap {
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

  .main__content {
    display: flex;
    flex-direction: column;
    height: 70%;
  }
`;
