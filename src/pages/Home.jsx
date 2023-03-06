import React from 'react'
import Breaking from '../components/Breaking'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsBox from '../components/NewsBox'

const Home = () => {
  return (
    <div className="bg-gray-100 w-full h-screen">
      <Navbar />
      <Breaking/>
      <div className="flex flex-col md:flex-row space-x-3">
      <Categories/>
        <NewsBox />
        </div>
        <Footer/>
    </div>
  )
}

export default Home