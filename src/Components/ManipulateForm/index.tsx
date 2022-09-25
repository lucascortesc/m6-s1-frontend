import { InputAdornment, TextField } from "@mui/material";
import { MouseEvent } from "react";
import { IClientRequest, IMethod } from "../../interface";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { Background, Modal } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { clientSchema } from "../../validation";
import { useClient } from "../../Providers/Clients";

interface Props {
  info: IMethod;
  provider: string;
  setOpenForm: (arg: boolean) => void;
}

export const ManipulateForm: React.FC<Props> = ({ info, provider, setOpenForm }) => {
  const { createClient, updateClient, updateContact, createContact } = useClient();

  const title = () => {
    const method = info.method === "post" ? "Criar" : "Atualizar";
    const type = provider === "client" ? "Cliente" : "Contato";

    return `${method} ${type}`;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IClientRequest>({ resolver: yupResolver(clientSchema) });

  const onSubmit = (data: IClientRequest) => {
    if (provider === "client") {
      info.method === "post"
        ? createClient(data, setOpenForm)
        : updateClient(data, info.object ? info.object?.id : "", setOpenForm);
    }

    if (provider === "contact") {
      info.method === "post"
        ? createContact(data, info.client_id ? info.client_id : "", setOpenForm)
        : updateContact(data, info.object ? info.object?.id : "", setOpenForm);
    }
  };

  return (
    <Background>
      <Modal>
        <p className="close" onClick={() => setOpenForm(false)}>
          x
        </p>
        <p className="modal__title">{title()}</p>

        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="erro__wrap">
            <span className="erro">{errors.name?.message}</span>
          </div>
          <TextField
            id="name"
            label="Nome"
            defaultValue={info.method === "patch" ? info.object?.name : ""}
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
          />
          <div className="erro__wrap">
            <span className="erro">{errors.email?.message}</span>
          </div>
          <TextField
            id="email"
            label="E-mail"
            defaultValue={info.method === "patch" ? info.object?.email : ""}
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
          />
          <div className="erro__wrap">
            <span className="erro">{errors.phone?.message}</span>
          </div>
          <TextField
            id="phone"
            label="Telefone"
            placeholder="(xx)xxxxx-xxxx"
            defaultValue={info.method === "patch" ? info.object?.phone : ""}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PhoneAndroidIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            className="TextField"
            {...register("phone")}
            error={!!errors.phone}
          />
          <div className="button-wrap">
            <button className="button" type="submit">
              {info.method === "post" ? "Criar" : "Atualizar"}
            </button>
          </div>
        </form>
      </Modal>
    </Background>
  );
};
