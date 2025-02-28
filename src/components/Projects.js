import React from 'react';
import './Projects.css'; // Import Projects section styles
import project1 from './assets/project.png';
import project2 from './assets/project-2.png';
import project3 from './assets/project-3.png'
import { useScrollAnimation } from "../hooks/useScrollAnimation";



function Projects() {
    const [sectionRef, isVisible] = useScrollAnimation();

    return (
        <section id="projects" ref={sectionRef} className={`push-up ${isVisible ? "visible" : ""}`}>
            <h2>My Certifications</h2>
            <div className="project-card">
                <img src={project1} alt="Project" />
                <h3>Intelligent Automation Virtual Internship</h3>
                <p>The Intelligent Automation Virtual Internship, conducted by EduSkills in collaboration with the All India Council for Technical Education (AICTE) and SS&C Blue Prism, is designed to equip students with practical skills in Robotic Process Automation (RPA). This initiative aims to bridge the gap between academia and industry, fostering an industry-ready workforce proficient in  technologies.</p>
            </div>
            <div className="project-card">
                <img src={project2} alt="Project 2"/>
                <h3>Cybersecurity Virtual Internship</h3>
                <p>The Cybersecurity Virtual Internship conducted by EduSkills is a collaborative initiative with AICTE and Google for Developers, designed to equip students with practical experience in cloud cybersecurity. .</p>
            </div>
            <div className="project-card">
                <img src={project3} alt="Project 3" />
                <h3>Machine Learning </h3>
                <p>SkillDzire offers a comprehensive Machine Learning course designed to equip learners with essential Python programming skills and foundational data science knowledge. The curriculum is structured to cater to both beginners and those seeking to deepen their expertise in machine learning.</p>
            </div>
        </section>
    );
}

export default Projects;