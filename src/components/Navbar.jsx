/* eslint-disable react/jsx-key */
import { Component } from "react";
import "./NavbarStyle.css";
import { MenuItems } from "./MenuItems";

class Navbar extends Component {
    state = {clicked: false};
    handleClick= () =>{
        this.setState({clicked: !this.state.clicked})
    }
  render() {
    return (
      <nav className="navbarItems">
        <h1 className="navrbar-logo">Relax</h1>
        <div className="menu-icons" onClick={this.handleClick}>
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href="/">
                  <i className={item.icon}></i>{item.title}
                </a>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
