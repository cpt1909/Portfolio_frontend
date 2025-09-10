"use client";
import "./globals.css";
import { GradientText } from './components/GradientText';
import { ShinyText } from './components/ShinyText';
import { TiltedScroll } from './components/TiltedScroll';
import { HorizontalScroll } from "./components/HorizontalScroll";
import { useState, useEffect } from "react";

export default function Home() {

  const [educationData, setEducationData] = useState(null);
  const [certificationData, setCertificationData] = useState(null);
  const [projectData, setProjectData] = useState(null);
  const [skillData, setSkillData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData(){
    try{
      const res = await fetch('/api/data');
      const response = await res.json();
      setEducationData(await response.education);
      setProjectData(await response.project);
      setCertificationData(await response.certification);
      setSkillData(await response.skill);
      setLoading(false);
    }catch(error){
      setLoading(true);
    }
  }
  
  useEffect(() => {
    fetchData();
    const mainElement = document.querySelector('.main');
    mainElement.style.display = 'block';
    mainElement.style.animationName = 'fadeIn';
    mainElement.style.animationDuration = '3.5s';
  },[]);
  
  return (
    <div className="container" id="container">

      <div className="main">

        <header>
          <img src="cpt-logo.png" className="logo"></img>
          <p className="connectionStatus">{loading ? "🟡 Connecting ..." : "🟢 Connected"}</p>
        </header>
        
        <div className="titleBar">
          <p>Hi, I'm</p>
          <GradientText
            colors={["#712aff", "#f5f5f5", "#712aff", "#f5f5f5", "#712aff"]}
            animationSpeed={10}
            showBorder={false}
            className="title"
          >
            Thaarakenth
          </GradientText>
          <ShinyText
          className="subtitle"
          speed={3}
          text={'@cpt1909'}
          />
          <TiltedScroll items={[
                {text: 'Home', link: 'container' },
                {text: 'Code Chronicles' , link: 'projects'},
                {text: 'Skills Unlocked', link: 'skills' },
                {text: 'Certified Achievements', link: 'certifications' },
                {text: 'Academic Milestones', link: 'education' },
                {text: 'Connect with Me :)', link: 'contact' },
                {text: 'Home', link: 'container' },
                {text: 'Code Chronicles' , link: 'projects'},
                {text: 'Skills Unlocked', link: 'skills' },
                {text: 'Certified Achievements', link: 'certifications' },
                {text: 'Academic Milestones', link: 'education' },
                {text: 'Connect with Me :)', link: 'contact' },
          ]} />
        </div>
        
        {!loading && (
        <div>
        <section id="projects">
          <p className="heading gradient">CODE CHRONICLES</p>
          <div className="projects">
            {projectData && projectData.map((item, index) => (
                <div className="projectItems" key={index} onClick={() => {window.open(item.url, '_blank');}}>
                  <p className="subheading"><strong>{item.title}</strong></p>
                  <p>{item.description}</p>
                </div>
            ))}
          </div>
        </section>

        <section id="skills">
          <p className="heading gradient">SKILLS UNLOCKED</p>
            <div className="skills">
              {skillData && (
                <HorizontalScroll items={skillData} />
              )}
            </div>
            
        </section>
        <div className="certificationsAndEducation">
          <section id="certifications">
            <p className="heading gradient">CERTIFIED ACHIEVEMENTS</p>
            <div className="certifications">
              <ul>
                {certificationData && certificationData.map((item, index) => (
                  <li key={index}>
                    <p><strong>{item.name}</strong></p>
                    <p>{item.provider}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="education">
            <p className="heading gradient">ACADEMIC MILESTONES</p>
            <div className="education">
              <ul>
                {educationData && educationData.map((item, index) => (
                  <li key={index}>
                    <p><strong>{item.course}</strong> - {item.specialization}</p>
                    <p>{item.institution}{", "}{item.place}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
        </div>
        )}

        <section id="contact">
          <p className="heading gradient">CONNECT WITH ME</p>
          <div className="contact">
            <p>Post your thoughts @ <strong className="email" onClick={() => {
              navigator.clipboard.writeText("cpthaarakenth@gmail.com")
              alert("Email ID copied to clipboard !")
              }}>cpthaarakenth@gmail.com</strong></p>
        
            <div className="socials">
              <img src="linkedin.svg" onClick={() => {window.open("https://linkedin.com/in/thaarakenthcp/", '_blank');}}></img>
              <img src="github.svg" onClick={() => {window.open("https://github.com/cpt1909/", '_blank');}}></img>
            </div>

          </div>
        </section>
        
        <footer>
          <p>2024 © Thaarakenth C P &nbsp; ♡ &nbsp; Crafted with Care and Code</p>
        </footer>
      </div>

    </div>
  );
}