import React, { useEffect, useState } from 'react';
import { Card, Col, Layout, Row, Table, Tag } from "antd";

const { Content } = Layout;

function TodoPage() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://dummyjson.com/todos')
            .then(res => res.json())
            .then(data => {
                setTodos(data.todos); // API는 { todos: [...] } 형태로 응답
                setLoading(false);
            });
    }, []);

    // 📌 테이블 컬럼 설정
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            width: 80,
        },
        {
            title: '할 일',
            dataIndex: 'todo',
            key: 'todo',
        },
        {
            title: '완료 여부',
            dataIndex: 'completed',
            key: 'completed',
            render: (completed) => (
                <Tag color={completed ? 'green' : 'volcano'}>
                    {completed ? '완료' : '미완료'}
                </Tag>
            ),
        },
        {
            title: '사용자',
            dataIndex: 'userId',
            key: 'userId',
            width: 100,
        }
    ];

    return (
        <Content>
            <Card title="📋 Todo 목록 (API)">
                <Table
                    dataSource={todos}
                    columns={columns}
                    loading={loading}
                    rowKey="id"
                    pagination={{ pageSize: 10 }}
                />
            </Card>
        </Content>
    );
}

export default TodoPage;
