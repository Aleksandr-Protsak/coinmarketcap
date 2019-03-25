import React, { Component } from 'react';
import LogoImg from './../../assets/logo.png'

class Header extends Component {
    render() {
      return (
        <header className="appheader">
          <div className="logo">
            <a href="/">
              <img className="logoimg" alt="CoinMarketCap" src={LogoImg}/>
              <p className="logotext">CoinMarketCap</p>
            </a>
          </div>
        </header>
      );
    }
  }
  
  export default Header;