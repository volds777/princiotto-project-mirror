import { useId, useState, type ReactNode } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  label?: string;
  openLabel?: string;
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
}

/**
 * Progressive disclosure: content is always in the rendered HTML (indexable),
 * visually collapsed until the semantic button is pressed.
 */
export const Expandable = ({ label = "Entenda como funciona", openLabel = "Recolher", children, className, tone = "light" }: Props) => {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div className={className}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "group inline-flex items-center gap-2 rounded-full text-[13px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
          tone === "dark" ? "text-accent hover:text-gold-soft focus-visible:ring-offset-primary" : "text-primary hover:text-accent",
        )}
      >
        <span
          className={cn(
            "grid h-6 w-6 place-items-center rounded-full border transition-transform duration-300",
            tone === "dark" ? "border-accent/50" : "border-border group-hover:border-accent",
            open && "rotate-45",
          )}
          aria-hidden
        >
          <Plus size={13} />
        </span>
        {open ? openLabel : label}
      </button>
      <div
        id={id}
        role="region"
        aria-hidden={!open}
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden" {...(!open ? { inert: true } : {})}>
          <div className="pt-4">{children}</div>
        </div>
      </div>
    </div>
  );
};
