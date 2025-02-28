import profile from './assets/firstpic.jpg';
import React, { useState, useEffect, useMemo } from 'react';
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import './Home.css'; // Import the CSS file for Home component styling

function Home() {
    const roles = useMemo(() => [
        "Frontend Developer",
        "Backend Developer",
        "MERN Stack Developer",
        "Fullstack Developer"
    ], []);

    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayedRole, setDisplayedRole] = useState("");
    const [letterIndex, setLetterIndex] = useState(0);

    useEffect(() => {
        const currentRole = roles[currentRoleIndex];

        if (letterIndex < currentRole.length) {
            const timeout = setTimeout(() => {
                setDisplayedRole(prev => prev + currentRole[letterIndex]);
                setLetterIndex(letterIndex + 1);
            }, 100); // Typing speed
        
            return () => clearTimeout(timeout);
        } else {
            // Wait before switching roles
            setTimeout(() => {
                setDisplayedRole("");
                setLetterIndex(0);
                setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
            }, 1000);
        }
    }, [letterIndex, currentRoleIndex, roles]);

    const [homeRef, isHomeVisible] = useScrollAnimation();


    return (
        <section id="home" ref={homeRef} className={`fade-in ${isHomeVisible ? "visible" : ""}`}>
            <div className="container">
                <img src={profile} alt="Saikumar" className="profile-image"/>
                <div className="content">
                    <h2>Hi, I'm <span className="name">Saikumar</span></h2>
                    <p className="role">{displayedRole}</p>
                    <p>Highly passionated about web development and software engineering, constantly exploring new technologies to build efficient and user-friendly applications. </p>
                </div>
            </div>
        </section>
    );
}

export default Home;