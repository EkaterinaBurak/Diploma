import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export function NavBar() {
  return (
    <div className="nav">
      <NavLink to="/">Главная</NavLink>
      <NavLink
        to={{
          pathname: "/about",
          state: {
            fromLocation: true,
          },
        }}
      >
        О проекте
      </NavLink>
    </div>
  );
}
