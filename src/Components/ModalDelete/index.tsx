import { useClient } from "../../Providers/Clients";
import { Background, Modal } from "../ManipulateForm/styles";
import { ModalBody, ButtonWrap } from "./styles";

interface Props {
  id: string;
  provider: string;
  setModalDelete: (arg: boolean) => void;
}

export const ModalDelete: React.FC<Props> = ({ id, provider, setModalDelete }) => {
  const { deleteClient, deleteContact } = useClient();

  const title = () => {
    const type = provider === "client" ? "Cliente" : "Contato";

    return `Excluir ${type}`;
  };

  const handleDelete = () => {
    provider === "client" ? deleteClient(id, setModalDelete) : deleteContact(id, setModalDelete);
  };

  return (
    <Background>
      <Modal>
        <p className="close" onClick={() => setModalDelete(false)}>
          x
        </p>
        <p className="modal__title">{title()}</p>
        <ModalBody>
          <p>Tem certeza que deseja exlcuir o {provider === "client" ? "Cliente" : "Contato"}?</p>
        </ModalBody>
        <ButtonWrap>
          <button className="button" onClick={() => handleDelete()}>
            Deletar
          </button>
          <button className="button" onClick={() => setModalDelete(false)}>
            Cancelar
          </button>
        </ButtonWrap>
      </Modal>
    </Background>
  );
};
