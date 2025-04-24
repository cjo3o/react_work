import React, { useEffect, useState } from 'react';
import { Card, Layout, Table, Button, Popconfirm, message, Modal, Form, Input } from 'antd';
import { getUsers, deleteUsersByIds, updateUserById } from '../../database/userManager.js';

const { Content } = Layout;

function UserListPage() {
    const columns = [
        { title: 'Name', dataIndex: 'name' },
        { title: 'Email', dataIndex: 'email' },
        { title: 'Age', dataIndex: 'age' },
        { title: 'Phone', dataIndex: 'phone' },
    ];

    const [dataSource, setDataSource] = useState([]);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [editingUser, setEditingUser] = useState(null); // 수정 모달용
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();

    // 데이터 로딩
    const loadData = async () => {
        const { data } = await getUsers();
        setDataSource(data); // 재랜더링..
    };

    useEffect(() => {
        loadData();
    }, []);

    // 행 선택 핸들러
    const onSelectChange = (keys) => {
        setSelectedRowKeys(keys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    // 삭제 버튼
    const handleDelete = async () => {
        const { error } = await deleteUsersByIds(selectedRowKeys);
        if (error) {
            message.error('삭제 실패');
        } else {
            message.success('삭제 완료');
            setSelectedRowKeys([]);
            loadData();
        }
    };

    // 수정 버튼
    const handleEdit = () => {
        if (selectedRowKeys.length !== 1) {
            message.warning('하나의 사용자만 선택해주세요');
            return;
        }
        const findUser = dataSource.find((user) => user.id === selectedRowKeys[0]);   // 선택한것과 같은ID인 User찾기
        setEditingUser(findUser);   // setState 수정하는 유저 설정
        form.setFieldsValue(findUser);   // 화면 Form에 값 나타내기
        setIsModalVisible(true);   // 모달창 보이게 하기
    };

    const handleModalOk = async () => {
        const values = form.getFieldsValue();
        const { error } = await updateUserById(editingUser.id, values);
        if (error) {
            message.error('수정 실패');
        } else {
            message.success('수정 완료');
            setIsModalVisible(false);
            setSelectedRowKeys([]);
            loadData();
        }
    };

    return (
        <Content>
            <Card hoverable style={{ margin: '1rem', overflowX: 'auto' }}>
                <h1>👤 사용자 목록</h1>

                <div style={{ marginBottom: 16, display: 'flex', gap: 8 }}>
                    <Popconfirm title="삭제할까요?" onConfirm={handleDelete}>
                        <Button danger disabled={selectedRowKeys.length === 0}>삭제</Button>
                    </Popconfirm>
                    <Button type="primary" onClick={handleEdit}>수정</Button>
                </div>

                <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={dataSource}
                    rowKey="id"
                    scroll={{ x: 'max-content' }}
                    style={{ width: '100%' }}
                />

                {/* 수정 모달 */}
                <Modal
                    title="사용자 수정"
                    open={isModalVisible}
                    onOk={handleModalOk}
                    onCancel={() => setIsModalVisible(false)}
                >
                    <Form layout="vertical" form={form}>
                        <Form.Item label="이름" name="name" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="이메일" name="email" rules={[{ required: true, type: 'email' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="나이" name="age">
                            <Input />
                        </Form.Item>
                        <Form.Item label="전화번호" name="phone">
                            <Input />
                        </Form.Item>
                    </Form>
                </Modal>
            </Card>
        </Content>
    );
}

export default UserListPage;