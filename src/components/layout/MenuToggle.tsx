import { forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/format";
import { spring } from "../../utils/motion";

interface MenuToggleProps {
  open: boolean;
  onToggle: () => void;
  onMedia: boolean;
  controls: string;
}

/** Hamburger button whose lines morph into an "X". */
const MenuToggle = forwardRef<HTMLButtonElement, MenuToggleProps>(
  ({ open, onToggle, onMedia, controls }, ref) => (
    <button
      ref={ref}
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      aria-controls={controls}
      aria-label={open ? "Close menu" : "Open menu"}
      className={cn(
        "relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border transition-colors duration-200 md:hidden",
        onMedia
          ? "border-white/25 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
          : "border-line bg-surface/80 text-fg backdrop-blur hover:bg-surface-2",
      )}
    >
      <span aria-hidden="true" className="relative block h-3.5 w-5">
        <motion.span
          className="absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current"
          animate={open ? { y: 6, rotate: 45 } : { y: 0, rotate: 0 }}
          transition={spring}
        />
        <motion.span
          className="absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-current"
          animate={
            open ? { opacity: 0, scaleX: 0.4 } : { opacity: 1, scaleX: 1 }
          }
          transition={{ duration: 0.15 }}
        />
        <motion.span
          className="absolute left-0 top-3 h-0.5 w-5 rounded-full bg-current"
          animate={open ? { y: -6, rotate: -45 } : { y: 0, rotate: 0 }}
          transition={spring}
        />
      </span>
    </button>
  ),
);

MenuToggle.displayName = "MenuToggle";

export default MenuToggle;
