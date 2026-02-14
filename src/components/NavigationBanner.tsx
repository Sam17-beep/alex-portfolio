import { Link } from "@tanstack/react-router";
import arrow from "../assets/arrow.svg";

interface NavigationBannerProps {
  title: string;
  redirectPath: string;
  className?: string;
}

export const NavigationBanner = ({
  title,
  redirectPath,
  className = "",
}: NavigationBannerProps) => {
  return (
    <Link
      to={redirectPath}
      className={`group flex h-[135px] items-center border-b-4 border-transparent px-[50px] py-[10px] hover:border-charcoal ${className}`}
    >
      <h1 className="group-hover:font-editorial group-hover:italic">
        {title}
      </h1>
      <span className="ml-auto hidden items-center gap-[20px] group-hover:flex">
        <label>Consulter</label>
        <img src={arrow} alt="" />
      </span>
    </Link>
  );
};
