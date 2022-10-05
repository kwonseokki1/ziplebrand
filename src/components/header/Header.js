import React from "react";
import "./header.scss";
import logo from "../../asset/images/logo.png";
export default function Header() {
  return (
    <header>
      <div className="header-inner">
        <img className="header-logo" src={logo} />
        <ul className="header-menu">
          <li>회사소개</li>
          <li>서비스</li>
          <li>프로덕트</li>
          <li>요청</li>
        </ul>
      </div>
    </header>
  );
}
