import { Pagination } from "@mui/material";

const ProductsPagination = () => {
    return (
        <div className='mt-[36px] ml-[1050px] text-[#FFF]'>
            <Pagination count={3} color='primary' variant='outlined' />
        </div>
    );
};

export default ProductsPagination;
