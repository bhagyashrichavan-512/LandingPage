import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import More from '../src/components/More';
const Routing = () => {
    return (
        <>
             <Routes>
                <Route exact path="/" element={<App />} />              
                <Route exact path="/more" element={<More />} />              
            </Routes>
        </>
    );
};

export default Routing;