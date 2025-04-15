import React, {useState} from 'react';
import {Layout, Menu, Button, Grid, Row, Col, Card} from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    DashboardOutlined,
    SettingOutlined,
    InfoOutlined,
    FundViewOutlined,
} from '@ant-design/icons';

import {Link, Route, Routes} from "react-router-dom";
import RootPage from "./pages/RootPage.jsx";
import ReviewPage from "./pages/ReviewPage.jsx";
import TodoPage from "./pages/TodoPage.jsx";
import UserListPage from "./pages/user/UserListPage.jsx";
import UserAddPage from "./pages/user/UserAddPage.jsx";

const {Header, Sider, Content, Footer} = Layout;
const {useBreakpoint} = Grid;

// 메뉴 항목 구성
const items = [
    {
        key: 'dashboard',
        icon: <DashboardOutlined/>,
        label: (<Link to='/'>대시보드</Link>),
    },
    {
        key: 'review',
        icon: <FundViewOutlined/>,
        label: (<Link to='/todo'>할일</Link>),
    },
    {
        key: 'menu1',
        icon: <InfoOutlined/>,
        label: (<Link to='/review'>리뷰</Link>),
    },
    {
        key: 'users',
        icon: <UserOutlined/>,
        label: '사용자 관리',
        children: [
            {key: 'users-list', label: <Link to='/user/list'>사용자 목록</Link>},
            {key: 'users-add', label: <Link to='/user/add'>사용자 추가</Link>},
            {key: 'users-remove', label: <Link to='/user/remove'>사용자 삭제</Link>},
        ],
    },
    {
        key: 'settings',
        icon: <SettingOutlined/>,
        label: '설정',
    },
];

const AppLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const screens = useBreakpoint();

    return (
        <Layout style={{minHeight: '100vh'}}>
            {/* Sider (사이드 메뉴) */}
            <Sider
                trigger={null}
                collapsed={collapsed}
                breakpoint="md"
                collapsedWidth="0"
                onBreakpoint={(broken) => setCollapsed(broken)}
            >
                <div style={{height: 32, margin: 16, background: 'rgba(255,255,255,0.2)'}}/>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['dashboard']}
                    items={items}
                />
            </Sider>

            <Layout>
                {/* 상단 헤더 */}
                <Header
                    style={{
                        background: '#fff',
                        padding: '0 16px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    {!screens.md && (
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{fontSize: 20}}
                        />
                    )}
                    <div style={{fontSize: '1.1rem', fontWeight: 'bold'}}>
                        로고 또는 상단 헤더
                    </div>
                </Header>

                {/* 본문 콘텐츠 */}
                <Routes>
                    <Route path="/" element={<RootPage/>}></Route>
                    <Route path="/review" element={<ReviewPage/>}></Route>
                    <Route path="/todo" element={<TodoPage/>}></Route>
                    <Route path="/user/list" element={<UserListPage/>}></Route>
                    <Route path="/user/add" element={<UserAddPage/>}></Route>
                    <Route path="/user/remove" element={<TodoPage/>}></Route>
                </Routes>
                {/* 하단 푸터 */}
                <Footer style={{textAlign: 'center'}}>
                    Ant Design ©2025 Created by You
                </Footer>
            </Layout>
        </Layout>
    );
};

export default AppLayout;
