import React, {useEffect, useState} from 'react';
import {Button, Card, Layout, Table} from "antd";
import {getUsers} from "../../database/userManager.js";

const {Content} = Layout;

function UserListPage(props) {

    const columns = [
        {title: "Name", dataIndex: "name"},
        {title: "Email", dataIndex: "email"},
        {title: "Phone", dataIndex: "phone"},
        {title: "Age", render: () => <Button>dd</Button>}];
    const [dataSource, setDataSource] = useState([]);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onSelectedRowChange = (newSelectedRowKeys) => {
        console.log('선택된행 키');
        setSelectedRowKeys(newSelectedRowKeys);
    }

    const rowSelection = {
        selectedRowKeys: selectedRowKeys,
        onChange: onSelectedRowChange,
    };

    useEffect(() => {
        async function loadData() {
            const {data} = await getUsers();
            setDataSource(data);
        }

        loadData();
    }, []);

    return (
        <Content>
            <Card style={{margin: '1rem'}}>
                <h1>안녕하세요</h1>
                <Table columns={columns}
                       dataSource={dataSource}
                       rowKey="id"
                       rowSelection={rowSelection}
                       scroll={{x: "max-content"}}
                >

            </Table>
        </Card>
</Content>
)
    ;
}

export default UserListPage;