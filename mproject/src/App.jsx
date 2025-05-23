import React, {lazy, Suspense, useEffect, useState} from 'react';
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

import {Link, Route, Routes, useLocation} from "react-router-dom";
import RootPage from "./pages/RootPage.jsx";
import ReviewPage from "./pages/review/ReviewPage.jsx";
import UserListPage from "./pages/user/UserListPage.jsx";
import UserAddPage from "./pages/user/UserAddPage.jsx";
import UserLoginPage from "./pages/user/UserLoginPage.jsx";
import Logout from "./components/Logout.jsx";
import TodoAddPage from "./pages/todo/TodoAddPage.jsx";
import ReviewAddPage from "./pages/review/ReviewAddPage.jsx";
import TodoModifyPage from "./pages/todo/TodoModifyPage.jsx";

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
        key: 'todo',
        icon: <FundViewOutlined/>,
        label: "todo",
        children: [
            {key: '/todo/list', label: <Link to="/todo/list">TodoList</Link>},
            {key: '/todo/Add', label: <Link to="/todo/Add">TodoAdd</Link>}
        ]
    },
    {
        key: 'review',
        icon: <InfoOutlined/>,
        label: 'review',
        children: [
            {key: '/review/list', label: <Link to="/review/list">ReviewList</Link>},
            {key: '/review/Add', label: <Link to="/review/Add">ReviewAdd</Link>}
        ]
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
const TodoListPage = lazy( () => {
    return import('./pages/todo/TodoPage.jsx')
})
const AppLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const screens = useBreakpoint();
    const location = useLocation();
    const selectedKey = location.pathname;
    const [name, setName] = useState("");


    useEffect(() => {
        sessionStorage.getItem("name") ? setName(sessionStorage.getItem("name")) : setName("");

    }, [location.pathname]);

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
                <div
                    style={{
                        height: 32,
                        margin: 16,
                        background: 'rgba(255,255,255,0.2)'
                    }}
                    onClick={() => {
                        if (!screens.md) {
                            setCollapsed(true);
                        }
                    }}
                >
                    <Link to={'/'}>
                        <h1 style={{
                            color: "#fff",
                            textAlign: "center",
                            fontSize: "1.6rem",
                            lineHeight: "32px"
                        }}>
                            관리자
                        </h1>
                    </Link>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['dashboard']}
                    items={items}
                    onClick={() => {
                        if (!screens.md) {
                            setCollapsed(true);
                        }
                    }}
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
                    <div style={{fontSize: '1.1rem', fontWeight: 'bold', whiteSpace: 'nowrap'}}>
                        <span style={{marginRight: '2rem'}}>{name && `${name}님 안녕하세요`}</span>
                        <Button type="primary">
                            {
                                name ?
                                    (<Logout></Logout>) :
                                    (<Link to={'/user/login'}>로그인</Link>)
                            }
                        </Button>
                    </div>
                </Header>

                {/* 본문 콘텐츠 */}
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<RootPage/>}></Route>
                        <Route path="/review" element={<ReviewPage/>}></Route>
                        <Route path="/user/list" element={<UserListPage/>}></Route>
                        <Route path="/user/add" element={<UserAddPage/>}></Route>
                        <Route path="/user/remove" element={<TodoListPage/>}></Route>
                        <Route path="/user/login" element={<UserLoginPage/>}></Route>
                        <Route path="/todo">
                            <Route path="list" element={<TodoListPage/>}></Route>
                            <Route path="add" element={<TodoAddPage/>}></Route>
                            <Route path="modify/:id" element={<TodoModifyPage/>}></Route>

                        </Route>
                        <Route path="/review">
                            <Route path="list" element={<ReviewPage/>}></Route>
                            <Route path="add" element={<ReviewAddPage/>}></Route>
                        </Route>
                    </Routes>
                </Suspense>
                {/* 하단 푸터 */}
                <Footer style={{textAlign: 'center'}}>
                    Ant Design ©2025 Created by You
                </Footer>
            </Layout>
        </Layout>
    );
};

export default AppLayout;
