import { Drawer, Select } from "antd";
import { useState } from "react";
import { Icons } from "../../../constants/icon";
import { Button } from "@mui/material";

const ProductDrawer = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div
                className='w-[164px] h-[44px] bg-[#343743] rounded-[20px] mt-[-44px] ml-[1100px] cursor-pointer'
                onClick={showDrawer}>
                <div className='pl-[30px] py-[10px]'>
                    <Icons.add />
                    <span className='absolute ml-[40px] mt-[-22px]'>
                        ADD NEW
                    </span>
                </div>
            </div>{" "}
            <Drawer
                style={{
                    background: "#343743",
                    color: "white",
                    paddingTop: "15px",
                }}
                onClose={onClose}
                open={open}>
                <h1 className='text-[22px] font-semibold pl-[30px]'>
                    NEW PRODUCT
                </h1>
                <div className='mt-[46px]'>
                    <form>
                        <label className='text-[14px]'>Product Type</label>
                        <Select
                            className='w-full rounded-[20px] h-[36px] mt-2 '
                            defaultValue='Drinks'>
                            <option value='Drinks'>Drinks</option>
                            <option value='Clothes'>Clothes</option>
                            <option value='Food'>Food</option>
                            <option value='Supplements'>Supplements</option>
                        </Select>
                    </form>
                    <form className='grid mt-[46px]'>
                        <label>Product Name</label>
                        <input
                            type='text'
                            placeholder='Product Name'
                            className='mt-2 w-full h-[36px] bg-[#272A30] pl-3 rounded-[20px] border-none outline-none'
                            
                        />
                    </form>
                    <form className='grid mt-[46px]'>
                        <label>Unit Price</label>
                        <input
                            type='text'
                            placeholder='Unit Price'
                            className='mt-2 w-full h-[36px] bg-[#272A30] pl-3 rounded-[20px] border-none outline-none'
                        />
                    </form>
                    <form className='grid mt-[46px]'>
                        <label>Discount Percentage</label>
                        <input
                            type='text'
                            placeholder='Discount Percentage'
                            className='mt-2 w-full h-[36px] bg-[#272A30] pl-3 rounded-[20px] border-none outline-none'
                        />
                    </form>
                    <form className='grid mt-[46px]'>
                        <label>Supplier</label>
                        <input
                            type='text'
                            placeholder='Supplier'
                            className='mt-2 w-full h-[36px] bg-[#272A30] pl-3 rounded-[20px] border-none outline-none'
                        />
                    </form>
                    <Button
                        onClick={onClose}
                        style={{
                            color: "white",
                            marginTop: "50px",
                            marginLeft: "150px",
                        }}>
                        Cancel
                    </Button>
                    <Button
                        onClick={onClose}
                        style={{
                            marginTop: "50px",
                            marginLeft: "20px",
                            background: "#9B74F0",
                            color: "white",
                            padding: "5px 20px",
                            borderRadius: "20px",
                        }}>
                        SAVE
                    </Button>
                </div>
            </Drawer>
        </div>
    );
};

export default ProductDrawer;

