import request from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { IChildren, IRegister, IUser, IUserLogin } from "../../interface";
import { api } from "../../Services/api";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { toastStyle } from "../../Styles/index";

interface IUserProvider {
  user: IUser;
  token: string;
  login: (data: IUserLogin, setIsLoading: (arg: boolean) => void) => void;
  userRegister: (data: IRegister, setIsLoading: (arg: boolean) => void) => void;
}

interface IErrorResponse {
  error: string;
}

const UserContext = createContext<IUserProvider>({} as IUserProvider);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: IChildren) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [token, setToken] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    const retrieveUser = localStorage.getItem("user");
    const retrieveToken = localStorage.getItem("token");

    if (retrieveUser) {
      setUser(JSON.parse(retrieveUser));
    }

    if (retrieveToken) {
      setToken(retrieveToken);
    }
  }, []);

  const defaultCatch = (err: unknown, setIsLoading: (arg: boolean) => void) => {
    if (request.isAxiosError(err)) {
      const typedErr = err.response?.data as IErrorResponse;
      typedErr
        ? toast.error(typedErr.error, toastStyle())
        : toast.error("Algo deu errado, tente novamente", toastStyle());
    }
    setIsLoading(false);
  };

  const login = async (data: IUserLogin, setIsLoading: (arg: boolean) => void) => {
    setIsLoading(true);

    try {
      const response = await api.post("/login", data);

      const responseToken = response.data.token;
      const responseUser = response.data.user;

      localStorage.setItem("token", responseToken);
      localStorage.setItem("user", JSON.stringify(responseUser));

      setToken(responseToken);
      setUser(responseUser);

      toast.success("Logado com sucesso!", toastStyle());

      setTimeout(() => {
        navigate("/main");
        setIsLoading(false);
      }, 1000);
    } catch (err) {
      defaultCatch(err, setIsLoading);
    }
  };

  const userRegister = async (data: IRegister, setIsLoading: (arg: boolean) => void) => {
    setIsLoading(true);

    try {
      await api.post("/register", data);

      toast.success("Registrado com sucesso!", toastStyle());

      setTimeout(() => {
        navigate("/login");
        setIsLoading(false);
      }, 1000);
    } catch (err) {
      defaultCatch(err, setIsLoading);
    }
  };

  return <UserContext.Provider value={{ user, login, userRegister, token }}>{children}</UserContext.Provider>;
};
