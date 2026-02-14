import { Link } from "@tanstack/react-router";
import { NavRow } from "./NavRow";

const Header = () => {
  return (
    <header className="bg-beige fixed z-10 flex w-full justify-between p-[20px] text-[18px]">
      <Link to="/" className="px-[20px] py-[10px]">
        Alexane Charbonneau
      </Link>
      <NavRow showActiveBorder />
    </header>
  );
};

export default Header;
