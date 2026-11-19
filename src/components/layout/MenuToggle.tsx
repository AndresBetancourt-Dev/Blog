import { forwardRef } from "react";
import { cn } from "../../utils/format";

interface MenuToggleProps {
  open: boolean;
  onToggle: () => void;
  onMedia: boolean;
  controls: string;
}

const line =
  "absolute right-0 h-[2px] w-5 rounded-full bg-current transition-transform duration-500 ease-out-expo";

/**
 * Labelled menu pill: the word rolls from "Menu" to "Close" while two lines of
 * different length cross into an "X". On hover the short line stretches.
 * Everything animates with CSS transforms only (no layout shifts).
 */
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
        "group relative flex h-11 cursor-pointer items-center gap-3 rounded-full border pl-4 pr-3.5 transition-colors duration-200 md:hidden",
        onMedia
          ? "border-white/25 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
          : "border-line bg-surface/80 text-fg backdrop-blur hover:bg-surface-2",
        open && "border-accent-strong/40",
      )}
    >
      {/* Rolling label */}
      <span
        aria-hidden="true"
        className="relative block h-4 w-[calc(5ch+0.75em)] overflow-hidden text-left font-mono text-[11px] font-medium uppercase leading-4 tracking-[0.14em]"
      >
        <span
          className={cn(
            "block transition-transform duration-500 ease-out-expo",
            open && "-translate-y-1/2",
          )}
        >
          <span className="block h-4">Menu</span>
          <span className="block h-4 text-accent">Close</span>
        </span>
      </span>

      {/* Two lines → X */}
      <span aria-hidden="true" className="relative block h-2.5 w-5">
        <span
          className={cn(
            line,
            "top-0 origin-center",
            open && "translate-y-[4px] rotate-45",
          )}
        />
        {/* Outer element rotates around the centre, inner one stretches from
            the right — separate origins so nothing jumps mid-animation. */}
        <span
          className={cn(
            "absolute bottom-0 right-0 block h-[2px] w-5 transition-transform duration-500 ease-out-expo",
            open && "-translate-y-[4px] -rotate-45",
          )}
        >
          <span
            className={cn(
              "block h-full w-full origin-right rounded-full bg-current transition-transform duration-500 ease-out-expo",
              open ? "scale-x-100" : "scale-x-[0.55] group-hover:scale-x-100",
            )}
          />
        </span>
      </span>
    </button>
  ),
);

MenuToggle.displayName = "MenuToggle";

export default MenuToggle;
