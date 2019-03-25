import React, { Component } from 'react';
import Currency from './../layouts/Currency';
import { Provider } from 'react-redux';
import store from './../../store/store';

class Home extends Component {
   render() {
    return (
      <div className="wrapper">
       <h1 className="wrapper-title">Home</h1>
       <ul className="row">
         <li className="row-title">
           <ul className="col">
                <li className="col_img"></li>
                <li className="col_name">Name</li>
                <li className="col_price">Price</li>
                <li className="col_vol">Volume (24h)</li>
           </ul>
         </li>
         <Provider store={store}>
          <Currency />
         </Provider>
       </ul>
      </div>
    );
  }
}

export default Home;
