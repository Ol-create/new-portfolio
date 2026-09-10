import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { TechCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>What I work with</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Tech Stack.</h2>
      </motion.div>

      <div className='mt-14'>
        <TechCanvas />
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");