import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCoinData } from './../../actions/actions';

class Currency extends Component {
  componentDidMount() {
    this.props.fetchData();
  }  
  render() {
    return (
      this.props.coin.map((coins) => (
        <li className="row-val" key={coins.id}>
          <ul className="col">
            <li className="col_img"><img  alt={coins.name} 
                                          src={`https://www.barchart.com/img/crypto-icons/${coins.symbol.toLowerCase()}.png`}/></li>
            <li className="col_name">{coins.name}</li>
            <li className="col_price">{coins.price_usd}</li>
            <li className="col_vol">{coins['24h_volume_usd']}</li>
          </ul>
        </li>
      ))
    )
  }
}
 const mapStateToProps = (state) => {
    return {
      coin: state.coins
    }
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchData: () => dispatch(getCoinData())
    };
  };

export default  connect(mapStateToProps, mapDispatchToProps)(Currency);
