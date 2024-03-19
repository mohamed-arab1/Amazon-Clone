import { useState } from 'react';
import { darkLogo } from '../assets/index'
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from 'react-router-dom';

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errEmail, setErrEmail] = useState("");
    const [errPassword, setErrPassword] = useState("");

    const handleEmail = e => {
        setEmail(e.target.value);
        setErrEmail("");
      }

    const handlePassword = e => {
        setPassword(e.target.value);
        setErrPassword("");
    }

    const handleSignin = (e) => {
        e.preventDefault()
        if(!email){
            setErrEmail("Email is required")
        }
        if(!password){
            setErrPassword("Password is required");
        }

        if(email && password){
            console.log(email, password);
            setEmail("");
            setPassword("")
        }
    }

  return (
    <div className='w-full'>
        <div className='w-full bg-gray-100 pb-10'>
            <form className='w-[270px] sm:w-[350px] mx-auto flex flex-col items-center'>
                <Link to='/'>
                    <img className='w-32 py-5 cursor-pointer' src={darkLogo} alt="amazon-logo" />
                </Link>                <div className='w-full border border-zinc-200 p-6'>
                    <h2 className='font-titleFont font-medium mb-4 text-3xl'>Sign in</h2>
                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-sm font-medium'>Email or mobile phone number</p>
                            <input
                                onChange={handleEmail}
                                value={email}
                                className='w-full lowercase py-1 border border-zinc-400 text-base 
                                rounded-sm px-2 outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100'  
                                type="email" 
                            />
                            {
                                errEmail && (
                                <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>
                                    <span className='italic font-titleFont font-extrabold'>!</span> {errEmail}
                                </p>
                                )
                            }
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='text-sm font-medium'>Password</p>
                            <input
                                onChange={handlePassword}
                                value={password}
                                className='w-full py-1 border border-zinc-400 text-base 
                                rounded-sm px-2 outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100'  
                                type="password" 
                            />
                            {
                                errPassword && (
                                <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>
                                    <span className='italic font-titleFont font-extrabold'>!</span> {errPassword}
                                </p>
                                )
                            }
                        </div>
                        <button
                            onClick={handleSignin} 
                            className='w-full py-1.5 text-sm font-normal rounded-sm 
                            bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border
                            border-zinc-400 active:border-yellow-800 active:shadow-amazonInput'
                         >
                            Continue
                         </button>
                    </div>
                    <div className='mt-4'>
                        <p className='text-xs text-black leading-4 px-1'>
                            By Continuing, you agree to Amazon's <span className='text-blue-600'>Conditions of Use {" "}</span> 
                            and <span className='text-blue-600'>Privacy Notice.</span>
                        </p>
                        <p className='text-xs text-gray-600 mt-4 flex items-center cursor-pointer gap-2 group'>
                            <IoMdArrowDropright />
                            <span className='text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1'>Need help?</span>
                        </p>
                    </div>
                </div>
                <div className='w-full text-xs text-gray-600 mt-4 flex items-center'>
                    <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
                    <span className='w-1/3 text-center'>New to Amazon?</span>
                    <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
                </div>
                <Link to='/registration' className='w-full'>
                    <button                           
                        className='w-full py-1.5 text-sm font-normal rounded-sm mt-4 
                        bg-gradient-to-t from-slate-200 to-slate-100 hover:bg-gradient-to-b border
                        border-zinc-400 active:border-yellow-800 active:shadow-amazonInput'
                    >
                        Create your Amazon account
                    </button>
                </Link>
            </form>
        </div>
        <div className='w-full bg-gradient-to-t from-white via-white to-zinc-200 flex flex-col items-center justify-center gap-4 py-10'>
            <div className='flex items-center gap-2 sm:gap-6'>
                <p className='text-blue-600 hover:text-orange-700 cursor-pointer hover:underline underline-offset-1 duration-100'>
                    Conditions of Use
                </p>
                <p className='text-blue-600 hover:text-orange-700 cursor-pointer hover:underline underline-offset-1 duration-100'>
                    Privacy Notice
                </p>
                <p className='text-blue-600 hover:text-orange-700 cursor-pointer hover:underline underline-offset-1 duration-100'>
                    Help 
                </p>
            </div>
            <p className='text-xs text-gray-600'>©1996–2024, ArabCode.com, Inc. or its affiliates</p>
        </div>
    </div>
  )
}

export default Signin