import React, {useEffect, useState} from 'react';
import {Layout, Card, Form, Button, Input, Select, notification} from "antd";
import {useNavigate, useParams} from "react-router-dom";
import {useForm} from "antd/es/form/Form.js";

function TodoModifyPage(props) {
    const [loading, setLoading] = useState(false);
    const {id} = useParams();
    const [form] = useForm();

    const [values, setValues] = useState(null);

    const navigate = useNavigate();

    const onFinish = (values) => {
        setLoading(true);
        fetch(`https://6809e08b1f1a52874cde2c58.mockapi.io/todos/${id}`, {
            method: 'PUT',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                notification.success({
                    message: "성공적으로 저장하였습니다."
                })
                navigate('/todo/list');
            })
        setLoading(false);
    }

    useEffect(() => {
        fetch(`https://6809e08b1f1a52874cde2c58.mockapi.io/todos/${id}`)
            .then(res => res.json())
            .then(data => {
                setValues(data);
                data.completed === true ? setValues(data.completed = "완료") : setValues(data.completed = "미완료");
                form.setFieldsValue(data);
            })
    },[]);
    return (
        <Layout.Content>
            <Card hoverable>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="todo"
                        name="todo"
                        rules={[{required: true, message: "할일을 입력하세요"}]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="completed"
                        name="completed"
                        rules={[{required: true, message: "할일 완료여부를 선택하세요"}]}
                    >
                        <Select
                            options={[
                                {value: "false", label: <span>미완료</span>},
                                {value: "true", label: <span>완료</span>},
                            ]}
                        />
                    </Form.Item>
                    <Form.Item
                        label="userId"
                        name="userId"
                        rules={[{required: true, message: "아이디를 입력하세요"}]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={loading}>
                            저장
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </Layout.Content>
    );
}

export default TodoModifyPage;