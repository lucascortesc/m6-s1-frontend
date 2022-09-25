import { useClient } from "../../Providers/Clients";
import { Container } from "./styled";
import Select from "react-select";
import { useEffect, useState } from "react";
import { IClient, IMethod } from "../../interface";
import { motion } from "framer-motion";
import { Contacts } from "../Contacts";
import { ManipulateForm } from "../ManipulateForm";
import { ModalDelete } from "../ModalDelete";

export const Clients = () => {
  const { clients, getClients, setContacts, client, setClient } = useClient();
  const [openForm, setOpenForm] = useState<boolean>(false);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [info, setInfo] = useState<IMethod>({} as IMethod);

  useEffect(() => {
    getClients();
  }, []);

  const formatedName = (name: string) => {
    return name.length > 20 ? `${name.slice(0, 20)}...` : name;
  };

  const handleSetClient = (data: IClient | undefined) => {
    if (data) {
      setClient(data);
    } else {
      setClient({} as IClient);
      setContacts([]);
    }
  };

  const options = clients.map((client) => {
    return {
      value: client,
      label: formatedName(client.name),
    };
  });

  const customStyles = {
    option: (provided: any) => ({
      ...provided,
      cursor: "pointer",
      overflow: "hidden",
    }),
  };

  const handleOpenForm = (method: string, object?: IClient) => {
    const objectMethod = {
      method,
      object,
    };
    setInfo(objectMethod);
    setOpenForm(true);
  };

  return (
    <>
      <Container>
        <p className="clients__select-title">Selecionar Cliente</p>
        <div className="clients__wrap-header">
          <div className="clients__wrap-select">
            <Select
              options={options}
              isClearable
              isSearchable
              styles={customStyles}
              onChange={(data) => handleSetClient(data?.value)}
            />
          </div>
          <button className="clients__button-create" onClick={() => handleOpenForm("post")}>
            Criar cliente
          </button>
        </div>
        {!!Object.keys(client).length && (
          <>
            <p className="clients__title">Cliente</p>
            <div className="main__content">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="clients__info"
              >
                <div className="clients__buttons-wrap">
                  <button onClick={() => handleOpenForm("patch", client)}>Editar</button>
                  <button onClick={() => setOpenModalDelete(true)}>Excluir</button>
                </div>
                <div className="clients__info-wrap">
                  <span>Nome:</span>
                  <p>{formatedName(client.name)}</p>
                </div>
                <div className="clients__info-wrap">
                  <span>Email:</span>
                  <p>{client.email}</p>
                </div>
                <div className="clients__info-wrap">
                  <span>Telefone:</span>
                  <p>{client.phone}</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Contacts client_id={client.id} />
              </motion.div>
            </div>
          </>
        )}
      </Container>
      {openForm && <ManipulateForm info={info} provider={"client"} setOpenForm={setOpenForm} />}
      {openModalDelete && (
        <ModalDelete id={client.id} provider={"client"} setModalDelete={setOpenModalDelete} />
      )}
    </>
  );
};
