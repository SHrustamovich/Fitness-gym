import useAuthentication from "../hooks/useAuth";
import AppRouter from "./appRouters";
import LogIn from "./authRouters";

const AppPage = () => {
   const { isLoggedIn } = useAuthentication();
  return isLoggedIn ? (
    <AppRouter/>
  ) : (
    <LogIn/>
  )
}

export default AppPage