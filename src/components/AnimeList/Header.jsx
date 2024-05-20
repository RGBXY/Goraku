import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="py-7 px-4 text-2xl flex justify-between items-center text-color-primary md:mx-20">
      <h1 className="font-bold">{title}</h1>
      {linkHref && linkTitle ? (
        <Link href={linkHref} className="md:text-lg text-sm underline hover:text-color-accent transition-all">
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
