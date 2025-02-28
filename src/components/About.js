import React from 'react';
import './About.css'; // Import About section styles
import { useScrollAnimation } from "../hooks/useScrollAnimation";


function About() {
    const name = "Saikumar";
    const [sectionRef, isVisible] = useScrollAnimation();
    return (
        <section id="about" ref={sectionRef} className={`push-up ${isVisible ? "visible" : ""}`}>
            <h1>About Me</h1>
            <p>
                Hello! I'm {name}, an aspiring web developer and software associate with a strong foundation 
                in C, Python, MongoDB, Express, 
                Node.js, HTML, CSS, and JavaScript. With hands-on 
                experience through internships in Blue Prism automation 
                 and Cybersecurity via AICTE, Iam trying to develop 
                a keen interest in building efficient and scalable
                 applications. 
             My goal is to become a proficient web 
                   developer and software associate, contributing
                    to innovative solutions and enhancing user 
                    experiences through technology.


            </p>
        </section>
    );
}

export default About;