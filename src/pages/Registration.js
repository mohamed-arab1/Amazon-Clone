import { useState } from 'react';
import { darkLogo } from '../assets/index'
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from 'react-router-dom';

const Registration = () => {

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const [errUserName, setErrUerName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errRePassword, setErrRePassword] = useState("");

  const handleName = e => {
    setUserName(e.target.value);
    setErrUerName("");
  }
  const handleEmail = e => {
    setEmail(e.target.value);
    setErrEmail("")
  }
  const handlePassword = e => {
    setPassword(e.target.value);
    setErrPassword("")
  }
  const handleRePassword = e => {
    setRePassword(e.target.value);
    setErrRePassword("")
  }

  const emailValidation = email => {
    return String(email).toLowerCase().match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
  }

  const handleRegistration = (e) => {
    e.preventDefault()
    if(!userName){
      setErrUerName("Username is required")
    }
    e.preventDefault()
    if(!email){
      setErrEmail("Email is required")
    } else {
      if(!emailValidation(email)){
        setErrEmail('Please enter a valid Email')
      }
    }
    if(!password){
      setErrPassword("Password is required");
    } else {
      if(password.length < 6) {
        setErrPassword("Password must be at least 6 characters")
      }
    }
    // check password and re-enter
    if(!rePassword){
      setErrRePassword('Please enter your password again');
    }else{
      if(rePassword !== password) {
        setErrRePassword( "Passwords do not match" )
      }
    }

    if(userName && email && emailValidation(email) && password && password.length >= 6 && password === rePassword){
      console.log(userName, password, rePassword, email);
      setUserName("");
      setEmail("");
      setPassword("");
      setRePassword("")
    }
  }

  return (
    <div className='w-full'>
      <div className='w-full pb-10 bg-gray-100'>
        <form className='w-[270px] sm:w-[350px] mx-auto flex flex-col items-center'>
          <Link to='/'>
            <img className='w-32 py-5 cursor-pointer' src={darkLogo} alt="amazon-logo" />
          </Link>
          <div  className='w-full border border-zinc-200 p-6'>
            <h2 className='font-titleFont font-medium mb-4 text-3xl'>Create Account</h2>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium'>Your Name</p>
                <input
                  onChange={handleName}
                  value={userName}
                  className='w-full py-1 border border-zinc-400 text-base 
                    rounded-sm px-2 outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100'  
                  type="email" />
                  {
                    errUserName && (
                      <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>
                        <span className='italic font-titleFont font-extrabold'>!</span> {errUserName}
                      </p>
                    )
                  }
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium'>Email or mobile phone number</p>
                <input
                  onChange={handleEmail}
                  value={email}
                  className='w-full lowercase py-1 border border-zinc-400 text-base 
                rounded-sm px-2 outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100'  
                type="email" />
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
                type="password" />
                  {
                    errPassword && (
                      <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>
                        <span className='italic font-titleFont font-extrabold'>!</span> {errPassword}
                      </p>
                    )
                  }
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-medium'>Re-enter password</p>
                <input
                  onChange={handleRePassword}
                  value={rePassword}
                  className='w-full py-1 border border-zinc-400 text-base 
                rounded-sm px-2 outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100'  
                type="password" />
                {
                    errRePassword && (
                      <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>
                        <span className='italic font-titleFont font-extrabold'>!</span> {errRePassword} 
                      </p>
                    )
                  }
                <p className='text-xs text-gray-500'>Password must be at least 6 characters.</p>
              </div>
              <button
                onClick={handleRegistration} 
                className='w-full py-1.5 text-sm font-normal rounded-sm 
                bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border
               border-zinc-400 active:border-yellow-800 active:shadow-amazonInput'
              >
                Continue
              </button>
            </div>
            <p className='text-xs text-black leading-4 px-1 mt-2'>
              By Continuing, you agree to Amazon's <span className='text-blue-600'>Conditions of Use {" "}</span> 
              and <span className='text-blue-600'>Privacy Notice.</span>
            </p>
            <div>
                <p className='flex text-black text-xs'>
                  Already have an account?
                  <Link to='/signin'>
                    <span className='flex items-center ml-1 text-blue-600 hover:text-orange-700 hover:underline underline-offset-1 cursor-pointer'>
                      Sign in <IoMdArrowDropright />
                    </span>
                  </Link>
                </p>
              <p className='text-black text-xs mt-2 flex'>Buying for work? <span className='flex items-center ml-1 text-blue-600 hover:text-orange-700 hover:underline underline-offset-1'>Create a free business account</span></p>
            </div>
          </div>
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

export default Registration;