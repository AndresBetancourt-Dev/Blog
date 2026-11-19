import { MouseEvent } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";
import { Desktop, Moon, Sun, type Icon } from "@phosphor-icons/react";
import { cn } from "../../utils/format";
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
  /** Identifier for this picker instance (desktop / mobile). */
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

  const activeIndex = mounted
    ? OPTIONS.findIndex((option) => option.value === theme)
    : -1;

  return (
    <div
      role="group"
      aria-label="Color theme"
      data-picker={id}
      className={cn(
        "relative inline-grid grid-cols-3 items-center rounded-full border p-1",
        onMedia
          ? "border-white/20 bg-white/10 backdrop-blur-md"
          : "border-line bg-surface-2/70",
        className,
      )}
    >
      {/*
        One indicator that slides with a CSS transform. (A Framer Motion
        `layoutId` indicator re-mounts on every change, which left the mobile
        menu's exit animation waiting forever — the menu then blocked taps.)
      */}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute bottom-1 left-1 top-1 w-[calc((100%-0.5rem)/3)] rounded-full transition-[transform,opacity] duration-300 ease-out-expo",
          onMedia ? "bg-white/20" : "bg-surface shadow-card",
          activeIndex < 0 && "opacity-0",
        )}
        style={{ transform: `translateX(${Math.max(activeIndex, 0) * 100}%)` }}
      />
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
              showLabels && "min-h-[44px] px-3",
              onMedia
                ? active
                  ? "text-white"
                  : "text-white/70 hover:text-white"
                : active
                ? "text-fg"
                : "text-muted hover:text-fg",
            )}
          >
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
