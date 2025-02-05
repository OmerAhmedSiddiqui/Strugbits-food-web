import Heading from '@/app/atoms/Heading/page'
import React from 'react'

const MainBanner = () => {
  return (
    <div className="relative bg-[url('/main-banner.png')] h-[350px] bg-cover bg-center flex justify-center items-center">
      <div className="absolute inset-0 bg-white opacity-75"></div>
      <div className="relative z-10 text-center">
        <Heading 
          heading="Optimize Your Meal" 
          para="Select a meal to add in your week. You can edit, modify, and change your meal plans." 
        />
      </div>
    </div>
  )
}

export default MainBanner;
