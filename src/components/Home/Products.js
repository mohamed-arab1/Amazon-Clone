import { useLoaderData } from "react-router-dom"
import { FaStar } from "react-icons/fa";
import { MdOutlineApi } from "react-icons/md";
import {  MdOutlineShoppingCart, MdFavorite   } from "react-icons/md";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useDispatch } from 'react-redux'
import { addToCart } from "../../store/amazonSlice";

const Products = () => {
  const data = useLoaderData();
  const products = data.data;
  const  dispatch = useDispatch()
  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-10 px-4">
      {
        products.map( product => (
          <div key={product.id} className="bg-white h-auto border-[1px] border-gray-200 py-8 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 flex flex-col gap-4 relative">
            <span className="text-xs capitalize italic absolute top-2 right-1 text-gray-500">{product.category}</span>
            <div className="w-full h-auto flex justify-center items-center group relative">
              <img className="w-52 h-64 object-contain" src={product.image} alt={product.title} />
              <ul className="w-full h-36 bg-gray-100 absolute bottom-[-170px] group-hover:bottom-0 duration-700 flex flex-col items-end justify-center gap-2 px-2 border-l border-r font-titleFont">
                <li className="productLi">
                  Compare{" "}
                  <span>
                    <MdOutlineApi />
                  </span>
                </li>
                <li className="productLi">
                  Add to Cart{" "}
                  <span>
                    <MdOutlineShoppingCart />
                  </span>
                </li>
                <li className="productLi">
                  View Details{" "}
                  <span>
                    <IoIosArrowDroprightCircle />
                  </span>
                </li>
                <li className="productLi">
                  Add to Wish List{" "}
                  <span>
                    <MdFavorite />
                  </span>
                </li>
              </ul>
            </div>
            <div className="px-4 z-10 bg-white flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h2 className="font-titleFont text-lg text-amazon_blue font-medium -tracking-wide">{product.title.substring(0, 25)}</h2>
                <p className="text-sm text-gray-600 font-semibold">${product.price}</p>
              </div>
              <div>
                <p className="text-sm">{product.description.substring(0, 80)}...</p>
                <div className="text-yellow-500 text-xl mt-3 flex">
                 <FaStar />
                 <FaStar />
                 <FaStar />
                 <FaStar />
                </div>
              </div>
              <button className="w-full text-base font-medium bg-yellow-500 font-titleFont bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-500 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 rounded-md mt-3 py-1.5" onClick={() => dispatch(addToCart({
                id: product.id,
                title: product.title,
                description: product.description,
                image: product.image,
                price: product.price,
                quantity: 1
              }))}>Add to Cart</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Products