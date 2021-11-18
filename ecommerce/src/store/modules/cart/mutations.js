export function addProduct(state, product){
    const productInCart = state.cart.find(item => item.id == product.id);
    if(!productInCart){
        let tempProduct = Object.assign({}, product);
        tempProduct.qty = 1;
        state.cart.push(tempProduct);
    }else{
        productInCart.qty += 1;
    }
}

export function removeProduct(state, product){
    state.cart = state.cart.filter( ({ id }) => id != product.id )
}