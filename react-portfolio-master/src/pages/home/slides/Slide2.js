import React from "react";
import { FaCogs, FaDraftingCompass, FaMicroscope, FaRobot, FaProjectDiagram, FaCheckCircle, FaMicrochip } from "react-icons/fa";

const skills = [
  {
    icon: <FaDraftingCompass size={32} color="#333" className="slide2-skill-icon" />, 
    title: "SolidWorks",
    desc: "Expert 3D modeling, assembly design, and technical drawings for mechanical components."
  },
  {
    icon: <FaDraftingCompass size={32} color="#333" className="slide2-skill-icon" />,
    title: "AutoCAD",
    desc: "2D drafting, technical drawings, and detailed engineering documentation."
  },
  {
    icon: <FaDraftingCompass size={32} color="#333" className="slide2-skill-icon" />,
    title: "Fusion 360",
    desc: "Cloud-based CAD/CAM for design, engineering, and manufacturing workflows."
  },
  {
    icon: <FaMicrochip size={32} color="#333" className="slide2-skill-icon" />,
    title: "Arduino",
    desc: "Microcontroller programming for automation, sensors, and embedded systems."
  },
  {
    icon: <FaMicrochip size={32} color="#333" className="slide2-skill-icon" />,
    title: "Raspberry Pi",
    desc: "Single-board computer applications for IoT, automation, and data processing."
  },
  {
    icon: <FaCogs size={32} color="#333" className="slide2-skill-icon" />,
    title: "Python Programming",
    desc: "Automation scripts, data analysis, and engineering calculations."
  },
  {
    icon: <FaCogs size={32} color="#333" className="slide2-skill-icon" />,
    title: "C/C++ Programming",
    desc: "Low-level programming for embedded systems and performance-critical applications."
  },
  {
    icon: <FaCogs size={32} color="#333" className="slide2-skill-icon" />,
    title: "MATLAB",
    desc: "Numerical computing, simulation, and engineering analysis."
  }
];

const Slide2 = () => (
  <div className="slide2-container">
    <div className="slide2-summary">
      <h2 className="mb-1x">Mechanical Engineer & CAD/CAM Operator</h2>
      <p>As a Mechanical Engineer and CAD/CAM Operator, I specialize in 3D modeling, technical drawings, and programming. My expertise includes SolidWorks, AutoCAD, Fusion 360, Arduino, Raspberry Pi, and programming languages like Python, C, C++, and MATLAB. I also bring strong communication skills and German language proficiency to international projects.</p>
    </div>
    <div className="slide2-skills">
      {skills.map((skill, idx) => (
        <div key={idx} className="slide2-skill-box">
          {skill.icon}
          <h4 className="slide2-skill-title">{skill.title}</h4>
          <p className="slide2-skill-desc">{skill.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Slide2; 