import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { NavbarElement, NavbarList } from "./style";

const Navbar = () => (
  <nav>
    <div className="container">
      <NavbarElement>
        <div className="main-navigation">
          <NavbarList>
            <li>
              <Link to="/" className="lined-link" activeClassName="active">
                About
              </Link>
            </li>
          </NavbarList>
        </div>
      </NavbarElement>
    </div>
  </nav>
);

export default Navbar;
