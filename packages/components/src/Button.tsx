import React from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "strong" | "borderless";

export type ButtonProps = {
  children: string;
  variant?: ButtonVariant;
  icon?: React.ReactNode;
};

// loading state?
// inactive state?
export const Button = ({
  children,
  variant = "primary",
  icon,
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "agora-border agora-px-5 agora-py-3 agora-text-base agora-font-semibold agora-rounded-lg",
        variant === "primary" &&
          "agora-border-stone-500 agora-text-stone-900 agora-hover:bg-zinc-500 agora-hover:text-white",
        variant === "strong" &&
          "agora-border-stone-900 agora-bg-stone-900 agora-text-white agora-hover:bg-zinc-600",
        variant === "borderless" &&
          "agora-border-transparent agora-text-zinc-500 agora-hover:text-zinc-600"
      )}
    >
      {children}
    </button>
  );
};
