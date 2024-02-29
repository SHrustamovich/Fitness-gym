import { Suspense } from "react";
import { Icons } from "../../components/icons/icons";
import { MenuList } from "../../constants/menuList";
import { Route, Routes } from "react-router-dom";
import { routes } from "../../constants/router";

const AppRouter = () => {
    return (
        <div className='flex h-screen'>
            <div className='w-[280px] pt-[23px] bg-[#343743]'>
                <div className='flex flex-col gap-5'>
                    <div className='mx-auto'>
                        <Icons.logo />
                    </div>
                    <div className='mt-5 text-white pl-[40px] font-bold text-base flex flex-col gap-5'>
                        {MenuList.map((item) => (
                            <div
                                key={item.id}
                                className='cursor-pointer flex items-center gap-2'>
                                <div>{item.icon}</div> <p>{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='bg-[#272A30] w-full text-white pr-[50px] pl-[50px]'>
                <div className='h-[65px] flex items-center justify-end gap-4'>
                    <button>
                        <Icons.language />
                    </button>
                    <button>
                        <Icons.settings />
                    </button>
                    <button>
                        <Icons.profile />
                    </button>
                </div>
                <div className='pt-[35px]'>
                    <Suspense>
                        <Routes>
                            {routes.map((item) => (
                                <Route
                                    path={item.path}
                                    element={item.element}
                                    key={item.id}
                                />
                            ))}
                        </Routes>
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default AppRouter;
