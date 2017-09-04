const initialState = {
    username: '',
    keranjang: [],
    name: '',
    umur: 0,
    fruit: []
}

export default (state = initialState, actions) => {
  switch (actions.type) {
    case 'INPUT_NAME':
      return {...state, username: actions.payload.username, name: actions.payload.name }
    case 'GROW': 
      return {...state, umur: actions.payload.umur, fruit: actions.payload.fruit, keranjang: actions.payload.keranjang}
    case 'HARVEST':
      return {...state, keranjang: actions.payload.keranjang}
    default:
      return state
  }
}