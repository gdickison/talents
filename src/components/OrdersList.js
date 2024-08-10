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
    <ul role="list" className="divide-y divide-gray-800 px-3">
      {people.map((person) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5 font-dm-sans">
          <div className="flex min-w-0 gap-x-4">
            <img alt="" src={person.imageUrl} className="h-12 w-12 flex-none bg-gray-800" />
            <div className="min-w-0 flex-auto text-left">
              <p className="text-sm leading-6 text-white">{person.name}</p>
              <p className="mt-1 text-xs leading-5 text-gray-400">
                Ordered <time dateTime={person.lastSeenDateTime}>{person.lastSeenDateTime}</time>
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-start gap-6">
            <p className="text-sm leading-6 text-white">{person.role}</p>
            <img src={`${person.role === 'Shipped' ? '/ship.png' : person.role === 'Delivered' ? '/package.png' : '/clock.png'}`} alt="" />
          </div>
        </li>
      ))}
    </ul>
  )
}
