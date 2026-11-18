import Image from "next/image";
import { getTech, type TechKey } from "../../constants/technologies";
import { cn } from "../../utils/format";

interface TechChipProps {
  tech: TechKey;
  size?: "sm" | "md";
  className?: string;
}

const TechChip = ({ tech, size = "sm", className }: TechChipProps) => {
  const { name, icon, darkArtwork } = getTech(tech);
  const iconSize = size === "md" ? 20 : 16;

  return (
    <span
      className={cn(
        "chip",
        size === "md" && "gap-2 px-3 py-1.5 text-sm",
        className,
      )}
    >
      {icon ? (
        <span
          aria-hidden="true"
          className={cn(
            "flex shrink-0 items-center justify-center",
            darkArtwork && "dark:rounded-[5px] dark:bg-white/95 dark:p-px",
          )}
        >
          <Image
            src={icon}
            alt=""
            width={iconSize}
            height={iconSize}
            className="object-contain"
            style={{ width: iconSize, height: iconSize }}
          />
        </span>
      ) : (
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
        />
      )}
      {name}
    </span>
  );
};

export default TechChip;
