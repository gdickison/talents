/* eslint-disable @next/next/no-img-element */
const products = [
  {
    category: 'Hammers',
    name: 'Premium Grade Hammer',
    company: 'Hammers, Inc.',
    price: 55,
    imageUrl: '/hammer_2.png'
  },
  {
    category: 'Hammers',
    name: 'Premium Grade Hammer',
    company: 'Hammers, Inc.',
    price: 55,
    imageUrl: '/hammer_2.png'
  },
  {
    category: 'Hammers',
    name: 'Premium Grade Hammer',
    company: 'Hammers, Inc.',
    price: 55,
    imageUrl: '/hammer_2.png'
  },
  {
    category: 'Hammers',
    name: 'Premium Grade Hammer',
    company: 'Hammers, Inc.',
    price: 55,
    imageUrl: '/hammer_2.png'
  },
  {
    category: 'Hammers',
    name: 'Premium Grade Hammer',
    company: 'Hammers, Inc.',
    price: 55,
    imageUrl: '/hammer_2.png'
  },
  {
    category: 'Hammers',
    name: 'Premium Grade Hammer',
    company: 'Hammers, Inc.',
    price: 55,
    imageUrl: '/hammer_2.png'
  },
]

export default function ProductsList () {
  return (
    <div className="">
      <h4 className="text-left px-3 font-marion">Products</h4>
      <div className="font-dm-sans">
        <p className="px-3 text-base">Click a product for details.</p>
        <ul role="list" className="px-5 m-1 flex gap-6 py-5 overflow-auto whitespace-nowrap">
          {products.map((product, i) => (
            <li key={i} className="flex justify-between bg-t-med-brown rounded-2xl">
              <div className="w-[11.5rem] h-[17rem] py-2 px-4 flex flex-col justify-around">
                <p className="text-left text-sm">{product.category}</p>
                <img alt="" src={product.imageUrl} className="h-28 w-28 flex-none bg-gray-800 mx-auto" />
                <h3 className="text-base font-marion text-wrap text-left">{product.name}</h3>
                <p className="text-t-light-blue text-left tracking-wide">{product.company}</p>
                <p className="text-left">${product.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
