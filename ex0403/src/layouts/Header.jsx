import React from 'react';
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <div style={{display: "flex", gap: "1rem"}}>
            <Link to="/"><h2>홈</h2></Link>
            <Link to="/contact"><h2>연락처</h2></Link>
            <Link to="/about"><h2>About</h2></Link>
            <Link to="/user/54ced7c3-0918-4650-a6bf-2056e6fc9c1a"><h2>MyPage</h2></Link>
        </div>
    );
}

export default Header;