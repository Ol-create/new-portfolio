import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const sectionRef = useRef(null);
  const [nudgeTrigger, setNudgeTrigger] = useState(0);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNudgeTrigger((n) => n + 1);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-center gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className='max-w-xl'>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='inline-flex items-center gap-2 rounded-full border border-[#915EFF]/40 bg-white/5 px-4 py-1.5 mb-4'
          >
            <span className='w-2 h-2 rounded-full bg-[#22C55E] animate-pulse' />
            <span className='text-secondary text-[13px] sm:text-[14px] tracking-wide'>
              Open to freelance &amp; full-time opportunities
            </span>
          </motion.div>

          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Paul</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I architect secure, AI-driven web <br className='sm:block hidden' />
            and mobile applications
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='mt-8 flex flex-wrap items-center gap-4'
          >
            <a
              href='#work'
              className='px-7 py-3 rounded-xl bg-[#915EFF] text-white font-bold text-[15px] shadow-[0_10px_30px_-10px_rgba(145,94,255,0.7)] hover:bg-[#7c3dfb] transition-colors duration-200'
            >
              View My Work
            </a>
            <a
              href='#contact'
              className='px-7 py-3 rounded-xl border border-white/20 text-white font-bold text-[15px] hover:border-[#915EFF] hover:text-[#915EFF] transition-colors duration-200'
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </div>

      <div className='absolute inset-y-0 right-0 w-full sm:w-[65%] lg:w-[58%]'>
        <ComputersCanvas nudgeTrigger={nudgeTrigger} />

        <div className='absolute xs:bottom-10 bottom-6 w-full flex justify-center items-center pointer-events-none'>
          <a href='#about' className='pointer-events-auto'>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary bg-primary/40 backdrop-blur-sm flex justify-center items-start p-2'>
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
