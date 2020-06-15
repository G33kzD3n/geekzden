import React from "react";

const Button = ({ text, icon, color }) => {
  return (
    <button
      type="button"
      className="btn btn-outline-secondary w-50 text-justify text-dark"
    >
      <i
        style={{ paddingRight: 5, color: color }}
        className={icon}
        aria-hidden="true"
      ></i>{" "}
      {text}
    </button>
  );
};

export default Button;
