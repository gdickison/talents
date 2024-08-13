/* eslint-disable @next/next/no-img-element */
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
    item: 'Premium Hammer',
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
    <div className="">
      <h3 className="text-left px-3">Orders</h3>
      <div className="font-dm-sans">
        <p className="py-3">Click an order for details.</p>
        <div className="">
          <p className="text-left px-3 text-sm">Filter by Year / Month</p>
          <div className="flex gap-4 px-3 py-3">
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
            <select className="w-24 h-6 text-sm bg-t-tan text-black rounded-full px-2 outline-none appearance-none bg-[url('/arrow_down.png')] bg-no-repeat bg-[length:1rem]" style={{backgroundPosition: 'right 0.25rem top 50%'}} name="year" id="year">
              <option value="all">All</option>
              <option value="pending">Pending</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
            </select>
          </div>
        </div>
        <ul role="list" className="px-3 m-1 bg-t-med-brown rounded-md">
          {orders.map((order, i) => (
            <li key={i} className="flex justify-between gap-x-6 py-5 ">
              <div className="flex min-w-0 gap-x-4">
                <img alt="" src={order.imageUrl} className="h-12 w-12 flex-none bg-gray-800" />
                <div className="min-w-0 flex-auto text-left">
                  <p className="text-base leading-6 text-white">{order.item}</p>
                  <p className="mt-1 text-sm leading-5 text-gray-400">
                    Ordered <time dateTime={order.orderDate}>{order.orderDate}</time>
                  </p>
                </div>
              </div>
              <div className="shrink-0 flex items-start gap-6">
                <img src={`${order.status === 'Shipped' ? '/ship.png' : order.status === 'Delivered' ? '/package.png' : '/clock.png'}`} alt="" />
              </div>
            </li>
          ))}
        </ul>

        <ul role="list" className="px-3 m-1 bg-t-med-brown rounded-md space-y-6">
          {orders.map((order, i) => {
            return (
              <li key={i} className="grid gap-x-2 grid-rows-2 grid-flow-col" style={{gridTemplateColumns: '5rem 1fr'}}>

                  <div className="row-span-2 w-20 h-20 flex justify-start items-center">
                    <img alt="" src={order.imageUrl} className="h-16 w-16 flex-none bg-gray-800 row-span-2" />
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-base leading-6 text-white">{order.item}</p>
                    <p className="mt-1 text-sm leading-5 text-gray-400">
                      <time dateTime={order.orderDate}>{order.orderDate}</time>
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <img className="inline h-6" src={'/clock.png'} alt="pending" />
                    <div className="relative">
                      <img className="h-8 w-24" src={'/arrow_right.png'} alt="" />
                      <span className="text-sm absolute top-1/2 left-1/5 -translate-x-1/5 -translate-y-1/2 w-20 text-center">
                        {getTimeToShip(order)} Days
                      </span>
                    </div>
                    <img className={`inline h-6 ${order.status === 'Shipped' || order.status === 'Delivered' ? 'opacity-100' : 'opacity-50'}`} src={'/ship.png'} alt="shipped" />
                    <div className="relative">
                      <img className="h-8 w-24" src={'/arrow_right.png'} alt="" />
                      <span className={`text-sm top-1/2 left-1/5 -translate-x-1/5 -translate-y-1/2 w-20 text-center ${order.status === 'Shipped' || order.status === 'Delivered' ? 'absolute' : 'hidden'}`}>
                        {getTimeToDeliver(order)} Days
                      </span>
                    </div>
                    <img className={`inline h-6 ${order.status === 'Delivered' ? 'opacity-100' : 'opacity-50'}`} src={'/package.png'} alt="delivered" />
                  </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
