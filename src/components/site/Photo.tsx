import { photos, type PhotoKey } from "@/lib/photos";
import { cn } from "@/lib/utils";

interface Props {
  name: PhotoKey;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  alt?: string;
  position?: string;
}

/** Responsive, CLS-safe editorial photo. Parent sets the aspect ratio / size. */
export const Photo = ({ name, className, imgClassName, sizes = "(min-width: 1024px) 50vw, 100vw", priority, alt, position }: Props) => {
  const p = photos[name];
  return (
    <div className={cn("relative overflow-hidden bg-muted", className)}>
      <img
        src={p.lg}
        srcSet={`${p.sm} 800w, ${p.lg} 1600w`}
        sizes={sizes}
        alt={alt ?? p.alt}
        width={p.w}
        height={p.h}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : undefined}
        style={position ? { objectPosition: position } : undefined}
        className={cn("absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out", imgClassName)}
      />
    </div>
  );
};
