import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaTools, FaCogs, FaRobot, FaMicrochip, FaFlask, FaChartLine, FaDraftingCompass, FaProjectDiagram, FaBalanceScale, FaIndustry, FaStar, FaEdit, FaDownload, FaShareAlt } from "react-icons/fa";

const tools = [
  { icon: <FaDraftingCompass />, label: "SolidWorks" },
  { icon: <FaDraftingCompass />, label: "AutoCAD" },
  { icon: <FaDraftingCompass />, label: "Fusion 360" },
  { icon: <FaMicrochip />, label: "Arduino" },
  { icon: <FaMicrochip />, label: "Raspberry Pi" },
  { icon: <FaCogs />, label: "MATLAB" },
  { icon: <FaCogs />, label: "Python" },
  { icon: <FaCogs />, label: "C Programming" },
  { icon: <FaCogs />, label: "C++" },
];

const skills = [
  { icon: <FaStar />, label: "German Language" },
  { icon: <FaStar />, label: "Time Management" },
  { icon: <FaStar />, label: "Self Management" },
  { icon: <FaStar />, label: "Communication" },
  { icon: <FaStar />, label: "CAD/CAM Operations" },
  { icon: <FaStar />, label: "Mechanical Engineering" },
  { icon: <FaStar />, label: "Problem Solving" },
  { icon: <FaStar />, label: "Technical Documentation" },
  { icon: <FaStar />, label: "Project Coordination" },
];

export const About = () => {
  return (
    <HelmetProvider>
      <div className="about-gray-bg">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About | Yug Kadia</title>
          <meta name="description" content="About Yug Kadia - Mechanical Engineering and Digital Technologies" />
        </Helmet>
        {/* <div className="about-options-row">
          <button className="about-option-btn"><FaEdit style={{marginRight: 6}}/>Edit</button>
          <button className="about-option-btn"><FaDownload style={{marginRight: 6}}/>Download</button>
          <button className="about-option-btn"><FaShareAlt style={{marginRight: 6}}/>Share</button>
        </div> */}
        <section className="about-hero-gray">
          <div className="about-avatar-outer">
            <div className="about-avatar-circle">YK</div>
          </div>
          <h1 className="about-hero-title-white">Yug Kadia</h1>
          <div className="about-hero-tagline-white">Y</div>
        </section>
        <section className="about-profile-float-card">
          <div className="about-profile-info-white">
            <div className="about-profile-degree">Bachelors in Mechanical Engineering and Digital Technologies</div>
            <div className="about-profile-uni">FOM University of Applied Sciences, Germany, Essen</div>
            <div className="about-profile-roles">Mechanical Engineer &nbsp;|&nbsp; CAD/CAM Operator</div>
          </div>
        </section>
        <section className="about-section-grid">
          <h2 className="about-section-header-carousel">Tools & Technologies</h2>
          <div className="about-section-subtitle">Key platforms, software, and systems I use in my engineering and digital work.</div>
          <div className="about-grid-section px-5">
            {tools.map((t, i) => (
              <div className="about-carousel-card" key={i} tabIndex="0" aria-label={t.label}>
                <span className="about-carousel-icon">{t.icon}</span>
                <span className="about-carousel-label">{t.label}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="about-section-grid">
          <h2 className="about-section-header-carousel">Skills</h2>
          <div className="about-section-subtitle">Professional and technical skills that drive my projects and collaborations.</div>
          <div className="about-grid-section px-5">
            {skills.map((s, i) => (
              <div className="about-carousel-card" key={i} tabIndex="0" aria-label={s.label}>
                <span className="about-carousel-icon">{s.icon}</span>
                <span className="about-carousel-label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </HelmetProvider>
  );
};
