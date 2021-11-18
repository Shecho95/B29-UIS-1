export function totalCost(state){
    return state.cart.reduce( (accumulator, currentProduct) =>{
        return (currentProduct.price * currentProduct.qty) + accumulator
    }, 0)
}