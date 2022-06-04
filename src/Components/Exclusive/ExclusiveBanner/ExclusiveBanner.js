import React from 'react'
import './ExclusiveBanner.css'

const ExclusiveBanner = () => {
  return (
    <div className="exclusive-Banner">
    <p className="exclusive-headline">
      <span className='part-1'> Royal & Exclusive </span>
      <br />
     <span className='part-2'> Collections</span>
    </p>
    <div className="text-end me-5 exclusive-img">
      <img
        src="https://www.oshary.com/wp-content/uploads/2022/05/Untitled-1-removebg-preview.png"
        alt=""
      />
    </div>
  </div>
  )
}

export default ExclusiveBanner