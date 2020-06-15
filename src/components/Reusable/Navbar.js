import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"
//import cart from "../../images/cart.png"
import { FaCartArrowDown } from "react-icons/fa"

class Navbar extends Component {
  state = {
    navbarStatus: false,
    navbarClass: "collapse navbar-collapse",
    menus: [
      {
        id: 1,
        url: "/",
        text: "Home",
      },
      {
        id: 2,
        url: "/about",
        text: "About",
      },
      {
        id: 3,
        url: "/",
        text: "Service",
      },
    ],
  }
  myToggler = () => {
    this.state.navbarStatus
      ? this.setState({
          navbarStatus: false,
          navbarClass: "collapse navbar-collapse",
        })
      : this.setState({
          navbarStatus: true,
          navbarClass: "collapse navbar-collapse show",
        })
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-theme text-white">
        <Link to="/" className="navbar-brand ml-5">
          <img src={logo} alt="logo goes here" width="40px" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.myToggler}
        >
          <span className="">menu</span>
        </button>
        <div className={this.state.navbarClass}>
          <ul className="navbar-nav ml-auto mr-5">
            {this.state.menus.map(menu => {
              return (
                <li key={menu.id} className="nav-item">
                  <Link to={menu.url} className="nav-link text-white">
                    {menu.text}
                  </Link>
                </li>
              )
            })}
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                <FaCartArrowDown />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
