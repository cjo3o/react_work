import React, {useState} from 'react';
import {Layout, Card, Form, Button, Input, Select, notification} from "antd";

function TodoAddPage(props) {
    const [loading, setLoading] = useState(false);
    const onFinish = (values) => {
        setLoading(true);
        fetch('https://6809e08b1f1a52874cde2c58.mockapi.io/todos', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                notification.success({
                    message:"성공적으로 저장하였습니다."
                })
            })
        setLoading(false);
    }
    return (
        <Layout.Content>
            <Card hoverable>
                <Form
                    layout="vertical"
                    onFinish={onFinish}
                    initialValues={{
                        createdAt: "2025-04-24T09:10:09.632Z",
                        todo: "추가하기",
                        completed: "false",
                        userId: "123",
                        id: "1"
                    }}
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

export default TodoAddPage;