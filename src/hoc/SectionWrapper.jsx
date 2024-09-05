import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StartWrapper =(Component, idName) => function HOC() {
    return (
        <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-auto relative z-0`}>
            <span className="hash-span" id={idName}>
            &nbsp;
            </span>
        <Component />
        </motion.section>
    );
};

export default StartWrapper;