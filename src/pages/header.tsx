import { Icons } from "../constants/icon";
const Header = () => {
    return (
        <div className='fixed flex z-10 gap-[26px] mt-[28px] ml-[1150px] cursor-pointer'>
            <div className='mt-1.5'>
                <Icons.UK />
            </div>
            <div>
                <Icons.settings />
            </div>
            <div>
                <Icons.user />
            </div>
        </div>
    );
};

export default Header;
