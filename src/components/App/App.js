import React from 'react';
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from "../Navbar/Navbar";

const App = () => {
    return (
        <div className="app bg-gray-100">
            <Navbar />
            <Main />
            <Sidebar />
        </div>
    );
};
export default App;
