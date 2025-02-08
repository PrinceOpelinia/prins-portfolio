import React from 'react';
import '../styles/About.css';
import FloatingButtons from './FloatingButtons';

const About = () => {
    return (
        <div className="container">
            <FloatingButtons />
            <h1>about me</h1>
            <div className='about-content'>
            <p>
                hello! my name is prince.
            </p>
            <p>
                in my free time, i enjoy learning new programming languages, exploring the latest web development trends, and contributing to open-source projects. 
                i am always eager to take on new challenges and improve my skills.
            </p>
            <p>
                outside of coding, i love to stay active by running and doing outdoor activities like camping and hiking. it's a great way to get out from behind the desk and enjoy nature!
            </p>
            <p>
                feel free to reach out to me if you have any questions or if you would like to collaborate on a project!
            </p>
            </div>
        </div>
    );
};

export default About;