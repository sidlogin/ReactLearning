import React from "react";
import { Link } from "react-router-dom";

const Header = ({ children }) => {
    return (
        <div>
            <header className="header">
                <nav>
                    <h3> <Link to='/'>Home</Link></h3>
                    <h3> <Link to='/users'>Users</Link></h3>
                </nav>
            </header>
            {children}
        </div>
    )
}
export default Header;