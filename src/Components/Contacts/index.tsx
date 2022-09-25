import { Fragment, useEffect, useState } from "react";
import { useClient } from "../../Providers/Clients";
import { Container, TitleWrap } from "./styles";
import { motion } from "framer-motion";
import { ManipulateForm } from "../ManipulateForm";
import { ModalDelete } from "../ModalDelete";
import { IClient, IMethod } from "../../interface";

interface IProps {
  client_id: string;
}

export const Contacts: React.FC<IProps> = ({ client_id }) => {
  const { getContacts, contacts } = useClient();
  const [openForm, setOpenForm] = useState<boolean>(false);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [info, setInfo] = useState<IMethod>({} as IMethod);

  useEffect(() => {
    getContacts(client_id);
  }, [client_id]);

  const formatedName = (name: string) => {
    return name.length > 20 ? `${name.slice(0, 20)}...` : name;
  };

  const handleOpenForm = (method: string, object?: IClient, id?: string) => {
    const objectMethod = {
      method,
      object,
      client_id: id,
    };
    setInfo(objectMethod);
    setOpenForm(true);
  };

  return (
    <>
      <TitleWrap>
        <p className="contact__title">Contatos</p>
        <button
          className="contact__button-create"
          onClick={() => handleOpenForm("post", undefined, client_id)}
        >
          Criar contato
        </button>
      </TitleWrap>
      <Container>
        {contacts.length > 0 ? (
          contacts.map((contact) => {
            return (
              <Fragment key={contact.id}>
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className="contact__info"
                >
                  <div className="contact__buttons-wrap">
                    <button onClick={() => handleOpenForm("patch", contact)}>Editar</button>
                    <button onClick={() => setOpenModalDelete(true)}>Excluir</button>
                  </div>
                  <div className="contact__info-wrap">
                    <span>Nome:</span>
                    <p>{formatedName(contact.name)}</p>
                  </div>
                  <div className="contact__info-wrap">
                    <span>Email:</span>
                    <p>{contact.email}</p>
                  </div>
                  <div className="contact__info-wrap">
                    <span>Telefone:</span>
                    <p>{contact.phone}</p>
                  </div>
                </motion.div>
                {openModalDelete && (
                  <ModalDelete id={contact.id} provider={"contact"} setModalDelete={setOpenModalDelete} />
                )}
              </Fragment>
            );
          })
        ) : (
          <p className="contact__empty">Esse cliente não possui contatos</p>
        )}
      </Container>
      {openForm && <ManipulateForm info={info} provider={"contact"} setOpenForm={setOpenForm} />}
    </>
  );
};
