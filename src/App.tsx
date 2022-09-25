import { Toaster } from "react-hot-toast";
import { Background } from "./Pages/Home/styles";
import { Navigation } from "./Routes";
import { GlobalStyle } from "./Styles";

const App = () => {
  return (
    <div className="App">
      <Toaster position="bottom-center" />
      <Background />
      <GlobalStyle />
      <Navigation />
    </div>
  );
};

export default App;
