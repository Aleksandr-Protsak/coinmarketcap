import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './../../css/flaticon/flaticon.css';

class Sidebar extends Component {
    render() {
      return (
        <div className="sidebarapp">
            <ul className="nav">
                <li className="nav-item"><NavLink to="/" exact activeClassName="active"><i className="flaticon-home"></i></NavLink></li>
                <li className="nav-item"><NavLink to="/list" activeClassName="active"><i className="flaticon-list"></i></NavLink></li>
                <li className="nav-item"><NavLink to="/profile" activeClassName="active"><i className="flaticon-avatar"></i></NavLink></li>
            </ul>
        </div>
      );
    }
}
  
  export default Sidebar;