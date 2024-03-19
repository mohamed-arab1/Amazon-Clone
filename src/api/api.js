import axios from "axios";

export async function fetchProducts(){
    let products = await axios.get('https://fakestoreapiserver.vercel.app/amazonproducts');
    return products
}