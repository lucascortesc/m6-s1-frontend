import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  
  font-family: 'Montserrat';
}

body{
  overflow: overlay;
}

button {
 cursor: pointer;
}

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;  
  }

  &::-webkit-scrollbar-thumb {
    width: 8px;
    height: 8px;
    border-radius: 10px;
    background: #ff9000;
  }

`;

export const toastStyle = () => {
  return {
    style: {
      background: "rgba(0, 0, 0, 0.7)",
      color: "white",
      fontWeight: "bold",
    },
    iconTheme: {
      primary: "black",
      secondary: "#ff9000",
    },
  };
};
