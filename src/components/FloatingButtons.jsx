import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/FloatingButtons.css';

const FloatingButtons = () => {
return (
    <div className="floating-buttons">
        <Link to="/about">
            <button className="square-button">about</button>
        </Link>
        <Link to="/blog">
            <button className="square-button">blog</button>
        </Link>
        <Link to="/contact">
            <button className="square-button">contact</button>
        </Link>
        <Link to="/">
            <button className="square-button">home</button>
        </Link>
    </div>
);
};

export default FloatingButtons;