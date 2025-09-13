"use client";
import Link from "next/link";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
  href?: string;
  className: string;
  onClick?: () => void;
  prefecth?: boolean; // Next.js Link prefetch
  ariaLabel?: string; // Accessibility support
};

function Button({
  label,
  className = "",
  href,
  prefecth = true,
  onClick,
  ariaLabel,
  ...props
}: ButtonProps) {
  const buttonStyles = `${className} 
    transition-all duration-300 border  rounded-lg px-4 py-2 mt-2 cursor-pointer`;

  if (href) {
    return (
      <Link
        href={href}
        className={buttonStyles}
        prefetch={prefecth}
        aria-label={ariaLabel || label}
      >
        {label}
      </Link>
    );
  }
  return (
    <button type="button" className={buttonStyles} onClick={onClick} {...props}>
      {label}
    </button>
  );
}

export default Button;
