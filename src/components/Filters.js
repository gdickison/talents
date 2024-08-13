import React from 'react'

function Filters({ extraFilter }) {
  return (
    <div className="flex gap-4 px-3 py-3 font-dm-sans">
      <select className="w-24 h-6 text-sm bg-t-tan text-black rounded-full px-2 outline-none appearance-none bg-[url('/arrow_down.png')] bg-no-repeat bg-[length:1rem]" style={{backgroundPosition: 'right 0.25rem top 50%'}} name="month" id="month">
        <option value="january">January</option>
        <option value="february">February</option>
        <option value="march">March</option>
        <option value="april">April</option>
        <option value="may">May</option>
        <option value="june">June</option>
        <option value="july">July</option>
        <option value="august">August</option>
        <option value="september">September</option>
        <option value="october">October</option>
        <option value="november">November</option>
        <option value="december">December</option>
      </select>
      <select className="w-24 h-6 text-sm bg-t-tan text-black rounded-full px-2 outline-none appearance-none bg-[url('/arrow_down.png')] bg-no-repeat bg-[length:1rem]" style={{backgroundPosition: 'right 0.25rem top 50%'}} name="year" id="year">
        <option value="2024">2024</option>
        <option value="2025">2025</option>
      </select>
      {extraFilter && extraFilter === 'status' &&
        (
          <select className="w-24 h-6 text-sm bg-t-tan text-black rounded-full px-2 outline-none appearance-none bg-[url('/arrow_down.png')] bg-no-repeat bg-[length:1rem]" style={{backgroundPosition: 'right 0.25rem top 50%'}} name="year" id="year">
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
          </select>
        )
      }
      {extraFilter && extraFilter === 'product' &&
        (
          <select className="w-24 h-6 text-sm bg-t-tan text-black rounded-full px-2 outline-none appearance-none bg-[url('/arrow_down.png')] bg-no-repeat bg-[length:1rem]" style={{backgroundPosition: 'right 0.25rem top 50%'}} name="year" id="year">
            <option value="all">All</option>
            <option value="hammers-01">Hammers</option>
            <option value="hammers-02">Hammers</option>
            <option value="hammers-03">Hammers</option>
          </select>
        )
      }
    </div>
  )
}

export default Filters