import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const HINT_OFFSET_X = 20;
const HINT_OFFSET_Y = 20;
const HINT_WIDTH_ESTIMATE = 180;
const HINT_HEIGHT_ESTIMATE = 44;

const Hero = () => {
  const sectionRef = useRef(null);
  const computerWrapperRef = useRef(null);
  const [nudgeTrigger, setNudgeTrigger] = useState(0);
  const [isHoveringComputer, setIsHoveringComputer] = useState(false);
  const [hasDragged, setHasDragged] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleComputerMouseMove = (e) => {
    const rect = computerWrapperRef.current.getBoundingClientRect();
    const x = Math.min(
      Math.max(e.clientX - rect.left, 0),
      rect.width - HINT_WIDTH_ESTIMATE
    );
    const y = Math.min(
      Math.max(e.clientY - rect.top, 0),
      rect.height - HINT_HEIGHT_ESTIMATE
    );
    setCursorPos({ x, y });
  };

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

      <div
        ref={computerWrapperRef}
        className='absolute inset-y-0 right-0 w-full sm:w-[65%] lg:w-[58%]'
        onMouseEnter={() => setIsHoveringComputer(true)}
        onMouseLeave={() => setIsHoveringComputer(false)}
        onMouseMove={handleComputerMouseMove}
      >
        <ComputersCanvas
          nudgeTrigger={nudgeTrigger}
          onFirstInteraction={() => setHasDragged(true)}
        />

        <div className='absolute inset-0 pointer-events-none overflow-hidden'>
          <AnimatePresence>
            {isHoveringComputer && !hasDragged && (
              <motion.div
                style={{
                  left: cursorPos.x + HINT_OFFSET_X,
                  top: cursorPos.y + HINT_OFFSET_Y,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className='absolute inline-flex items-center gap-2 rounded-full border border-white/20 bg-primary/70 backdrop-blur-sm px-4 py-2'
              >
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='text-[#915EFF]'
                >
                  <path d='M8 12l-4 0m0 0l3 -3m-3 3l3 3' />
                  <path d='M16 12l4 0m0 0l-3 -3m3 3l-3 3' />
                  <rect x='9' y='6' width='6' height='12' rx='2' />
                </svg>
                <span className='text-white text-[13px] font-medium whitespace-nowrap'>
                  Drag to rotate in 3D
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

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
