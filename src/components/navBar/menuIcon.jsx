import React from "react";

const MenuIcon = ({ onClick, typeIcon }) => {
  const isTypeIconValid = [
    "iconClose",
    "iconBar",
  ].includes(typeIcon);

  if (!isTypeIconValid) {
    throw new Error("El valor de typeIcon no es válido");
  }

  const renderIcon = () => {
    switch (typeIcon) {
      case "iconClose":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        );
      case "iconBar":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#ffff"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        );
    }
  };

  return (
    <button
      className={`md:hidden  hover:bg-zinc-500 hover:text-white  rounded-full p-1 `}
      onClick={onClick}
    >
      {renderIcon()}
    </button>
  );
};

export default MenuIcon;
