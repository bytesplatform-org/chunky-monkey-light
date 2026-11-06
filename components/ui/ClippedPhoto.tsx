import Image from "next/image";

/** A photograph behind the stepped pixel crop, with outline and hard print shadow. */
export function ClippedPhoto({
  src,
  alt,
  sizes,
  className = "",
  imageClassName = "",
  shadow = "var(--ink)",
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  imageClassName?: string;
  shadow?: string;
}) {
  return (
    <div className={`print-shadow zoom ${className}`} style={{ "--shadow": shadow } as React.CSSProperties}>
      <div className="crop-steps relative size-full overflow-hidden">
        <Image src={src} alt={alt} fill sizes={sizes} className={`object-cover ${imageClassName}`} />
      </div>
    </div>
  );
}
