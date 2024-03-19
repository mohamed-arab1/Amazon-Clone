import React from 'react'
import Banner from '../components/Home/Banner'
import Products from '../components/Home/Products'

const Home = () => {
  return (
    <>
        <Banner />
        <div className='w-full -mt-10 xl:-mt-32 py-6'>
            <Products />
        </div>
    </>
  )
}

export default Home