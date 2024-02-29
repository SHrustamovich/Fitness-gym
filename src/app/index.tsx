import useAuthentication from "../hooks/useAuth";
import AppRouter from "./appRouters";
import LoginPage from "./authRouters";

const AppPage = () => {
  const { isLoggedIn } = useAuthentication();
  return isLoggedIn ? (
    <AppRouter />
  ) : (
    <LoginPage />
  );
}

export default AppPage