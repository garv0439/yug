import React from "react";
import { FaMicrochip, FaNetworkWired, FaBrain, FaPython, FaRobot, FaChartBar, FaCogs } from "react-icons/fa";

const steps = [
  {
    icon: <FaNetworkWired size={44} color="#5cccc9" />, 
    title: "Internet of Things (IoT)",
    desc: "Connecting devices and systems for smart automation and real-time data exchange.",
    example: "Example: Smart home automation, industrial IoT sensors."
  },
  {
    icon: <FaBrain size={44} color="#f7b731" />,
    title: "Artificial Intelligence (AI) in Engineering",
    desc: "Applying AI to optimize engineering processes, predictive maintenance, and intelligent systems.",
    example: "Example: Predictive maintenance in factories, AI-driven design."
  },
  {
    icon: <FaPython size={44} color="#4b8bbe" />,
    title: "Machine Learning & Python Programming",
    desc: "Developing intelligent algorithms and automation scripts for engineering solutions.",
    example: "Example: Automated quality inspection using ML."
  },
  {
    icon: <FaMicrochip size={44} color="#a55eea" />,
    title: "Embedded Systems (Arduino / Raspberry Pi)",
    desc: "Designing and programming microcontroller-based systems for automation and control.",
    example: "Example: Custom robotics, IoT prototypes."
  },
  {
    icon: <FaCogs size={44} color="#fd9644" />,
    title: "Automation & Control",
    desc: "Implementing smart sensors, PLCs, and control systems for Industry 4.0 environments.",
    example: "Example: Automated assembly lines, smart factories."
  },
  {
    icon: <FaChartBar size={44} color="#26de81" />,
    title: "Data Analytics & HMI",
    desc: "Analyzing engineering data and building user-friendly interfaces for monitoring and control.",
    example: "Example: Real-time dashboards for process monitoring."
  },
  {
    icon: <FaRobot size={44} color="#eb3b5a" />,
    title: "Smart Robotics & Industry 4.0",
    desc: "Integrating robotics, automation, and digital technologies for next-generation manufacturing.",
    example: "Example: Collaborative robots in manufacturing."
  }
];

const Slide3 = () => (
  <div className="slide3-grid-bg">
    <div className="slide3-intro">
      <h2 className="slide3-title">Embedded Systems & IoT</h2>
      <p className="slide3-summary">From smart sensors to AI-driven automation, I build and integrate embedded systems for modern engineering. Explore my key skills and real-world applications below.</p>
    </div>
    <div className="slide3-card-grid">
      {steps.map((step, idx) => (
        <div key={idx} className="slide3-card">
          <div className="slide3-card-icon">{step.icon}</div>
          <h4 className="slide3-card-title">{step.title}</h4>
          <p className="slide3-card-desc">{step.desc}</p>
          <p className="slide3-card-example">{step.example}</p>
        </div>
      ))}
    </div>
    <div className="slide3-bg-shape"></div>
  </div>
);

export default Slide3; 