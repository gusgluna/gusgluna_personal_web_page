import React from "react";

const Button = (props) => {
  return (
    <>
      <button
        className="
      flex
      justify-center
      border-2
      border-pr_color
      p-1
      w-20
      px-4
      rounded-lg
      text-pr_color
      font-bold
      hover:bg-pr_color
      hover:text-white
      hover:font-bold
      transition
      duration-150
      ease-in-out
      "
        data-tooltip-target="tooltip-click"
        data-tooltip-trigger="click"
        type="button"
      >
        {props.text}
      </button>

      <div
        id="tooltip-click"
        role="tooltip"
        className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-blue-500 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        Coming Soon...
        <div className="tooltip-arrow" data-popper-arrow />
      </div>
    </>
  );
};

export default Button;
