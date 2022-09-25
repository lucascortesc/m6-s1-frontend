import { useUser } from "../../Providers/User";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { toastStyle } from "../../Styles";

export const Header = () => {
  const { user } = useUser();

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    toast.success("Logout feito com sucesso!", toastStyle());
    navigate("/");
  };
  return (
    <Container>
      <div className="header__limiter">
        <div className="header__formater-div" />
        <p className="header__username">{user.name}</p>
        <button className="header__logout" onClick={() => handleLogout()}>
          Logout
        </button>
      </div>
    </Container>
  );
};
