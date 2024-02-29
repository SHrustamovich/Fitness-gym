import { lazy } from "react";

const History = lazy(() => import("./History"));
const Home = lazy(() => import("./Home"));
const Inventory = lazy(() => import("./Inventory"));
const Member = lazy(() => import("./Members"));
const Payments = lazy(() => import("./Payments"));
const Pos = lazy(() => import("./Pos"));
const Products = lazy(() => import("./Products"));

export {
    History,
    Home,
    Inventory,
    Member,
    Payments,
    Pos,
    Products
}
