import Link from "next/link";
import InputSearch from "./inputSearch";

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex justify-between md:items-center md:flex-row flex-col p-4 gap-2 md:mx-20">
        <Link href="/" className="font-bold text-2xl">
          Goraku
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
