export default function CategoryBadge({ image, label, size = "md" }) {
  const dims = size === "lg" ? "h-28 w-28 sm:h-36 sm:w-36" : "h-16 w-16 sm:h-20 sm:w-20";
  return (
    <div className={`thali-ring flex ${dims} shrink-0 items-center justify-center overflow-hidden`}>
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt={label}
          loading="lazy"
          className="h-[86%] w-[86%] rounded-full object-cover"
        />
      ) : (
        <span className="katori flex h-[78%] w-[78%] items-center justify-center text-center font-display text-maroon">
          <span className="px-1 text-[0.7em] leading-tight">{label}</span>
        </span>
      )}
    </div>
  );
}
