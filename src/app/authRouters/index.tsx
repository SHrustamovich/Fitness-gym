import { usePostRequest } from "../../hooks/request";
import { UserContext } from "../../context/userContext";
import { useContext } from "react";
import { Urls } from "../../utils/urls";
import { message, Form, Input, Button } from "antd";
import Title from "antd/es/typography/Title";
import { LoginAuth, LoginResponseI } from "./components/types";
import LoginImg1 from "./components/LoginImg";

const LoginPage = () => {
    const loginPost = usePostRequest({ url: Urls.auth.login });

    const { setTokens } = useContext(UserContext);
    async function handlyFinish(values: LoginAuth) {
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
        <div className='flex flex-col justify-center'>
            <div className='login-page__logo '>
                <img src='../../public/LoginLogo.png' alt='' />
            </div>
            <div className='login-page__image'>
                <LoginImg1 />
            </div>
            <Form
                className='flex flex-col w-96'
                initialValues={{
                    remember: true,
                }}
                onFinish={handlyFinish}
                autoComplete='off'>
                <Title className='login-card__title'>Tizimga kirish</Title>
                <Form.Item
                    className=""
                    label='Username'
                    name='username'
                    rules={[
                        {
                            required: true,
                            message: "Please input your username!",
                        },
                    ]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    label='Password'
                    name='password'
                    className='input-password'
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}>
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name='remember'
                    valuePropName='checked'
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}></Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}>
                    <Button htmlType='submit'>
                        Kirish
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginPage;
