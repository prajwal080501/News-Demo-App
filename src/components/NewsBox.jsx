import React from 'react'
import { NewsData } from '../data'
import NewsCard from './NewsCard'
const NewsBox = () => {
    return (
        <div className="max-w-6xl rounded-lg px-5 mt-8 pt-8 bg-white fit pb-5">
            <p className="text-2xl font-bold p-3 text-white bg-blue-500 w-fit rounded-lg">Top Headlines</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center p-5 gap-5">
                {
                    NewsData.map((news) => (
                        <NewsCard news={news} />
                    ))
                }
            </div>
        </div>
    )
}

export default NewsBox