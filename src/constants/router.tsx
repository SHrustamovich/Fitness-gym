import { ReactNode } from "react";
import { History, Home, Inventory, Member, Payments, Pos, Products } from "src/pages"

interface IRouter{
  id: number;
  path: string;
  element: ReactNode;
}

export const Router: IRouter[] = [
    {
        id: 1,
        path: "/",
        element: <Home />,
    },
    {
        id: 2,
        path: "/member",
        element: <Member />,
    },
    {
        id: 3,
        path: "/pos",
        element: <Pos />,
    },
    {
        id: 4,
        path: "/inventory",
        element: <Inventory />,
    },
    {
        id: 5,
        path: "/products",
        element: <Products />,
    },
    {
        id: 6,
        path: "/history",
        element: <History />,
    },
    {
        id: 7,
        path: "/payments",
        element: <Payments />,
    },
];
