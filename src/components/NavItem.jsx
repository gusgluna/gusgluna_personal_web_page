import React from "react";

const NavItem = (props) => {
  return (
    <li className="flex items-center justify-center">
      <a
        className="
          flex
          text-black
          hover:text-pr_color
          sm:text-xl
          text-base
          text-center
          h-full
          sm:ml-4
          ml-2
          items-center
          justify-center
          "
        href={props.link}
      >
        {props.text}
      </a>
    </li>
  );
};

export default NavItem;
