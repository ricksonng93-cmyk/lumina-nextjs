import React from "react";

type Variant = "primary" | "secondary" | "ghost" | "edu";
type Size    = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  as?: "button";
}

interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
  as: "a";
  href: string;
}

type Props = ButtonProps | AnchorProps;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.97]";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-white hover:bg-ink/90 focus-visible:ring-ink",
  secondary:
    "border-2 border-ink text-ink hover:bg-ink hover:text-white focus-visible:ring-ink",
  ghost:
    "text-ink hover:bg-ink/5 focus-visible:ring-ink",
  edu:
    "bg-edu text-white hover:bg-edu/90 focus-visible:ring-edu",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({ variant = "primary", size = "md", ...props }: Props) {
  const className = [base, variants[variant], sizes[size], (props as { className?: string }).className]
    .filter(Boolean)
    .join(" ");

  if ((props as AnchorProps).as === "a") {
    const { as: _as, variant: _v, size: _s, ...rest } = props as AnchorProps & { as: "a"; variant: Variant; size: Size };
    return <a {...rest} className={className} />;
  }

  const { as: _as, variant: _v, size: _s, ...rest } = props as ButtonProps & { as?: "button"; variant: Variant; size: Size };
  return <button {...rest} className={className} />;
}
