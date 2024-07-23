import { motion, Variants } from "framer-motion";
import { FC } from "react";

import { styles } from "../styles/styles";
import { staggerContainer } from "../motion/motion";

interface StarWrapperProps {
  idName: string;
}

const StarWrapper = (Component: FC, idName: string): FC<StarWrapperProps> =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer(0.1, 0.1) as Variants} // Adjust the staggerChildren and delayChildren as needed
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
