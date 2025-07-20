import React from "react";
import { FaCheckCircle, FaRobot, FaCogs, FaProjectDiagram, FaMicrochip, FaIndustry, FaBalanceScale, FaFlask } from "react-icons/fa";

const features = [
  {
    icon: <FaCheckCircle size={28} color="#fff" />,
    title: "Quality Control / Assurance (QC/QA)",
    desc: "Ensuring products meet the highest standards through rigorous testing and continuous improvement."
  },
  {
    icon: <FaRobot size={28} color="#fff" />,
    title: "Mechatronics",
    desc: "Integrating mechanical, electrical, and computer systems for smart automation."
  },
  {
    icon: <FaBalanceScale size={28} color="#fff" />,
    title: "Kinematics and Dynamics",
    desc: "Analyzing motion and forces in mechanical systems for optimal design."
  },
  {
    icon: <FaRobot size={28} color="#fff" />,
    title: "Robotics",
    desc: "Designing and deploying robots for precision tasks and automation."
  },
  {
    icon: <FaCogs size={28} color="#fff" />,
    title: "Control Systems",
    desc: "Implementing feedback and automation systems for reliable operation."
  },
  {
    icon: <FaMicrochip size={28} color="#fff" />,
    title: "PLC Programming",
    desc: "Programming industrial controllers for automated processes."
  },
  {
    icon: <FaIndustry size={28} color="#fff" />,
    title: "Smart Manufacturing",
    desc: "Leveraging digital tech and automation for efficient production."
  },
  {
    icon: <FaFlask size={28} color="#fff" />,
    title: "Material Science",
    desc: "Selecting and testing materials for durability and performance."
  }
];

const Slide5 = () => (
  <div className="slide5-list-bg">
    <div className="slide5-intro">
      <h2 className="slide5-title">Quality, Mechatronics & Control</h2>
      <p className="slide5-summary">My expertise spans quality assurance, robotics, control systems, and smart manufacturing. Here are the pillars of my engineering approach:</p>
    </div>
    <div className="slide5-feature-list">
      {features.map((f, idx) => (
        <div key={idx} className="slide5-feature-item">
          <span className="slide5-feature-icon">{f.icon}</span>
          <div>
            <div className="slide5-feature-title">{f.title}</div>
            <div className="slide5-feature-desc">{f.desc}</div>
          </div>
        </div>
      ))}
    </div>
    <div className="slide5-highlight-box">
      <div className="slide5-highlight-title">Why These Matter</div>
      <div className="slide5-highlight-desc">Combining quality, automation, and advanced engineering ensures reliable, efficient, and innovative solutions—empowering the factories and products of tomorrow.</div>
    </div>
  </div>
);

export default Slide5; 