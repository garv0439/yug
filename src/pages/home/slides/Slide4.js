import React from "react";
import { FaMicrochip, FaIndustry, FaRobot, FaChartLine, FaCogs, FaNetworkWired } from "react-icons/fa";

const features = [
  {
    icon: <FaMicrochip size={32} />, 
    title: "Digital Technologies",
    desc: "Modern digital tools for engineering workflows."
  },
  {
    icon: <FaCogs size={32} />, 
    title: "Advanced Engineering",
    desc: "Simulation, modeling, and optimization."
  },
  {
    icon: <FaIndustry size={32} />, 
    title: "Smart Manufacturing",
    desc: "Automation, robotics, and data analytics."
  },
  {
    icon: <FaChartLine size={32} />, 
    title: "AI & Data Analytics",
    desc: "AI and big data for smarter decisions."
  },
  {
    icon: <FaRobot size={32} />, 
    title: "Robotics & Mechatronics",
    desc: "Intelligent robotic systems for automation."
  },
  {
    icon: <FaNetworkWired size={32} />, 
    title: "Industry 4.0",
    desc: "Connected, data-driven industrial environments."
  }
];

const highlight = {
  title: "Spotlight: Smart Factory Integration",
  desc: "Led the integration of Industry 4.0 technologies in a manufacturing plant, connecting machines, sensors, and analytics for real-time optimization. Result: 20% increase in efficiency and predictive maintenance capabilities.",
  icon: <FaIndustry size={48} color="#fff" />
};

const Slide4 = () => (
  <div className="slide4-split-bg">
    <div className="slide4-split-intro">
      <h2 className="slide4-split-title">Digital Technologies & Advanced Engineering</h2>
      <p className="slide4-split-summary">I combine digital innovation, smart manufacturing, and advanced engineering to deliver next-generation solutions. Explore my core areas and a project highlight below.</p>
    </div>
    <div className="slide4-split-layout">
      <div className="slide4-split-features">
        {features.map((f, idx) => (
          <div key={idx} className="slide4-feature-banner">
            <span className="slide4-feature-icon">{f.icon}</span>
            <div>
              <div className="slide4-feature-title">{f.title}</div>
              <div className="slide4-feature-desc">{f.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="slide4-split-highlight">
        <div className="slide4-highlight-icon">{highlight.icon}</div>
        <div className="slide4-highlight-title">{highlight.title}</div>
        <div className="slide4-highlight-desc">{highlight.desc}</div>
      </div>
    </div>
    <div className="slide4-split-bgshape"></div>
  </div>
);

export default Slide4; 