import { useContext } from "react";
import { Button, Form, Input, message } from "antd";
import { UserContext } from "../../context/userContext";
import { Urls } from "../../utils/urls";
import { usePostRequest } from "../../hooks/request";
import PersonIcon from "./components/PersonIcon";
import LoginPasIcon from "./components/LoginPasIcon";
import LogoIcon from "./components/LogoIcon";

interface LoginAuth {
    values: string;
}

interface LoginResponseI {
    data: any;
    refreshToken: string;
    accessToken: string;
}

export const LogIn = () => {
    const loginPost = usePostRequest({ url: Urls.auth.login });

    const { setTokens } = useContext(UserContext);

    async function handlyFinish(values: LoginAuth) {
        console.log(values);
        const { success, response, error } =
            await loginPost.request<LoginResponseI>({
                data: values,
            });
        if (success && !!response) {
            const { accessToken, refreshToken } = response.data;
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);
            setTokens(accessToken, refreshToken);
        } else {
            message.error(error);
        }
    }

    return (
        <div className='login flex items-center h-full relative'>
            <div className='login-card flex p-7 w-[400px] h-[450px] flex-col justify-center align-center  bg-[#272a30] opacity-90 rounded-[20px]'>
                <div className='w-full h-[107px] flex justify-center'>
                    <LogoIcon />
                </div>
                <p className='font-semibold text-white text-4xl text-center'>
                    WELCOME
                </p>
                <Form
                    className='w-full flex flex-col'
                    initialValues={{ remember: true }}
                    onFinish={handlyFinish}>
                    <div className='login__item'>
                        <p className='text-white font-normal mb-[6px]'>Login</p>
                        <Form.Item
                            className='log'
                            name='username'
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your username!",
                                },
                            ]}>
                            <Input prefix={<PersonIcon />} />
                        </Form.Item>
                    </div>

                    <div className='login__item'>
                        <p className='text-white font-normal mb-[6px]'>
                            Password
                        </p>
                        <Form.Item
                            className='log'
                            name='password'
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your password!",
                                },
                            ]}>
                            <Input prefix={<LoginPasIcon />} />
                        </Form.Item>
                    </div>
                    <Form.Item className='login__btnForm text-center'>
                        <Button
                            className='rounded-[20px] font-bold text-white bg-[#9b74f0] border-none w-2/3'
                            htmlType='submit'
                            loading={loginPost.loading}>
                            <span>LOGIN</span>
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default LogIn;