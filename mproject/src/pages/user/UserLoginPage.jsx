import React from 'react';
import {Button, Flex, Form, Input, Layout, message} from "antd";
import {loginUser} from "../../database/userManager.js";
import bcrypt from "bcryptjs";
import {useNavigate} from "react-router-dom";

const {Content} = Layout;
function UserLoginPage(props) {
    const navigate = useNavigate();
    const [loading, setLoading] = React.useState(false);

    const onFinish = async (values) => {
        const {email, password} = values;
        setLoading(true);
        const ret = await loginUser(email, password);
        if (ret.message === 'email') {
            message.error('이메일을 확인하세요');
        } else {
            const isMatch = await bcrypt.compare(password, ret.data.password);
            if (isMatch) {
                message.success('로그인 성공');
                sessionStorage.setItem('name',ret.data.name);
                sessionStorage.setItem('email',ret.data.email);
                sessionStorage.setItem('age',ret.data.age);
                navigate('/');
            } else {
                message.error('패스워드를 확인하세요');
            }
        }
        console.log(ret);
        setLoading(false);
    }
    return (
        <Content>
            <Flex style={{justifyContent: 'center', alignItems: 'center', height:'100%'}} vertical>
                <h1 style={{fontSize: '2rem'}}>로그인</h1>
                <Form
                    layout="vertical"
                    onFinish={onFinish}
                    initialValues={{email: 'aaa@naver.com', password: '12345'}}
                >
                    <Form.Item
                        label="이메일"
                        name="email"
                        rules={[{required: true, type: "email", message: '이메일을 입력해주세요.'}]}>
                        <Input
                            placeholder="Email"/>
                    </Form.Item>
                    <Form.Item
                        label="패스워드"
                        name="password"
                        rules={[{required: true, message: '패스워드를 입력해주세요.'}]}>
                        <Input.Password
                            placeholder="Password"/>
                    </Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading} block>
                        로그인
                    </Button>
                </Form>
            </Flex>
        </Content>
    );
}

export default UserLoginPage;