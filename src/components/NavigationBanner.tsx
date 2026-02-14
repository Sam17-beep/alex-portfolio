import { Link } from "@tanstack/react-router";

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
      className={`py-[10px] px-[50px] h-[135px] flex items-center ${className}`}
    >
      <h1>{title}</h1>
    </Link>
  );
};
