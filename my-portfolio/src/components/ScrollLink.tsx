"use client";

import { ReactNode } from "react";

interface ScrollLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
}

const ScrollLink = ({ to, children, className }: ScrollLinkProps) => {
  const scrollToSection = () => {
    const element = document.getElementById(to);
    if (to === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
    }
  };

  return (
    <button onClick={scrollToSection} className={`cursor-pointer ${className}`}>
      {children}
    </button>
  );
};

export default ScrollLink;
