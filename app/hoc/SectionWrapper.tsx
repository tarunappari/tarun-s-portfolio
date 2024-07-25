import { motion, Variants } from "framer-motion";
import { FC } from "react";
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
        style={{padding:'0',margin:'0'}}
      >
        <i style={{padding:'0',margin:'0'}} className="hash-span" id={idName}>
          &nbsp;
        </i>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
