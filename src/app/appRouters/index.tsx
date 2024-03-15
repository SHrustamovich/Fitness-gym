import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import { Link, Route, Routes } from "react-router-dom";
import { menuList } from "../../constants/menuList";
import { Suspense } from "react";
import { router } from "../../constants/router";
import Lazy from "../../components/Lazy";
import { Icons } from "../../constants/icon";
const AppRouter = () => {
    return (
        <div>
            <Layout hasSider>
                <Sider
                    style={{
                        overflow: "auto",
                        height: "100vh",
                        position: "fixed",
                        background: "#343743",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        color: "#FFF",
                    }}
                    className='pt-[100px pt-[100px]'>
                    <div className='demo-logo-vertical' />
                    <div className='absolute mt-[-60px] ml-[40px] mb-[43px]'>
                        <Icons.logo />
                    </div>
                    <Menu
                        mode='inline'
                        style={{ color: "white" }}
                        defaultSelectedKeys={["1"]}
                        items={menuList.map(({ id, title, path, icon }) => {
                            return {
                                key: id,
                                label: <Link to={path}>{title}</Link>,
                                icon: icon,
                            };
                        })}
                        className='bg-[#343743] mt-[50px]'
                    />
                </Sider>
                <Layout
                    style={{ marginLeft: 200 }}
                    className='bg-[#1E1E1E] h-[900px]'>
                    <Header className='bg-[#1E1E1E] text-white px-4'>
                        <h1 className=''>Hello</h1>
                    </Header>
                    <Content
                        style={{
                            margin: "24px 16px 0",
                            overflow: "initial",
                        }}
                        className='text-white'>
                        <Suspense fallback={<Lazy />}>
                            <Routes>
                                {router.map((item) => (
                                    <Route
                                        path={item.path}
                                        element={item.element}
                                        key={item.id}
                                    />
                                ))}
                            </Routes>
                        </Suspense>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default AppRouter;
