import React from 'react';
import {Card, Col, Layout, Row} from "antd";
import styles from './ReviewPage.module.css';
import {Outlet} from "react-router-dom";

const {Content} = Layout;

function ReviewPage(props) {
    return (
        <>
            <Content style={{padding:'1rem'}}>
                <Card>
                    <div>Review</div>
                    <Outlet></Outlet>
                </Card>
            </Content>

        </>
    );
}

export default ReviewPage;