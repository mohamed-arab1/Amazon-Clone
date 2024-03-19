import { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { MdArrowDropDown, MdOutlineShoppingCart  } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { logo } from '../../assets/index';
import { allItems } from '../../constants';
import HeaderBottom from './HeaderBottom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const products = useSelector(state => state.amazon.products);

  return (
    <div className='w-full sticky top-0 z-50'>
        <div className='w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-2'>
            <Link to='/'>
                <div className='headerHover'>
                    <img className='w-24 mt-2' src={logo} alt="amazon_logo" />
                </div>
            </Link>
            <div className='mdl:flex justify-center gap-2 headerHover hidden '>
                <FaLocationDot className='text-xl' />
                <p className='text-sm text-lightText font-light flex flex-col'>Deliver to{" "}<span className='text-whiteText text-sm font-semibold'>Egypt</span></p>
            </div>
            <div className='h-10 rounded-md hidden lgl:flex flex-grow items-center relative'>
                <span onClick={() => setToggle(!toggle)} className='w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex gap-1 items-center justify-center rounded-tl-md rounded-bl-md'>
                    All <span></span>
                    <MdArrowDropDown />
                </span>
                {
                    toggle && (
                        <div>
                            <ul className=' absolute h-80 w-56 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50'>
                            {
                                allItems.map(item => (
                                    <li onClick={() => setToggle(false)} key={item._id} className='text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200'>
                                        {item.title}
                                    </li>
                                ))
                            }
                            </ul>
                        </div>
                    )
                }
                <input 
                    className='flex-grow text-amazon_blue px-2 outline-none border-none h-full text- base'
                    type="text" 
                />
                <spa className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
                    <IoIosSearch className='text-lg' />
                </spa>
            </div>
            <Link to='/signin'>
                <div className="flex flex-col items-start justify-center headerHover">
                    <p className="text-sm mdl:text-xs text-lightText font-light">Hello, sign in</p>
                    <p className="text-sm font-semibold -mt-1 text-whiteText hidden mdl:flex items-center gap-1">
                        Accounts & Lists{" "}
                        <span>
                        <MdArrowDropDown />
                        </span>
                    </p>
                </div>
            </Link>
            <div className="hidden mdl:flex flex-col items-start justify-center headerHover">
                <p className="text-xs text-lightText font-light">Returns</p>
                <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
            </div>
            <Link to='/cart'>
                <div className="flex items-start justify-center headerHover relative">
                    <MdOutlineShoppingCart className='text-3xl' />
                    <p className="text-xs font-semibold mt-3 text-whiteText">
                        Cart <span className='absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center'>{products.length > 0 ? products.length : 0}</span>
                    </p>
                </div>
            </Link>
        </div>
        <HeaderBottom />
    </div>
  )
}

export default Header