import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Galleries from './Galleries';
import Info from './Info';
import AddPic from './AddPic';
import { PhotoProvider } from './PhotoContext'; 

const App = () => {
    return (
        <PhotoProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Galleries />} />
                    <Route path="/info" element={<Info />} />
                    <Route path="add" element={<AddPic />} />
                </Routes>
            </Router>
        </PhotoProvider>
    );
};

export default App;
