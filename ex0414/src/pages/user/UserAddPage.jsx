import React from 'react';
import {Button, Card, Col, Form, Input, Layout, message, Row} from "antd";
import {supabase} from "../../database/supabaseClient.js";
import bcrypt from "bcryptjs";
import {useNavigate} from "react-router-dom";

const {Content} = Layout;

function UserAddPage(props) {
    const [messageApi, contextHolder] = message.useMessage();
    const [loading, setLoading] = React.useState(false);
    let navigate = useNavigate();
    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'This is a success message',
        });
    };

    const onFinish = async (values) => {
        const {name, email, age, phone, password} = values;
        // 등록 못하게 막기
        setLoading(true);
        try {
            const hashedPassword = await bcrypt.hash(password, 12);
            const res = await supabase.from('members').insert([{name, email, age, phone, password:hashedPassword}]);
            console.log(res);
            if (res.error) {
                message.error('사용자 추가 실패 하였습니다.');
            } else {
                message.success('사용자 추가 성공');

                console.log("??");
            }
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }
    return (
        <>
            {contextHolder}
            <Content>
                <Row gutter={[16, 16]}>
                    <Col span={24}>
                        <Card hoverable style={{margin: '1rem', padding: '1rem'}}>
                            <h1 style={{fontSize: '2rem'}}>사용자추가</h1>
                            <Form layout="vertical" onFinish={onFinish}>
                                <Form.Item label="이름" name="name" rules={[{required: true, message: '이름을 입력해주세요'}]}>
                                    <Input/>
                                </Form.Item>
                                <Form.Item label="이메일" name="email"
                                           rules={[{required: true, type: 'email', message: '올바른 이메일을 입력해주세요'}]}>
                                    <Input/>
                                </Form.Item>
                                <Form.Item label="나이" name="age" rules={[{required: true, message: '나이를 입력해주세요'}]}>
                                    <Input type="number"/>
                                </Form.Item>
                                <Form.Item label="전화번호" name="phone" rules={[{required: true, message: '전화번호를 입력해주세요'}]}>
                                    <Input/>
                                </Form.Item>
                                <Form.Item label="비밀번호" name="password" rules={[{required: true, message: '비밀번호를 입력해주세요'}]}>
                                    <Input.Password/>
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" loading={loading} block>
                                        등록
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Content>
        </>
    );
}

export default UserAddPage;