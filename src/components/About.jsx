import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index *0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
           options={{
            max: 45,
            scale: 1,
            speed: 450,
           }}
           className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col transition-transform duration-300 hover:-translate-y-2'
           >
            <img src={icon} alt="web-development"
                 className='w-16 h-16 object-contain' />

                 <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
    </motion.div>

  </Tilt>
);

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
    I'm a Full-Stack Software Engineer with extensive experience
        architecting secure, AI-driven ecosystems across HealthTech and
        Security sectors. I build multi-platform solutions — including
        mobile apps for end-users and complex web dashboards for
        administrators — using Node.js, TypeScript, Python, and React
        Native. I have a proven track record implementing sophisticated
        features such as biometric voice authentication, AI risk-scoring
        engines, and wearable API integrations, with a strategic focus on
        Clean Architecture, robust security (RBAC/JWT), and scalable cloud
        infrastructure (AWS).
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (<ServiceCard key={service.title} index={index} {...service} />))}
    </div>

    <motion.div
      variants={fadeIn("up", "spring", 0.2, 1)}
      className='mt-12'
    >
      <a
        href='/Paul-Oluyemi-Resume.pdf'
        download
        className='inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#915EFF] text-white font-bold text-[14px] shadow-[0_10px_30px_-10px_rgba(145,94,255,0.7)] hover:bg-[#7c3dfb] transition-colors duration-200'
      >
        Download Full Resume
      </a>
    </motion.div>
    </>
  );
};


export default SectionWrapper(About, "about");