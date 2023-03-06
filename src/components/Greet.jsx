import React from 'react'

const Greet = () => {
  return (
    // component to greet user based on time of day using tailwindcss
    <div className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-center space-y-2">
            <p className="text-4xl font-bold">Good Morning</p>
            <p className="text-2xl font-semibold">Welcome to NewsStand</p>
        </div>
    </div>
  )
}

export default Greet