export function SectionLabel({
  index,
  children,
  className = "",
}: {
  index: string;
  children: string;
  className?: string;
}) {
  return (
    <p className={`t-pixel flex items-center gap-2 text-sm ${className}`}>
      <span>{index}</span>
      <span aria-hidden="true">/</span>
      <span>{children}</span>
    </p>
  );
}
