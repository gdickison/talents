import React from 'react'

function SmallToggle({label}) {
  return (
    <div className="flex justify-between w-[375px] font-dm-sans">
      <label className="switch">
        <input type="checkbox"/>
        <div className="slider"></div>
        <div className="slider-card">
          <div className="slider-card-face slider-card-front"></div>
          <div className="slider-card-face slider-card-back"></div>
        </div>
      </label>
      <p>{label}</p>
    </div>
  )
}

export default SmallToggle