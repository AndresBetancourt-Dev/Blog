import Link from "next/link";
import { CaretRight } from "@phosphor-icons/react";
import { cn } from "../../utils/format";

interface BreadcrumbsProps {
  items: { name: string; path: string }[];
  /** Light-on-dark styling for use over imagery. */
  onMedia?: boolean;
}

const Breadcrumbs = ({ items, onMedia = false }: BreadcrumbsProps) => (
  <nav aria-label="Breadcrumb">
    <ol
      className={cn(
        "flex flex-wrap items-center gap-1.5 text-sm",
        onMedia ? "text-white/70" : "text-muted",
      )}
    >
      {items.map((item, index) => {
        const last = index === items.length - 1;
        return (
          <li key={item.path} className="flex items-center gap-1.5">
            {last ? (
              <span
                aria-current="page"
                className={cn(
                  "font-medium",
                  onMedia ? "text-white" : "text-fg",
                )}
              >
                {item.name}
              </span>
            ) : (
              <>
                <Link
                  href={item.path}
                  className={cn(
                    "rounded transition-colors",
                    onMedia ? "hover:text-white" : "hover:text-fg",
                  )}
                >
                  {item.name}
                </Link>
                <CaretRight size={12} aria-hidden="true" />
              </>
            )}
          </li>
        );
      })}
    </ol>
  </nav>
);

export default Breadcrumbs;
