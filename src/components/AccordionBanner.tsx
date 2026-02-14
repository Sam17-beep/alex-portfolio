import { useState } from "react";
import arrowDown from "../assets/arrow-down.svg";

interface AccordionBannerProps {
  title: string;
  className?: string;
  description?: string;
  children?: React.ReactNode;
}

export const AccordionBanner = ({
  title,
  className = "",
  description,
  children,
}: AccordionBannerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={className}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="group flex h-[135px] w-full items-center px-[50px] py-[10px] text-left"
      >
        <h1
          className={`group-hover:font-editorial group-hover:italic ${isOpen ? "font-editorial italic" : ""}`}
        >
          {title}
        </h1>
        <span
          className={`ml-auto items-center gap-[20px] ${isOpen ? "flex" : "hidden group-hover:flex"}`}
        >
          {description && (
            <label className="cursor-pointer">{description}</label>
          )}
          <label className="cursor-pointer">
            {isOpen ? "Fermer" : "Consulter"}
          </label>
          <img
            src={arrowDown}
            alt=""
            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
};
