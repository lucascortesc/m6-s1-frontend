import { ReactNode } from "react";

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister extends ILogin {
  name: string;
  confirmPassword?: string;
}

export interface IChildren {
  children: ReactNode;
}

export interface IUser {
  name: string;
  id: string;
  token: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IClientRequest {
  name: string;
  email: string;
  phone: string;
}

export interface IClient extends IClientRequest {
  id: string;
}

export interface IMethod {
  method: string;
  object?: IClient;
  client_id?: string;
}
