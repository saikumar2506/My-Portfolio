import React from "react";
import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython } from "react-icons/fa";

import { useScrollAnimation } from "../hooks/useScrollAnimation";


const Skills = () => {
  const [sectionRef, isVisible] = useScrollAnimation();

  return (
    <section id="skills" ref={sectionRef} className={`push-up ${isVisible ? "visible" : ""}`}>
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="skill">
          <FaHtml5 className="icon html" />
          <p>HTML</p>
        </div>
        <div className="skill">
          <FaCss3Alt className="icon css" />
          <p>CSS</p>
        </div>
        <div className="skill">
          <FaReact className="icon react" />
          <p>React</p>
        </div>
        <div className="skill">
          <FaPython className="icon python" />
          <p>Python</p>
        </div>
        <div className="skill">
          <FaNodeJs className="icon nodejs" />
          <p>Node.js</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;