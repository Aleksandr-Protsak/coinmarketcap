export default (state = [], action) => {
    switch (action.type) {
          case 'GET_COIN_DATA':
               return action.data
          default:
               return state
     }
}