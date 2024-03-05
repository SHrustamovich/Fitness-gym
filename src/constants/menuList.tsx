import {
    CreditCardOutlined,
    FieldTimeOutlined,
    HomeOutlined,
    PrinterOutlined,
    ProductOutlined,
    ShoppingCartOutlined,
    UsergroupAddOutlined,
} from "@ant-design/icons";
import { ReactNode } from "react";
interface IMenuList{
    id: number;
    title: string;
    path: string;
    icon: ReactNode;
}
export const menuList:IMenuList[] = [
    {
        id: 1,
        title: "Home",
        path: "/",
        icon: <HomeOutlined />,
    },
    {
        id: 2,
        title: "Members",
        path: "/member",
        icon: <UsergroupAddOutlined />,
    },
    {
        id: 3,
        title: "POS",
        path: "/pos",
        icon: <ShoppingCartOutlined />,
    },
    {
        id: 4,
        title: "Inventory",
        path: "/inventory",
        icon: <PrinterOutlined />,
    },
    {
        id: 5,
        title: "Products",
        path: "/products",
        icon: <ProductOutlined />,
    },
    {
        id: 6,
        title: "History",
        path: "/history",
        icon: <FieldTimeOutlined />,
    },
    {
        id: 7,
        title: "Payments",
        path: "/payments",
        icon: <CreditCardOutlined />,
    },
];
