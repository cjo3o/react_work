import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Layout, message, Row, Table, Tag} from "antd";
import {useNavigate} from "react-router-dom";

const {Content} = Layout;

function TodoPage() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const navigate = useNavigate();
    // const deleteKey = ...selectedRowKeys;

    useEffect(() => {
        fetch('https://6809e08b1f1a52874cde2c58.mockapi.io/todos')
            .then(res => res.json())
            .then(data => {
                const sortedData = data.sort((a, b) => b.id - a.id);
                setTodos(sortedData); // API는 { todos: [...] } 형태로 응답
                setLoading(false);
                console.log(data);
            });
    }, []);

    const handleDelete = () => {
        console.log(`${selectedRowKeys}`);
        // console.log(`dd${deleteKey}`);
        fetch(`https://6809e08b1f1a52874cde2c58.mockapi.io/todos/${selectedRowKeys}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: selectedRowKeys
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

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

    const rowSelection = {
        selectedRowKeys: selectedRowKeys,
        onChange: (newselectedRowKeys) => {
            setSelectedRowKeys(newselectedRowKeys);
        }
    }

    return (
        <Content>
            <Card title="📋 Todo 목록 (API)">
                <Button style={{margin: "1rem 0"}} type="primary" onClick={() => {
                    if (selectedRowKeys.length !== 1) {
                        message.warning('한개의 행을 선택하세요');
                        ;
                        return;
                    }
                    navigate(`../modify/${selectedRowKeys[0]}`);
                }}>수정</Button>
                <Button style={{margin: "1rem 0"}} type="primary" onClick={handleDelete}>
                    삭제
                </Button>
                <Table
                    dataSource={todos}
                    columns={columns}
                    loading={loading}
                    rowKey="id"
                    pagination={{pageSize: 10}}
                    rowSelection={rowSelection}
                />
            </Card>
        </Content>
    );
}

export default TodoPage;
