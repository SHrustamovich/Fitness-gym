import { Card, Table, TableProps } from "antd";
import ProductsPagination from "../../../pages/Products/orders/pagination";
import { inventory, Inventory } from "./data";

const Orders = () => {
    const column: TableProps<Inventory>["columns"] = [
        {
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Product Type",
            dataIndex: "product",
            key: "product",
        },
        {
            title: "Product Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Supplier",
            dataIndex: "supplier",
            key: "supplier",
        },
        {
            title: "Stocks",
            dataIndex: "stocks",
            key: "stocks",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
        },
    ];
    return (
        <>
            <Card className='w-[1230px] mt-[30px] bg-[#343743] border-none ml-auto mr-auto h-[400px] overflow-scroll'>
                <Table
                    dataSource={inventory}
                    columns={column}
                    scroll={{ x: "100%" }}
                    style={{ background: "#343743" }}
                />
            </Card>
            <ProductsPagination />
        </>
    );
};

export default Orders;
