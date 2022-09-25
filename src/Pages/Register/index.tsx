import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validation";
import { IRegister } from "../../interface";
import { Container } from "../Login/styles";
import { motion } from "framer-motion";
import { InputAdornment, TextField } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../Providers/User";

export const Register = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { userRegister } = useUser();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({ resolver: yupResolver(registerSchema) });

  const dataRegister = (data: IRegister) => {
    delete data.confirmPassword;
    userRegister(data, setIsLoading);
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
          <h1 className="title-form">Registro</h1>
          <form className="form" onSubmit={handleSubmit(dataRegister)}>
            <span className="erro">{errors.name?.message}</span>
            <TextField
              id="name"
              label="Nome"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AccountCircleIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              className="TextField"
              {...register("name")}
              error={!!errors.name}
              fullWidth
            />

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

            <span className="erro">{errors.confirmPassword?.message}</span>
            <TextField
              id="confirmPassword"
              label="Confirmar senha"
              type={!visible ? "password" : "text"}
              variant="outlined"
              className="TextField"
              {...register("confirmPassword")}
              error={!!errors.confirmPassword}
              fullWidth
            />
            <div className="button-wrap">
              {!isLoading ? (
                <>
                  <button className="button" type="submit">
                    Registrar
                  </button>
                  <p className="register" onClick={() => navigate("/login")}>
                    Login
                  </p>
                </>
              ) : (
                <div className="loading" />
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </Container>
  );
};
