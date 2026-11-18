import { MouseEvent } from "react";
import { flushSync } from "react-dom";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Desktop, Moon, Sun, type Icon } from "@phosphor-icons/react";
import { cn } from "../../utils/format";
import { spring } from "../../utils/motion";
import { useMounted } from "./useMounted";

type ThemeValue = "light" | "dark" | "system";

const OPTIONS: { value: ThemeValue; label: string; icon: Icon }[] = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Desktop },
];

const resolve = (value: ThemeValue): "light" | "dark" =>
  value === "system"
    ? window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
    : value;

interface ThemePickerProps {
  /** Unique id so multiple pickers don't share the animated indicator. */
  id: string;
  /** Show text labels next to the icons. */
  showLabels?: boolean;
  /** Render with light-on-dark colors for use over hero imagery. */
  onMedia?: boolean;
  className?: string;
}

const ThemePicker = ({
  id,
  showLabels = false,
  onMedia = false,
  className,
}: ThemePickerProps) => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  const changeTheme = (
    next: ThemeValue,
    event: MouseEvent<HTMLButtonElement>,
  ) => {
    if (next === theme) return;

    const target = resolve(next);
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // No visual change (e.g. dark → system while the OS is dark): just store it.
    if (
      target === resolvedTheme ||
      reduceMotion ||
      typeof document.startViewTransition !== "function"
    ) {
      setTheme(next);
      return;
    }

    // Circular reveal that grows from the button the user pressed.
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX || rect.left + rect.width / 2;
    const y = event.clientY || rect.top + rect.height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const transition = document.startViewTransition(() => {
      flushSync(() => setTheme(next));
      const root = document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(target);
      root.style.colorScheme = target;
    });

    transition.ready
      .then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${radius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 520,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            pseudoElement: "::view-transition-new(root)",
          },
        );
      })
      .catch(() => undefined);
  };

  return (
    <div
      role="group"
      aria-label="Color theme"
      className={cn(
        "relative inline-flex items-center gap-0.5 rounded-full border p-1",
        onMedia
          ? "border-white/20 bg-white/10 backdrop-blur-md"
          : "border-line bg-surface-2/70",
        className,
      )}
    >
      {OPTIONS.map(({ value, label, icon: IconComponent }) => {
        const active = mounted && theme === value;
        return (
          <button
            key={value}
            type="button"
            aria-pressed={active}
            aria-label={showLabels ? undefined : `${label} theme`}
            title={`${label} theme`}
            onClick={(event) => changeTheme(value, event)}
            className={cn(
              "relative flex min-h-[36px] min-w-[36px] cursor-pointer items-center justify-center gap-1.5 rounded-full px-2.5 text-sm font-medium transition-colors duration-200",
              showLabels && "min-h-[44px] flex-1 px-3",
              onMedia
                ? active
                  ? "text-white"
                  : "text-white/70 hover:text-white"
                : active
                ? "text-fg"
                : "text-muted hover:text-fg",
            )}
          >
            {active && (
              <motion.span
                layoutId={`theme-indicator-${id}`}
                transition={spring}
                aria-hidden="true"
                className={cn(
                  "absolute inset-0 rounded-full",
                  onMedia ? "bg-white/20" : "bg-surface shadow-card",
                )}
              />
            )}
            <IconComponent
              size={18}
              weight={active ? "fill" : "regular"}
              aria-hidden="true"
              className="relative"
            />
            {showLabels && <span className="relative">{label}</span>}
          </button>
        );
      })}
    </div>
  );
};

export default ThemePicker;
