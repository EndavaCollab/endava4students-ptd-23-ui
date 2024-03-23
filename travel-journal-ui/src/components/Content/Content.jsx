import { Outlet } from "react-router-dom";

import "./index.css";

const Content = () => {
    return (
        <div className="content">
            <Outlet />
        </div>
    );
}

export default Content;
