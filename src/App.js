import React from 'react';
import Header from './components/Header'; // Updated import path
import Home from './components/Home'; // Updated import path
import About from './components/About'; // Updated import path
import Projects from './components/Projects'; // Updated import path
import Skills from './components/Skills';
import Contact from './components/Contact'; // Updated import path
import Footer from './components/Footer'; // Updated import path
import './App.css'; // Import global styles

function App() {
    return (
        <div className="page">
            <Header />
            <Home />
            <About />
            <Skills/>
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;