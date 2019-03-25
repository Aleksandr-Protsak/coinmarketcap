import axios from 'axios';

function getData (data){
  return {
    type: 'GET_COIN_DATA',
    data
  }
}
export function getCoinData(){
  return function (dispatch){
    return axios
    .get('https://api.coinmarketcap.com/v1/ticker/?limit=7')
    .then(response => {
      dispatch(getData(response.data)) 
    })
    .catch(err => console.log(err))
  }
}

