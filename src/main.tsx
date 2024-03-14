import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./context/userContext.tsx";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./pages/Products/drawer/userReducer.tsx";
const store = configureStore({
    reducer: {
        users: userReducer,
    },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <UserProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </UserProvider>
    </BrowserRouter>
);
