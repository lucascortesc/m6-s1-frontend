import { Background, Title, Container, ContaienrButton } from "./styles";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <Background /> */}
      <Container>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="home__title-container"
        >
          <Title>Kenzie Contacts</Title>
        </motion.div>
      </Container>
      <ContaienrButton>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <button className="home__singIN" onClick={() => navigate("login")}>
            Entrar
          </button>
        </motion.div>
      </ContaienrButton>
    </>
  );
};
