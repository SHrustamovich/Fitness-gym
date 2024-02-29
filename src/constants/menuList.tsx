import { Icons } from "../components/icons/icons";

interface IMenuList {
    id: number;
    title: string;
    path: string;
    icon: any;
}

export const MenuList: IMenuList[] = [
    {
        id: 1,
        title: "Home",
        path: "/",
        icon: <Icons.home />,
    },
    {
        id: 2,
        title: "Members",
        path: "/member",
        icon: <Icons.members />,
    },
    {
        id: 3,
        title: "POS",
        path: "/pos",
        icon: <Icons.pos />,
    },
    {
        id: 4,
        title: "Inventory",
        path: "/inventory",
        icon: <Icons.inventory />,
    },
    {
        id: 5,
        title: "Products",
        path: "/products",
        icon: <Icons.products />,
    },
    {
        id: 6,
        title: "Visit history",
        path: "/history",
        icon: <Icons.history />,
    },
    {
        id: 7,
        title: "Payments",
        path: "/payments",
        icon: <Icons.payments />,
    },
    {
        id: 8,
        title: "Logout",
        path: "/logout",
        icon: <Icons.logout/>
    }
];
