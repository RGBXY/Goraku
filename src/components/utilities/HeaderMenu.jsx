import Link from "next/link";

const HeaderMenu = ({ title }) => {
  return (
    <div>
      <div></div>
      <div className="p-8">
        <h3 className="text-center text-2xl text-color-primary">{title}</h3>
      </div>
    </div>
  );
};

export default HeaderMenu;
