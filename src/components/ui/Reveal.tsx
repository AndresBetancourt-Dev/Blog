import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import { fadeUp, revealViewport } from "../../utils/motion";

interface RevealProps extends HTMLMotionProps<"div"> {
  delay?: number;
  variants?: Variants;
}

/** Reveals its children once, the first time they scroll into view. */
const Reveal = ({ delay = 0, variants, children, ...rest }: RevealProps) => (
  <motion.div
    variants={variants ?? fadeUp(delay)}
    initial="hidden"
    whileInView="show"
    viewport={revealViewport}
    {...rest}
  >
    {children}
  </motion.div>
);

export default Reveal;
