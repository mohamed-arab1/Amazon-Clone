import { useSelector } from "react-redux";
import { FaCircleCheck } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { resetCart, deleteItem, incrementQuantity, decrementQuantity } from "../store/amazonSlice";
import { emptyCart } from "../assets/index";
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
const Cart = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.amazon.products);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        let Total = 0;
        products.map((item) => {
            Total += item.price * item.quantity;
            return setTotalPrice(Total.toFixed(2));
        })
    }, [products])
  return (
    <div className='w-full bg-gray-100 p-4'>
        {
            products.length > 0 ? (
            <div className='container mx-auto h-auto flex flex-col xl:flex-row w-full gap-8'>
                <div className='h-full bg-white px-4 w-full xl:w-4/5 '>
                    <div className="font-titleFont flex items-center justify-between border-b-[1px] border-b-gray-400 py-3">
                        <h2 className="text-xl sml:text-3xl font-medium">Shopping Cart</h2>
                        <h4 className="text-lg sml:text-xl font-normal">Subtitle</h4>
                    </div>
                    <div>
                        {
                            products.map(item => (
                                <div key={item.id} className="w-full border-b-gray-400 border-b-[1px] p-4 flex flex-col sml:flex-row items-start sml:items-center gap-6">
                                    <div className="w-1/2 sml:w-1/5">
                                        <img className="w-full h-22 mdl:h-44 object-contain" src={item.image} alt="ProductImg" />
                                    </div>
                                    <div className="w-full sml:w-3/5 flex flex-col gap-2 items-start">
                                        <h2 className="font-semibold text-md mdl:text-lg">{item.title}</h2>
                                        <p className="pr-10 text-sm hidden mdl:inline-flex">{item.description}</p>
                                        <p className="text-base">Unit Price <span className="font-semibold">${item.price}</span></p>
                                        <div className="bg-[#F0F2F2] flex justify-center items-center gap-2 py-1 w-24 drop-shadow-lg rounded-md">
                                            <p>Qty:</p>
                                            {
                                                item.quantity > 1
                                                ? <p onClick={() => dispatch(decrementQuantity({id: item.id}))}  className="bg-gray-200 cursor-pointer px-1 rounded-md hover:bg-gray-400 duration-300">-</p>
                                                : null
                                            }
                                            <p>{item.quantity}</p>
                                            <p onClick={() => dispatch(incrementQuantity({id: item.id}))} className="bg-gray-200 cursor-pointer px-1 rounded-md hover:bg-gray-400 duration-300">+</p>
                                        </div>
                                        <button onClick={() => dispatch(deleteItem({id: item.id}))} className="bg-red-500 px-2 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300">Delete Item</button>
                                    </div>
                                    <div className="w-1/5 flex justify-center items-start">
                                        <p className="text-lg font-semibold">${item.price * item.quantity}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="w-full py-2">
                        <button onClick={() => {
                            dispatch(resetCart())
                            setTotalPrice(0)
                            }} className="bg-red-500 px-10 py-2 rounded-lg text-white mt-2 hover:bg-red-600 active:bg-red-500 duration-300 font-titleFont  tracking-wide">Clear Cart</button>
                    </div>
                </div>
                <div className='w-full xl:w-1/5  h-52 bg-white  flex flex-col justify-center gap-3 p-4'>
                    <div className="flex items-center">
                        <p className="flex items-start gap-2 text-sm">
                            <span className="mt-1">
                                <FaCircleCheck className="bg-white text-green-500 text-xl" />
                            </span>
                            {" "}
                            Your order qualifies for FREE Shipping Choose this option at checkout see details...
                        </p>
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <p className="font-semibold px-10 py-1 ">Total: <span className="text-lg font-bold">${totalPrice}</span></p>
                    </div>
                    <button className="w-full text-base font-medium bg-yellow-500 font-titleFont bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-500 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 rounded-md mt-3 py-1.5">Proceed to Pay</button>
                </div>
            </div>
            ) 
            : (
                <motion.div
                    initial={{y: 70, opacity: 0}}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{delay: 0.5, duration: 0.5}}
                    className="flex flex-col md:flex-row justify-center items-center py-10 gap-4"
                >
                    <div>
                        <img className="w-[270px] md:w-80 rounded-lg p-4 mx-auto" src={emptyCart} alt="empty-cart" />
                    </div>
                    <div className="w-[265px] md:w-96 p-4 bg-white flex flex-col items-center rounded-md shadow-lg">
                        <h1 className="font-titleFont font-bold text-lg sml:text-xl">Your cart feels lonely.</h1>
                        <p className="text-center text-xs sml:text-sm">
                            Your  shopping cart lives to serve.
                            Give it purpose - fill it with 
                            books, electronics, etc, and make it happy.
                        </p>
                        <Link to='/'>
                            <button className="px-4 text-base font-medium bg-yellow-500 font-titleFont bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-500 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 rounded-md mt-3 py-1.5">Continue Shopping</button>
                        </Link>
                    </div>
                </motion.div>
            )
        }
    </div>
  )
}

export default Cart