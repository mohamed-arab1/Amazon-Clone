import { useEffect, useRef, useState } from 'react'
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"

import SideBarHeader from './SideBarHeader';
const HeaderBottom = () => {
  const ref = useRef();
  const [sidebar,setSidebar]= useState(false)
  useEffect(()=>{
    document.body.addEventListener('click', e => {
      if(e.target.contains(ref.current)){
        setSidebar(false)
      }
    })
  },[ref,sidebar])
  return (
    <div className='w-full px-4 h-[36px] bg-amazon_light text-white flex items-center'>
        <ul className="flex items-center gap-2 text-sm tracking-wide">
        <li className="headerHover flex items-center gap-1">
          <IoMdMenu className='text-2xl' onClick={() => setSidebar(!sidebar)} />
          All
        </li>
        <li className="headerHover hidden md:inline-flex">Today's Deals</li>
        <li className="headerHover hidden md:inline-flex">Customer Service</li>
        <li className="headerHover hidden md:inline-flex">Gift Cards</li>
        <li className="headerHover hidden md:inline-flex">Registry</li>
        <li className="headerHover hidden md:inline-flex">Sell</li>
      </ul>
      {sidebar && (
        <div className="w-full h-full xl:h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50 z-50">
          <div className="w-full h-full relative">
            <motion.div ref={ref} initial={{x: -500, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.5}} className="w-[70%] md:w-[350px] h-full bg-white border border-black overflow-auto xl:overflow-hidden" >
              <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
                
                <h3 className="font-titleFont font-bold text-lg tracking-wide">
                  Hello, Sign In
                </h3>
              </div>
              <SideBarHeader
                title="Digital Content & Devices"
                one="Amazon Music"
                two="Kindle E-readers & Books"
                three="Amazon Appstore"
              />
              <SideBarHeader
                title="Shop By Department"
                one="Electronics"
                two="Computers"
                three="Smart Home"
              />
              <SideBarHeader
                title="Programs & Features"
                one="Gift Cards"
                two="Amazon live"
                three="International Shopping"
              />
              <SideBarHeader
                title="Help & Settings"
                one="Your Account"
                two="Customer Service"
                three="Contact us"
              />
              <span onClick={()=>setSidebar(false)} className="cursor-pointer absolute top-0 left-[72%] md:left-[360px] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300">
                <IoMdClose className='text-3xl' />
              </span>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HeaderBottom