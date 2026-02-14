import { Link } from "@tanstack/react-router";

export const NavRow = ({
  showActiveBorder = false,
}: {
  showActiveBorder?: boolean;
}) => {
  return (
    <div className="flex gap-[20px]">
      <Link
        to="/projets"
        className="px-[20px] py-[10px]"
        activeProps={
          showActiveBorder ? { className: "border-b border-pomme" } : undefined
        }
      >
        Projets
      </Link>
      <Link
        to="/curriculum"
        className="px-[20px] py-[10px]"
        activeProps={
          showActiveBorder ? { className: "border-b border-fleur" } : undefined
        }
      >
        Curriculum
      </Link>
      <Link
        to="/contact"
        className="px-[20px] py-[10px]"
        activeProps={
          showActiveBorder ? { className: "border-b border-indigo" } : undefined
        }
      >
        Contact
      </Link>
    </div>
  );
};
