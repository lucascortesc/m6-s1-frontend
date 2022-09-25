import { motion } from "framer-motion";

import { Clients } from "../../Components/Clients";
import { Header } from "../../Components/Header";

import { Container } from "./styles";

export const Dashboard = () => {
  return (
    <>
      <Header />
      <Container>
        <Clients />
      </Container>
    </>
  );
};
