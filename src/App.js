import React from 'react';
import './App.css'
import Cards from './components/Cards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Services from './components/Services';

const App = () => {
    return (
        <>
            <Navbar/>
            <Services/>
            <Cards/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default App;