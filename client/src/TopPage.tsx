import React from "react";
import Login from './components/Login'
import Register from './components/Register'

const TopPage: React.FC = () => {
    return (
        <div>
            <Login />
            <Register />
        </div>
    )
}

export default TopPage;