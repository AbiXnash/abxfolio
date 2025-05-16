import { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";

import Navbar from './components/Header/Navbar/Navbar';
import Sidebar from './components/Header/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Publications from './pages/Publications/Publications';
import Footer from './components/Footer/Footer';

import './Loader.scss'; // Import CSS for the loader
import './App.scss';

const Loader = () => {
    return <div className="loader-container">
        <div className="loader"></div>
    </div>
};


const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const preventCopy = (e: ClipboardEvent) => {
        e.preventDefault();
    };

    useEffect(() => {
        document.addEventListener('copy', preventCopy);

        return () => {
            document.removeEventListener('copy', preventCopy);
        };
    }, []);

    // This effect simulates data loading or the mounting of child components
    useEffect(() => {
        const loadComponents = async () => {
            // Simulate an async operation, such as data fetching or a timeout
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve(null);
                }, 1500); // Simulating loading time (1 second)
            });
            setLoading(false); // Set loading to false after components are loaded
        };

        loadComponents();
    }, []); // Runs once when the component mounts

    return <BrowserRouter>
        <div className='no-select'>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Navbar toggle={toggle} />
                    <Sidebar isOpen={isOpen} toggle={toggle} />
                    <Home />
                    <About />
                    <Publications />
                    <Footer />
                </>
            )}
        </div>
    </BrowserRouter>
};

export default App;
