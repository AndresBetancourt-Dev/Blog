import Link from "next/link";
import { CaretRight } from "@phosphor-icons/react";

interface BreadcrumbsProps {
  items: { name: string; path: string }[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => (
  <nav aria-label="Breadcrumb">
    <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
      {items.map((item, index) => {
        const last = index === items.length - 1;
        return (
          <li key={item.path} className="flex items-center gap-1.5">
            {last ? (
              <span aria-current="page" className="font-medium text-fg">
                {item.name}
              </span>
            ) : (
              <>
                <Link
                  href={item.path}
                  className="rounded transition-colors hover:text-fg"
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
