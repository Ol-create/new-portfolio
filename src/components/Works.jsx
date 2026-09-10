import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_links,
  demo_on_request,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='group bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full overflow-hidden'
      >
        <div className='relative w-full h-[230px] overflow-hidden rounded-2xl'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105'
          />

          {source_code_link && source_code_link !== "#" && (
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                title='View source code'
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          )}
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        {(!source_code_link || source_code_link === "#") && (
          <p className='mt-3 text-[12px] text-secondary italic'>
            Private repository
          </p>
        )}

        {live_links && live_links.length > 0 && (
          <div className='mt-3 flex flex-wrap gap-2'>
            {live_links.map((live) => (
              <button
                key={`${name}-${live.label}`}
                onClick={() => window.open(live.link, "_blank")}
                className='px-3 py-1 rounded-full text-[12px] text-white bg-[#915EFF]/20 border border-[#915EFF] hover:bg-[#915EFF]/40 transition-colors'
              >
                {live.label} ↗
              </button>
            ))}
          </div>
        )}

        {demo_on_request && (
          <p className='mt-3 text-[12px] text-secondary italic'>
            Not yet deployed — available for a local demo on request.
          </p>
        )}
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following projects showcase my skills and experience through
          real-world examples of my work, spanning HealthTech, AI security,
          and publishing platforms. Each reflects my ability to solve complex
          problems, work across the stack, and ship production-ready systems.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");