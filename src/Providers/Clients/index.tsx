import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../Services/api";
import { toast } from "react-hot-toast";
import { toastStyle } from "../../Styles";
import { IChildren, IClient, IClientRequest } from "../../interface";
import { useNavigate } from "react-router-dom";
import request from "axios";

interface IClientProvider {
  clients: IClient[];
  contacts: IClient[];
  client: IClient;
  setClient: (data: IClient) => void;
  getClients: () => void;
  getContacts: (client_id: string) => void;
  setContacts: (data: IClient[]) => void;
  createClient: (data: IClientRequest, setOpenForm: (arg: boolean) => void) => void;
  createContact: (data: IClientRequest, clientId: string, setOpenForm: (arg: boolean) => void) => void;
  updateClient: (data: IClientRequest, id: string, setOpenForm: (arg: boolean) => void) => void;
  updateContact: (data: IClientRequest, id: string, setOpenForm: (arg: boolean) => void) => void;
  deleteClient: (id: string, setOpenModalDelete: (arg: boolean) => void) => void;
  deleteContact: (id: string, setOpenModalDelete: (arg: boolean) => void) => void;
}

interface IErrorResponse {
  error: string;
}

const ClientContext = createContext<IClientProvider>({} as IClientProvider);

export const useClient = () => useContext(ClientContext);

export const ClientProvider = ({ children }: IChildren) => {
  const [clients, setClients] = useState<IClient[]>([]);
  const [client, setClient] = useState<IClient>({} as IClient);
  const [contacts, setContacts] = useState<IClient[]>([]);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const catchResponse = (err: unknown) => {
    if (request.isAxiosError(err)) {
      const typedErr = err.response?.data as IErrorResponse;
      if (typedErr) {
        if (typedErr.error === "Token inválido") {
          toast.error("Sessão expirada", toastStyle());
          localStorage.clear();
          navigate("/login");
        } else {
          toast.error(typedErr.error, toastStyle());
        }
      } else {
        toast.error("Algo deu errado, tente novamente", toastStyle());
      }
    }
  };

  const getClients = async () => {
    try {
      const response = await api.get("/clients", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setClients(response.data);
    } catch (err) {
      catchResponse(err);
    }
  };

  const createClient = async (data: IClientRequest, setOpenForm: (arg: boolean) => void) => {
    try {
      const response = await api.post("/clients", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setClients([...clients, response.data]);
      toast.success("Cliente criado com sucesso!", toastStyle());
      setOpenForm(false);
    } catch (err) {
      catchResponse(err);
    }
  };

  const updateClient = async (data: IClientRequest, id: string, setOpenForm: (arg: boolean) => void) => {
    try {
      const response = await api.patch(`/clients/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const copyClients = [...clients];
      const index = copyClients.findIndex((client) => client.id === id);
      copyClients[index] = response.data;
      setClient(response.data);

      setClients(copyClients);
      toast.success("Cliente atualizado com sucesso!", toastStyle());
      setOpenForm(false);
    } catch (err) {
      catchResponse(err);
    }
  };

  const deleteClient = async (id: string, setOpenModalDelete: (arg: boolean) => void) => {
    try {
      await api.delete(`/clients/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setClients(clients.filter((client) => client.id !== id));
      setClient({} as IClient);
      setContacts([]);
      toast.success("Cliente deletado com sucesso!", toastStyle());
      setOpenModalDelete(false);
    } catch (err) {
      catchResponse(err);
    }
  };

  const getContacts = async (client_id: string) => {
    try {
      const response = await api.get(`/clients/${client_id}/contacts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setContacts(response.data);
    } catch (err) {
      catchResponse(err);
    }
  };

  const createContact = async (
    data: IClientRequest,
    clientId: string,
    setOpenForm: (arg: boolean) => void
  ) => {
    try {
      const response = await api.post(`/clients/${clientId}/contacts`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setContacts([...contacts, response.data]);
      toast.success("Contato criado com sucesso!", toastStyle());
      setOpenForm(false);
    } catch (err) {
      catchResponse(err);
    }
  };

  const updateContact = async (data: IClientRequest, id: string, setOpenForm: (arg: boolean) => void) => {
    try {
      const response = await api.patch(`/contacts/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const copyContacts = [...contacts];
      const index = copyContacts.findIndex((contact) => contact.id === id);
      copyContacts[index] = response.data;
      setContacts(copyContacts);

      toast.success("Contato atualizado com sucesso!", toastStyle());
      setOpenForm(false);
    } catch (err) {
      catchResponse(err);
    }
  };

  const deleteContact = async (id: string, setOpenModalDelete: (arg: boolean) => void) => {
    try {
      await api.delete(`/contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setContacts(contacts.filter((contact) => contact.id !== id));
      toast.success("Cliente deletado com sucesso!", toastStyle());
      setOpenModalDelete(false);
    } catch (err) {
      catchResponse(err);
    }
  };

  return (
    <ClientContext.Provider
      value={{
        clients,
        getClients,
        getContacts,
        contacts,
        setContacts,
        createClient,
        deleteClient,
        client,
        setClient,
        updateClient,
        updateContact,
        deleteContact,
        createContact,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};
