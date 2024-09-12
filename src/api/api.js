import axios from "axios";

export async function fetchProducts(){
    let products = await axios.get('https://fakestoreapi.com/products');
    return products
}