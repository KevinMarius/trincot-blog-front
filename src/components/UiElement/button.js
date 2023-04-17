import React from 'react';
import { Link } from 'react-router-dom';

const Button = props => {
  if (props.href) {
    return (
      <a
        className={`bg-${props.bgColor} ${props.underline} w-${props.width || "[100%]"} hover:bg-${props.bgColorHover} ${props.pointer} ${props.disabled} outline-${props.outlineColor} rounded-md text-md font-sans font-semibold sm:text-lg p-2 sm:p-2`}
        href={props.href}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={`bg-${props.bgColor} w-${props.width || "[100%]"} hover:bg-${props.bgColorHover} ${props.pointer} ${props.disabled} outline-${props.outlineColor} rounded-md text-md font-sans font-semibold sm:text-lg p-2 sm:p-2`}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`${props.bgColor} hover:bg-${props.bgColorHover} w-[100%] sm:w-${props.width || "[100%]"} ${props.pointer} ${props.disabled} outline-${props.outlineColor} rounded-md text-md font-sans font-semibold sm:text-lg my-2 p-2 sm:p-2`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
