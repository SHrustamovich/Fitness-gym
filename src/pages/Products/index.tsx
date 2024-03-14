import { useSelector } from "react-redux";
import { Icons } from "../../constants/icon";
import ProductDrawer from "./drawer/drawer";
import Orders from "./orders/orders";

const Products = () => {
    const users = useSelector((state) => state.users);
    console.log(users);

    return (
        <div>
            <div className='w-[424px]'>
                <input
                    type='text'
                    className='w-full h-[44px] bg-[#343743] border-none outline-none pl-[50px] rounded-[20px] text-[]'
                    placeholder='Search Member'
                />{" "}
                <Icons.search className='absolute mt-[-34px] ml-[15px] cursor-pointer' />
            </div>
            <div className='w-[126px] h-[44px] bg-[#343743] rounded-[20px] pl-[30px] py-[10px] ml-[930px] mt-[-44px] cursor-pointer'>
                <span className='absolute pl-[34px] '>Filter</span>{" "}
                <Icons.filter />
            </div>
            <ProductDrawer />
            <Orders />
        </div>
    );
};

export default Products;
