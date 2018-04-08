import React, { Component } from "react";
import { HEADER_TEXT } from "./../../const";
import "./style.header.css";

class Header extends Component {
  render() {
    return <header className="header_text">{HEADER_TEXT}</header>;
  }
}

export default Header;
