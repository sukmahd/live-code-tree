
export const set_user = (data) => (
  {
    type: 'INPUT_NAME',
    payload: {
      username: data.username,
      name: data.name
    }
  }
)

export const update_pohon = (data) => (
  {
    type: 'GROW',
    payload: {
      umur: data.umur,
      fruit: data.fruit,
      keranjang: data.keranjang
    }
  }
)

export const grow = () => {
  return (dispatch, getState) => {
    var newUmur = getState.pohonStore.umur + 1
    var newFruit = 5
    var newKeranjang = getState.pohonStore.keranjang + 5
    
    var payload = {
      umur: newUmur,
      fruit: newFruit,
      keranjang:newKeranjang
    }
    
    dispatch(update_pohon(payload))
  }
}