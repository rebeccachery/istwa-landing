// src/components/ui/Button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "solid" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({ children, variant = "solid", ...props }) => {
  const base = "px-6 py-3 rounded-lg font-semibold transition-colors";
  const styles =
    variant === "solid"
      ? "bg-red-600 hover:bg-red-700 text-white"
      : "border border-neutral-700 hover:bg-neutral-800 text-white";

  return (
    <button className={`${base} ${styles}`} {...props}>
      {children}
    </button>
  );
};
