import React from 'react'

const Footer = () => {
  return (
    <footer class="text-gray-600 body-font">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
  <div className="h-fit px-3 w-fit flex items-center cursor-pointer">
                <p className="text-3xl font-bold">News<span className="text-blue-500">Stand</span></p>
            </div>
    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© {
        new Date().getFullYear()
    } <span className="font-bold text-gray-400">
        NewsStand
    </span>
    </p>
  </div>
</footer>
  )
}

export default Footer