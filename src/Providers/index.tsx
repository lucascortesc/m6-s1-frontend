import { IChildren } from "../interface";
import { UserProvider } from "./User";
import { ClientProvider } from "./Clients";

export const Providers = ({ children }: IChildren) => {
  return (
    <UserProvider>
      <ClientProvider>{children}</ClientProvider>
    </UserProvider>
  );
};
