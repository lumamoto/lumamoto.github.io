import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
// import { Home } from 'react-feather'
import {
  NavbarElement, 
  NavbarList, 
  // NavbarLogo
} from './style'

const Navbar = ({ siteTitle }) => (
  <nav>
    <div className="container">
      <NavbarElement>
          {/* <NavbarLogo>
            <h3>
              <Link to="/">
                <Home className="align-middle"/>{" "}
                <span className="align-middle">
                {siteTitle} 
                </span>
              </Link>
            </h3>
          </NavbarLogo>  */}
          <div className="main-navigation">
            <NavbarList>
              {/* <li><Link to="/" className="lined-link" activeClassName="active"> Home </Link></li> */}
              <li><Link to="/" className="lined-link" activeClassName="active"> About </Link></li> 
            </NavbarList>
          </div>
      </NavbarElement>
    </div>
  </nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
