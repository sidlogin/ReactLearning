import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <h3> <Link to='/'>Home</Link></h3>
            <h3> <Link to='/users'>Users</Link></h3>
        </div>
    )
}
export default Header;