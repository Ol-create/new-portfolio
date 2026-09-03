import React, { useEffect, useState } from "react";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className='relative z-10 w-full border-t border-white/10 px-6 sm:px-16 py-8'>
      <div className='max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4'>
        <div className='text-center sm:text-left'>
          <p className='text-secondary text-[14px]'>
            © {new Date().getFullYear()} Paul Oluyemi. Built with React,
            Three.js &amp; Tailwind CSS.
          </p>
          <p className='text-secondary/60 text-[11px] mt-1'>
            3D models: "Gaming Desktop PC" by Yolala1232 and "Stylized planet"
            by cmzw (Sketchfab, CC BY 4.0).
          </p>
        </div>

        <div className='flex items-center gap-6'>
          <a
            href='mailto:oluola96@gmail.com'
            className='text-secondary hover:text-white text-[14px] transition-colors duration-200'
          >
            oluola96@gmail.com
          </a>

          {showTop && (
            <button
              type='button'
              aria-label='Back to top'
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className='w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#915EFF] hover:text-[#915EFF] transition-colors duration-200'
            >
              ↑
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
