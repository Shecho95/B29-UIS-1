export function setProducts(state, _products){
    state.products = _products;
}

export function productsError(state, payload){
    state.error = true;
    state.errorMessage = payload;
    state.products = [];
}