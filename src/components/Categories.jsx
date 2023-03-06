
import { categories } from '../data'
const Categories = () => {
    return (
        <div className="w-[95%] mx-auto lg:w-[80%] lg:sticky lg:top-20 lg:h-screen flex-col bg-white items-center p-5 mt-8 rounded-lg justify-center space-y-2">
            <p className="text-2xl font-bold pb-5">Categories</p>
            <div className="flex lg:flex-col overflow-x-scroll items-center justify-center space-x-4 lg:space-y-3">
                {categories.map((category) => (
                    <div className="flex items-center w-full  justify-start space-x-2">
                        <p className="text-lg w-fit lg:w-[90%] mx-auto rounded-lg px-2 hover:bg-gray-200  duration-200 ease-linear cursor-pointer p-2 bg-gray-100 font-semibold">{category.category}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categories