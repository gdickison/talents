/* eslint-disable @next/next/no-img-element */
const people = [
  {
    name: 'Premium Hammer',
    email: 'leslie.alexander@example.com',
    role: 'Shipped',
    imageUrl: '/hammer.png',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23',
  },
  {
    name: 'Premium Hammer',
    email: 'michael.foster@example.com',
    role: 'Pending',
    imageUrl: '/hammer.png',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23',
  },
  {
    name: 'Premium Hammer',
    email: 'dries.vincent@example.com',
    role: 'Shipped',
    imageUrl: '/hammer.png',
    lastSeen: null,
    lastSeenDateTime: '2023-01-23',
  },
  {
    name: 'Premium Hammer',
    email: 'lindsay.walton@example.com',
    role: 'Delivered',
    imageUrl: '/hammer.png',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23',
  },
  {
    name: 'Premium Hammer',
    email: 'courtney.henry@example.com',
    role: 'Delivered',
    imageUrl: '/hammer.png',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23',
  },
  {
    name: 'Premium Hammer',
    email: 'tom.cook@example.com',
    role: 'Pending',
    imageUrl: '/hammer.png',
    lastSeen: null,
    lastSeenDateTime: '2023-01-23',
  },
]

export default function OrdersList () {
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
          </div>
        </div>
        <ul role="list" className="px-3 m-1 bg-t-med-brown rounded-md">
          {people.map((person) => (
            <li key={person.email} className="flex justify-between gap-x-6 py-5 ">
              <div className="flex min-w-0 gap-x-4">
                <img alt="" src={person.imageUrl} className="h-12 w-12 flex-none bg-gray-800" />
                <div className="min-w-0 flex-auto text-left">
                  <p className="text-base leading-6 text-white">{person.name}</p>
                  <p className="mt-1 text-sm leading-5 text-gray-400">
                    Ordered <time dateTime={person.lastSeenDateTime}>{person.lastSeenDateTime}</time>
                  </p>
                </div>
              </div>
              <div className="shrink-0 flex items-start gap-6">
                <p className="text-base leading-6 text-white">{person.role}</p>
                <img src={`${person.role === 'Shipped' ? '/ship.png' : person.role === 'Delivered' ? '/package.png' : '/clock.png'}`} alt="" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
