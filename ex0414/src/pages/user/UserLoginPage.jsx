import React from 'react';
import {Button, Flex, Form, Input, Layout} from "antd";

const {Content} = Layout;

// const {Item} = Form;

function UserLoginPage(props) {
    // const inputRef = React.useRef(null);
    // const [emailValidation, setEmailValidation] = React.useState(false);
    //
    // const login = () => {
    //     if (inputRef.current.value === '') {
    //         setEmailValidation(true);
    //     } else {
    //         setEmailValidation(false);
    //     }
    // }
    return (
        <Content>
            <Flex justify={'center'} >
                <h1 style={{fontSize: '2rem'}}>로그인</h1>
                {/*<form action="">*/}
                {/*    <input id="email" type="email" name="email" placeholder="Email" ref={inputRef} />*/}
                {/*    {*/}
                {/*        emailValidation && <div style={{color: "red"}}>이메일을 입력하세요.</div>*/}
                {/*    }*/}
                {/*    <button type="button" onClick={login}>로그인</button>*/}
                {/*</form>*/}
                <Form onFinish={() => {
                    console.log('dd');
                }}>
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
                    <Button type="primary" htmlType="submit">
                        로그인
                    </Button>
                </Form>
            </Flex>
        </Content>
    );
}

export default UserLoginPage;