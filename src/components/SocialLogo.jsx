import React from "react";

const SocialLogo = (props) => {
  return (
    <li className="transition ease-in-out duration-150 m-1 hover:-translate-y-2">
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <img src={props.imgSrc} alt={props.alt} classname="m-1 h-12 w-12" />
      </a>
    </li>
  );
};

export default SocialLogo;
