import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./context/userContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <UserProvider>
                <App />
        </UserProvider>
    </BrowserRouter>
);
