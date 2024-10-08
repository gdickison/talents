/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

export default async function ProductsList () {
  const data = await fetch('https://dummyjson.com/products?limit=40')
  const { products } = await data.json()

  return (
    <div className="">
      <h4 className="text-left px-3 font-marion">Products</h4>
      <div className="font-dm-sans">
        <p className="px-3 text-base">Click a product for details.</p>
        <ul role="list" className="px-5 m-1 flex gap-6 py-5 overflow-auto whitespace-nowrap">
          {products.length > 0 && products.map((product, idx) => (
            <li key={idx} className="min-w-[18rem] h-[27rem] py-2 px-3 bg-t-med-brown rounded-2xl">
              <Link href={`/product/${product.id}`} className="">
                <div className="flex flex-col gap-3 items-stretch">
                  <p className="text-left text-sm capitalize h-4">{product.category}</p>
                  <img alt="" src={product.thumbnail} className="h-52 w-52 flex-none bg-gray-800 mx-auto" />
                  <h3 className="text-base font-marion text-wrap text-left min-h-20">{product.title}</h3>
                  <p className="text-left">${product.price.toFixed(2)}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
