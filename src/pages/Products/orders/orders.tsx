import { Button, Card, Flex, Table, TableProps, message } from "antd";
import { IDataSource, dataSource } from "../../../constants/data";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import ProductsPagination from "./pagination";

const Orders = () => {
    const handlyEdit = () => {
        console.log("Edit");
        message.info("Edit");
    };
    const handlyDelete = () => {
        console.log("delete");
        message.info("Delete");
    };
    const column: TableProps<IDataSource>["columns"] = [
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
            title: "Unit Price",
            dataIndex: "price",
            key: "price",
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
            title: "Actions",
            render: () => {
                return (
                    <Flex gap={"small"}>
                        <Button onClick={handlyEdit} className='border-none'>
                            <EditFilled />
                        </Button>
                        <Button onClick={handlyDelete} className='border-none'>
                            <DeleteFilled />
                        </Button>
                    </Flex>
                );
            },
        },
    ];
    return (
        <>
            <Card className='w-[1210px] mt-[30px] bg-[#343743] border-none ml-auto mr-auto h-auto'>
                <Table
                    dataSource={dataSource}
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
