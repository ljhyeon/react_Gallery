import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Galleries from './Galleries';
import Info from './Info';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Galleries />} />
                <Route path="/info" element={<Info />} />
            </Routes>
        </Router>
    );
};

export default App;
