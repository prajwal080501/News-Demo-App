import React from 'react'
import { IoShareOutline } from 'react-icons/io5'
import { NewsData } from '../data'
import NewsCard from '../components/NewsCard'

const Single = () => {
    return (
        <div className="bg-gray-100">
            <div className='bg-gray-100  space-x-5 mt-8 w-full p-4 h-screen flex items-center'>
                <div className="w-full lg:w-[70%] rounded-lg p-3 lg:p-5 bg-white h-screen flex flex-col items-center">
                    <div className="w-full flex justify-end cursor-pointer">
                        <IoShareOutline className="text-2xl hover:scale-110 duration-200 text-blue-500" />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-3xl text-gray-500 w-[90%] tracking-wide font-bold">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, eaque.
                        </p>
                        {/* date */}
                        <div className="flex items-center justify-end space-x-4 mt-5">
                            <p className="text-sm text-gray-400">By</p>
                            <p className="text-sm font-medium text-gray-400">John Doe</p>
                            <p className="text-sm text-gray-400">|</p>
                            <p className="text-sm text-gray-400">2 hours ago</p>
                            <p className="bg-green-600 p-2 ml-5 rounded-md text-white font-bold text-sm">
                                5 min read
                            </p>
                        </div>
                        <div className="w-full leading-10 p-5 mt-10 tracking-wider text-lg mx-auto bg-gray-100 rounded-lg mb-10">
                            The move comes after nearly two years since PayPal enabled users to buy and sell crypto on its platform.
                            After rolling out the ability to buy and sell crypto on its platform in October 2020, PayPal is finally allowing users the ability to natively transfer, send and receive digital assets between PayPal and other wallets and exchanges. As of Tuesday, the feature is available to select U.S. users, with the feature expanding to all eligible U.S. users in the coming weeks. The first batch of supported coins consists of Bitcoin
                            BTC $16,704, Ether  ETH $1,217, Bitcoin Cash BCH $100, and Litecoin LTC $74.58.
                            Crypto transfers to recipients outside of PayPal would incur a network fee based on their respective blockchains, but transfers between PayPal users will not incur such fees. To protect users' privacy, the firm generates a new recipient address for each transaction into one's PayPal account. PayPal will also not charge fees for incoming transfers,
                            The company is also working to integrate other forms of cryptocurrency services, such as central bank digital currencies, to boost its digital footprint. It is also exploring the possibility of launching its own stablecoin, dubbed "PayPal Coin." The discovery came after a developer found evidence of such a stablecoin within the source code of the company's iPhone app.
                        </div>
                    </div>
                </div>
                <div className="hidden lg:inline-flex overflow-x-scroll h-fit space-y-2 sticky top-20 w-[30%] flex-col items-center">
                    {
                    //    top 3 news
                        NewsData.slice(0, 3).map((item) => (
                            <NewsCard news={item} single="single"/>
                        ))

                    }
                </div>
            </div>
        </div>
    )
}

export default Single