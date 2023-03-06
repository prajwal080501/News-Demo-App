import React from 'react'

const Breaking = () => {
  return (
    // breaking news component using tailwindcss
    <div className="flex items-center bg-red-400 text-white p-2 justify-center">
            <p className="text-lg font-bold">Breaking News: </p>
            {" "}
            <span className="text-sm font-semibold"> Stay updated with the latest news</span>
    </div>
  )
}

export default Breaking