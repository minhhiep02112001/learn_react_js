import { Fragment, react, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";
function SideBar() {

    return (
        <ul className="list-group">
            <Link className="nav-link active" to="/product">List product </Link>
            
            <Link className="nav-link active" to="/product/create">Create product </Link>
        </ul>
    );
}

export default SideBar;