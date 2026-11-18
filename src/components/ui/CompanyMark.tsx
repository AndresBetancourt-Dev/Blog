import Image, { StaticImageData } from "next/image";
import { cn, readableTextOn } from "../../utils/format";

interface CompanyMarkProps {
  name: string;
  logo?: StaticImageData;
  brandColor: string;
  monogram: string;
  className?: string;
}

/** Company logo in a branded well, falling back to a monogram. */
const CompanyMark = ({
  name,
  logo,
  brandColor,
  monogram,
  className,
}: CompanyMarkProps) => (
  <span
    className={cn(
      "flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-line shadow-card",
      className,
    )}
    style={{ backgroundColor: brandColor }}
  >
    {logo ? (
      <Image
        src={logo}
        alt={`${name} logo`}
        className="h-[62%] w-[62%] object-contain"
        sizes="48px"
      />
    ) : (
      <span
        aria-hidden="true"
        className="font-display text-lg font-semibold"
        style={{ color: readableTextOn(brandColor) }}
      >
        {monogram}
      </span>
    )}
  </span>
);

export default CompanyMark;
