import React from 'react'
import { NewsData } from '../data'
import NewsCard from './NewsCard'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const NewsBox = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-6xl rounded-lg px-5 lg:px-5 mt-8 pt-8 bg-white fit pb-5">
            <p className="text-2xl font-bold p-3 text-white bg-blue-500 w-fit rounded-lg">Latest News</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center mt-5 gap-5">
                {
                    NewsData.map((news) => (
                        <Link to="/single">
                            <NewsCard news={news} />
                        </Link>
                    ))
                }
            </div>
        </motion.div>
    )
}

export default NewsBox