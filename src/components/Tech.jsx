import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>What I work with</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Tech Stack.</h2>
      </motion.div>

      <div className='mt-14 flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='flex flex-col items-center gap-2 w-28' key={technology.name}>
            <div className='w-28 h-28'>
              <BallCanvas icon={technology.icon} />
            </div>
            <p className='text-secondary text-[13px] text-center'>{technology.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");