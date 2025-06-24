import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const Button = ({ text, className, link, clickHandler }) => {
  const isLink = link != null ? true : false;
  const isCtaBtn = clickHandler != null ? true : false;
  return (
    <>
      {isLink ? (
        <Link to={link} className={`cta-btn ${className}`}>
          {text}
        </Link>
      ) : (
        isCtaBtn && (
          <button className={`cta-btn ${className}`} onClick={clickHandler}>
            {text}
          </button>
        )
      )}
    </>
  );
};

export default Button;
