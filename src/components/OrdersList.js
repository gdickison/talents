/* eslint-disable @next/next/no-img-element */
import Filters from "./Filters"
const orders = [
  {
    item: 'Premium Hammer',
    status: 'Delivered',
    imageUrl: '/hammer.png',
    orderDate: '2024-07-25',
    shippedDate: '2024-07-28',
    deliveredDate: '2024-07-30',
  },
  {
    item: 'Premium Grand Cool Hammer',
    status: 'Delivered',
    imageUrl: '/hammer.png',
    orderDate: '2024-08-01',
    shippedDate: '2024-08-05',
    deliveredDate: '2024-08-10',
  },
  {
    item: 'Premium Hammer',
    status: 'Delivered',
    imageUrl: '/hammer.png',
    orderDate: '2024-08-02',
    shippedDate: '2024-08-02',
    deliveredDate: '2024-08-06',
  },
  {
    item: 'Premium Hammer',
    status: 'Shipped',
    imageUrl: '/hammer.png',
    orderDate: '2024-08-07',
    shippedDate: '2024-08-10',
    deliveredDate: null,
  },
  {
    item: 'Premium Hammer',
    status: 'Pending',
    imageUrl: '/hammer.png',
    orderDate: '2024-08-09',
    shippedDate: null,
    deliveredDate: null,
  },
  {
    item: 'Premium Hammer',
    status: 'Pending',
    imageUrl: '/hammer.png',
    orderDate: '2024-08-10',
    shippedDate: null,
    deliveredDate: null,
  },
]

export default function OrdersList () {
  function getTimeToShip (order) {
    let ordered = new Date(order.orderDate)
    let shipped = order.shippedDate ? new Date(order.shippedDate) : new Date()
    let shipDelay = shipped.getTime() - ordered.getTime()
    let timeToShip = Math.round(shipDelay / (1000 * 3600 * 24))

    return timeToShip
  }

  function getTimeToDeliver (order) {
    let shipped = new Date(order.shippedDate)
    let delivered = order.deliveredDate ? new Date(order.deliveredDate) : new Date()
    let deliverDelay = delivered.getTime() - shipped.getTime()
    let timeToDeliver = Math.round(deliverDelay / (1000 * 3600 * 24))

    return timeToDeliver
  }

  return (
    <div className="font-marion text-white">
      <h3 className="text-left px-3">Orders</h3>
      <div className="font-dm-sans">
        <p className="p-3 text-base">Click an order for details.</p>
        <div className="">
          <p className="text-left px-3 text-sm">Filter by Year / Month</p>
          <Filters/>
        </div>
        <ul role="list" className="p-2 m-1 bg-t-med-brown rounded-md space-y-3">
          <div className="space-y-0">
            <p className="text-xs text-center italic">Item - Order Date</p>
            <p className="text-xs text-center italic">Order Status - Elapsed Time</p>
          </div>
          {orders.map((order, i) => {
            return (
              <li key={i} className="grid gap-x-2 grid-rows-2 grid-flow-col bg-t-brown p-2 rounded-lg border border-t-orange" style={{gridTemplateColumns: '5rem 1fr'}}>
                  <div className="row-span-2 w-20 h-20 justify-self-center self-center flex justify-center items-center">
                    <img alt="" src={order.imageUrl} className="h-16 w-16 bg-gray-800 " />
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-base font-semibold leading-6 text-white text-wrap max-w-40">{order.item}</p>
                    <p className="mt-1 text-sm leading-5 text-gray-400">
                      <time dateTime={order.orderDate}>{order.orderDate}</time>
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="relative h-6 w-6">
                      <img className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-6" src={'/clock.png'} alt="pending" />
                      <img className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-12" src="/blue-check-heavy.png" alt="" />

                    </div>
                    {/* <div className="relative">
                      <img className="h-8 w-24 opacity-45" src={'/arrow_right.png'} alt="" />
                      <span className="text-sm absolute top-1/2 left-1/5 -translate-x-1/5 -translate-y-1/2 w-20 text-center">
                        {getTimeToShip(order)} Days
                      </span>
                    </div> */}
                    <div className="flex flex-col items-center">
                      <span className="text-sm w-20 font-bold text-center">
                        {getTimeToShip(order)} Days
                      </span>
                      <img className="h-8 w-24 opacity-45 -my-4" src={'/arrow_right.png'} alt="" />
                    </div>
                    <div className="relative h-6 w-6">
                      <img className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-6 ${order.status === 'Shipped' || order.status === 'Delivered' ? 'opacity-100' : 'opacity-50'}`} src={'/ship.png'} alt="shipped" />
                      <img className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-12 ${order.status === 'Shipped' || order.status === 'Delivered' ? 'opacity-100' : 'opacity-0'}`} src={'/blue-check-heavy.png'} alt="shipped" />
                    </div>
                    {/* <div className="relative">
                      <img className="h-8 w-24 opacity-45" src={'/arrow_right.png'} alt="" />
                      <span className={`text-sm top-1/2 left-1/5 -translate-x-1/5 -translate-y-1/2 w-20 text-center ${order.status === 'Shipped' || order.status === 'Delivered' ? 'absolute' : 'hidden'}`}>
                        {getTimeToDeliver(order)} Days
                      </span>
                    </div> */}
                    <div className="flex flex-col items-center">
                      <span className={`text-sm w-20 font-bold text-center ${order.status === 'Shipped' || order.status === 'Delivered' ? 'block' : 'hidden'}`}>
                        {getTimeToDeliver(order)} Days
                      </span>
                      <img className="h-8 w-24 opacity-45 -my-4" src={'/arrow_right.png'} alt="delivered" />
                    </div>
                    <div className="h-6 w-6 relative">
                      <img className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-6 ${order.status === 'Delivered' ? 'opacity-100' : 'opacity-50'}`} src={'/package.png'} alt="delivered" />
                      <img className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-12 ${order.status === 'Delivered' ? 'opacity-100' : 'opacity-0'}`} src={'/blue-check-heavy.png'} alt="delivered" />
                    </div>
                  </div>
              </li>
            )
          })}
          <div className="flex justify-center">
            <button type="button" class="w-1/2 rounded-md  px-3 py-2 mx-auto text-sm font-semibold text-white shadow-sm border border-t-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-t-light-blue">Show More</button>
          </div>
        </ul>
      </div>
    </div>
  )
}
