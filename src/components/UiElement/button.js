import React from 'react';
import { Link } from 'react-router-dom';

const Button = props => {
  if (props.href) {
    return (
      <a
        className={`button button--${props.size || 'default'} ${props.inverse &&
            'button--inverse'} ${props.danger && 'button button-danger'}`}
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
        className={`button btn--${props.size || 'default'} ${props.inverse &&
          'button--inverse'} ${props.danger && 'button button-danger'}`}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`btn btn-${props.size || 'default'} ${props.inverse &&
        'btn-outline-primary'} ${props.danger && 'btn-danger'}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
