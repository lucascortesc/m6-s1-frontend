import { Container, Loading } from "./styles";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { ILogin } from "../../interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../../validation";
import { InputAdornment, TextField } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../Providers/User";

export const Login = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const { login } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({ resolver: yupResolver(LoginSchema) });

  const handleLogin = (data: ILogin) => {
    login(data, setIsLoading);
  };

  return (
    <Container>
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="container-form"
        >
          <h1 className="title-form">Login</h1>
          <form className="form" onSubmit={handleSubmit(handleLogin)}>
            <span className="erro">{errors.email?.message}</span>
            <TextField
              id="email"
              label="E-mail"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              className="TextField"
              {...register("email")}
              error={!!errors.email}
              fullWidth
            />
            <span className="erro">{errors.password?.message}</span>
            <TextField
              id="password"
              label="Senha"
              type={!visible ? "password" : "text"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {visible ? (
                      <AiFillEye size={"22px"} cursor={"pointer"} onClick={() => setVisible(!visible)} />
                    ) : (
                      <AiFillEyeInvisible
                        size={"22px"}
                        cursor={"pointer"}
                        onClick={() => setVisible(!visible)}
                      />
                    )}
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              className="TextField"
              {...register("password")}
              error={!!errors.password}
              fullWidth
            />
            <div className="button-wrap">
              {!isLoading ? (
                <>
                  <button className="button" type="submit">
                    Entrar
                  </button>
                  <p className="register" onClick={() => navigate("/register")}>
                    Registre-se
                  </p>
                </>
              ) : (
                <Loading />
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </Container>
  );
};
