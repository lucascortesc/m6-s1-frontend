import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { Outlet, Navigate } from "react-router-dom";
import { Dashboard } from "../Pages/Dashboard";

export const Navigation = () => {
  const PrivateRoutes = () => {
    const token = localStorage.getItem("token");
    return token ? <Outlet /> : <Navigate to="/login" />;
  };

  const AuthenticatedForbidenRoutes = () => {
    const token = localStorage.getItem("token");
    return !token ? <Outlet /> : <Navigate to="/main" />;
  };

  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/main" element={<Dashboard />} />
      </Route>

      <Route element={<AuthenticatedForbidenRoutes />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route path="/" element={<Home />} />
    </Routes>
  );
};
