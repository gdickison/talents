/* eslint-disable @next/next/no-img-element */
import Filters from "./Filters"
import { orders } from "../../lib/local-data"

export default function OrdersList () {
  function getTimeToShip (order) {
    let ordered = new Date(order.order_date)
    let shipped = order.shipping_date ? new Date(order.shipping_date) : new Date()
    let shipDelay = shipped.getTime() - ordered.getTime()
    let timeToShip = Math.round(shipDelay / (1000 * 3600 * 24))

    return timeToShip
  }

  function getTimeToDeliver (order) {
    let shipped = new Date(order.shipping_date)
    let delivered = order.delivery_date ? new Date(order.delivery_date) : new Date()
    let deliverDelay = delivered.getTime() - shipped.getTime()
    let timeToDeliver = Math.round(deliverDelay / (1000 * 3600 * 24))

    return timeToDeliver
  }

  return (
    <div className="font-marion text-white bg-t-med-brown">
      <h4 className="text-left px-3">Orders</h4>
      <div className="font-dm-sans">
        <p className="p-3 text-base">Click an order for details.</p>
        <div className="">
          <p className="text-left px-3 text-sm">Filter by Year / Month / Status</p>
          <Filters
            extraFilter={'status'}
          />
        </div>
        <ul role="list" className="p-2 m-1 rounded-md space-y-3">
          <div className="space-y-0">
            <p className="text-xs text-center italic">Item - Order Date</p>
            <p className="text-xs text-center italic">Order Status - Elapsed Time</p>
          </div>
          {orders.map((order, idx) => {
            {return idx < 5 ?
              <li key={idx} className="grid gap-x-2 grid-rows-2 grid-flow-col p-2 rounded-lg border border-t-orange" style={{gridTemplateColumns: '5rem 1fr'}}>
                  <div className="row-span-2 w-20 h-20 justify-self-center self-center flex justify-center items-center">
                    <img alt="" src={order.product_image} className="h-16 w-16 bg-gray-800 " />
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-sm font-semibold leading-5 text-white text-wrap max-w-40">{order.product_name}</p>
                    <p className="text-sm leading-5 text-gray-400">
                      <time dateTime={order.order_date}>{order.order_date}</time>
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="relative h-6 w-6">
                      <img className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-6" src={'/clock.png'} alt="pending" />
                      <img className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-12" src="/blue-check-heavy.png" alt="" />
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-sm w-20 font-bold text-center">
                        {getTimeToShip(order)} Days
                      </span>
                      <img className="h-8 w-24 opacity-45 -my-4" src={'/arrow_right.png'} alt="" />
                    </div>
                    <div className="relative h-6 w-6">
                      <img className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-6 ${order.shipping_date.length !== 0 || order.delivery_date.length !== 0 ? 'opacity-100' : 'opacity-50'}`} src={'/ship.png'} alt="shipped" />
                      <img className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-12 ${order.shipping_date.length !== 0 || order.delivery_date.length !== 0 ? 'opacity-100' : 'opacity-0'}`} src={'/blue-check-heavy.png'} alt="shipped" />
                    </div>
                    <div className="flex flex-col items-center">
                      <span className={`text-sm w-20 font-bold text-center ${order.shipping_date.length !== 0 || order.delivery_date.length !== 0 ? 'block' : 'hidden'}`}>
                        {getTimeToDeliver(order)} Days
                      </span>
                      <img className="h-8 w-24 opacity-45 -my-4" src={'/arrow_right.png'} alt="delivered" />
                    </div>
                    <div className="h-6 w-6 relative">
                      <img className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-6 ${order.delivery_date.length !== 0 ? 'opacity-100' : 'opacity-50'}`} src={'/package.png'} alt="delivered" />
                      <img className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-12 ${order.delivery_date.length !== 0 ? 'opacity-100' : 'opacity-0'}`} src={'/blue-check-heavy.png'} alt="delivered" />
                    </div>
                  </div>
                </li> : null
              }
          })}
          <div className="flex justify-center">
            <button type="button" className="w-1/2 rounded-md px-3 py-2 mx-auto text-sm font-semibold text-white border border-t-gold">Show More</button>
          </div>
        </ul>
      </div>
    </div>
  )
}
