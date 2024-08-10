/* eslint-disable @next/next/no-img-element */
const products = [
  {
    header: 'Premium Hammer',
    name: 'Premium Hammer',
    company: 'leslie.alexander@example.com',
    price: 'Shipped',
    imageUrl: '/hammer.png'
  },
  {
    header: 'Premium Hammer',
    name: 'Premium Hammer',
    company: 'michael.foster@example.com',
    price: 'Pending',
    imageUrl: '/hammer.png'
  },
  {
    header: 'Premium Hammer',
    name: 'Premium Hammer',
    company: 'dries.vincent@example.com',
    price: 'Shipped',
    imageUrl: '/hammer.png'
  },
  {
    header: 'Premium Hammer',
    name: 'Premium Hammer',
    company: 'lindsay.walton@example.com',
    price: 'Delivered',
    imageUrl: '/hammer.png'
  },
  {
    header: 'Premium Hammer',
    name: 'Premium Hammer',
    company: 'courtney.henry@example.com',
    price: 'Delivered',
    imageUrl: '/hammer.png'
  },
  {
    header: 'Premium Hammer',
    name: 'Premium Hammer',
    company: 'tom.cook@example.com',
    price: 'Pending',
    imageUrl: '/hammer.png'
  },
]

export default function ProductsList () {
  return (
    <div className="">
      <h3 className="text-left px-3">Products</h3>
      <div className="font-dm-sans">
        <p className="py-3">Click an order for details.</p>
        <ul role="list" className="px-3 m-1 bg-t-med-brown rounded-md">
          {products.map((product, i) => (
            <li key={i} className="flex justify-between gap-x-6 py-5 ">
              <div className="flex min-w-0 gap-x-4">
                <img alt="" src={product.imageUrl} className="h-12 w-12 flex-none bg-gray-800" />
                <div className="min-w-0 flex-auto text-left">
                  <p className="text-base leading-6 text-white">{product.name}</p>
                  {/* <p className="mt-1 text-sm leading-5 text-gray-400">
                    Ordered <time dateTime={product.lastSeenDateTime}>{product.lastSeenDateTime}</time>
                  </p> */}
                </div>
              </div>
              {/* <div className="shrink-0 flex items-start gap-6">
                <p className="text-base leading-6 text-white">{product.role}</p>
                <img src={`${product.role === 'Shipped' ? '/ship.png' : product.role === 'Delivered' ? '/package.png' : '/clock.png'}`} alt="" />
              </div> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
