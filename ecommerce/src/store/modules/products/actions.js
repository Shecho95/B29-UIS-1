export async function fetchProducts({ state, commit, dispatch, rootState }){
    const data = await fetch('https://fakestoreapi.com/products');
    const products = await data.json();

    commit('setProducts', products);
}