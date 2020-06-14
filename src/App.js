import React from 'react';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from "./components/Navbar/Navbar";

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
