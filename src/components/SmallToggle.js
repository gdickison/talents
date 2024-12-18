import React from 'react'

function SmallToggle({label}) {
  return (
    <div className="flex justify-between items-center w-full font-montserrat">
      <label className="switch">
        <input type="checkbox"/>
        <div className="slider"></div>
        <div className="slider-card">
          <div className="slider-card-face slider-card-front"></div>
          <div className="slider-card-face slider-card-back"></div>
        </div>
      </label>
      <p className='text-t-umber text-xl'>{label}</p>
    </div>
  )
}

export default SmallToggle