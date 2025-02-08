import React, { useState } from 'react';
import '../styles/Contact.css';
import FloatingButtons from './FloatingButtons';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:princelonito@gmail.com?subject=contact form submission&body=name: ${formData.name}%0Aemail: ${formData.email}%0Amessage: ${formData.message}`;
        window.location.href = mailtoLink;
    };

    return (
        <div>
            <FloatingButtons />
            <div className='container'>
                <h1>contact</h1>
                <div className='contact-content'>
                    <form onSubmit={handleSubmit} className='contact-container'>
                        <div>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="your name here"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your email here"
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="your message here"
                                required
                            />
                        </div>
                        <button type="submit">send</button>
                    </form>
                    <div className="social-buttons">
                        <a href="https://www.linkedin.com/in/princelonito/" target="_blank" rel="noopener noreferrer">
                            <button className="social-button">linkedin</button>
                        </a>
                        <a href="https://github.com/PrinceOpelinia/" target="_blank" rel="noopener noreferrer">
                            <button className="social-button">github</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;