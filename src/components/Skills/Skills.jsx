import React from 'react';
import { motion,useInView } from "motion/react"
import './skills.css';
import firebaseLogo from '../../assets/logos/firebase.svg';
import flutterLogo from '../../assets/logos/flutter_logo.png';

import { FaBeer } from "react-icons/fa";


import { RiFlutterFill } from "react-icons/ri";
import { DiJqueryLogo } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { SiCsswizardry } from "react-icons/si";

import { FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";


import { SiMysql } from "react-icons/si";
// import { BiLogoPostgresql } from "@react-icons/all-files/bi/BiLogoPostgresql";
import { SiPostgresql } from "react-icons/si";

import { SiFirebase } from "react-icons/si";
import { SiSupabase } from "react-icons/si";




    // { icon: <img src={flutterLogo} width={150} height={70} />, name: "Flutter", level: "Intermediate" },

const skillList = {
  Frontend: [
    { icon: <RiFlutterFill size={70} color = "#000"/>, name: "Flutter", description: "Mobile App Development" },
    { icon: <FaHtml5 size={70} color = "#000"/>, name: "HTML", description: "Web" },
    { icon: <SiCsswizardry size={70} color = "#000"/>, name: "CSS", description: "Intermediate" },
    { icon: <DiJqueryLogo size={70} color = "#000"/>, name: "jQuery", description: "Intermediate" },
  ],
  Backend: [
    { icon: <FaPhp size={70} color = "#000"/>, name: "PHP", description: "Intermediate" },
    { icon: <IoLogoJavascript size={70} color = "#000"/>, name: "JavaScript", description: "Intermediate" }
  ],
  Database: [
    { icon: <SiMysql size={70} color = "#000"/>, name: "MySQL", description: "Intermediate" },
    { icon: <SiPostgresql size={70} color = "#000"/>, name: "PostgreSQL", description: "Intermediate" }
  ],
  Integrations: [
    { icon: <SiFirebase size={70} color = "#000"/>, name: "Firebase", description: "Intermediate" },
    { icon: <SiSupabase size={70} color = "#000"/>, name: "Supabase", description: "Intermediate" }
  ]
};

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
        {Object.entries(skillList).map(([category, skills], index) => (
          <div className="skills__container container grid" key={`${category}${index}`}>
            <h3 className="skills__title">{category}</h3>
            <motion.div 
              initial={{ y: 100 , opacity: 0}} 
              whileInView={{ y:0, opacity: 1 }} 
              viewport={{ amount: 0.6, once: true }} 
              transition={{
                duration: 0.8,
                delay: 0.3
              }}>
              <div className="skills__list grid">

                {
                  skills.map((skill, index) => (
                    <div className="skills__data" key={`${skill.name}${index}`}>
                      {skill.icon}
                      <div>
                        <h3 className="skills__name">{skill.name}</h3>
                        <span className="skills__level">{skill.description}</span>
                      </div>
                    </div>
                  ))
                }
              </div>
            </motion.div>
          </div>
        ))
        }
    </section>
  );
};

export default Skills;