/* eslint-disable @next/next/no-img-element */
import CategoryPill from "@/components/CategoryPill";

async function Product ({ params }) {
  const data = await fetch(`https://dummyjson.com/products/${params.id}`)
  const product = await data.json()

  return (
    <div className='flex flex-col items-center mt-12 relative w-[375px] mx-auto text-white bg-t-brown font-montserrat'>
      <div className="text-white font-normal">
        <div className="py-2 px-3">
          <div className="flex justify-between items-center">
            <p className="uppercase text-sm">Product</p>
            <CategoryPill
              category={product.category}
            />
          </div>
          <div className="flex justify-center items-center flex-col gap-8">
            <div className="w-full items-center">
              <h2 className="font-marcellus text-3xl leading-9 mt-4">{product.title}</h2>
              <div className="w-full mt-7 bg-transparent">
                <div className="bg-gray-800 rounded-lg" >
                  <img src={product.thumbnail} alt={product.title} className="w-full bg-transparent" />
                </div>
              </div>
              <p className="font-montserrat font-normal text-base leading-6 mt-7 mx-2 px-2 py-2 border-l-[6px] border-yellow-300/10 bg-yellow-200/5 rounded-r-md">{product.description}</p>
              <p className="font-montserrat lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">${product.price.toFixed(2)}</p>
              <div className="mt-6">
                <div className="">
                  <div className="h-10 items-center">
                    <label htmlFor="quantity" className="flex flex-row justify-between items-center w-full">
                      <p className="text-base leading-4 ">Select quantity ({product.stock} in stock)</p>
                      <select name="quantity" id="quantity" className="w-1/4 text-black px-2 text-md text-center rounded-md">
                        {[...Array(product.stock)].map((item, i) => {
                          return (
                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                          )
                        })}
                      </select>
                    </label>
                  </div>
                </div>
                <hr className=" bg-gray-200 w-full my-2" />
                <div className=" flex flex-row justify-between items-center mt-4">
                  <details className="product-details font-medium text-base leading-4 w-full space-y-4">
                    <summary>
                      Product Details
                    </summary>
                    <div className="text-white">Width: {product.dimensions.width}&quot;</div>
                    <div className="text-white">Depth: {product.dimensions.depth}&quot;</div>
                    <div className="text-white">Height: {product.dimensions.height}&quot;</div>
                    <div className="text-white">Weight: {product.weight} oz.</div>
                    <div className="text-white capitalize">Category: {product.category}</div>
                    <div className="text-white capitalize">{product.warrantyInformation}</div>
                    <div className="text-white capitalize">{product.shippingInformation}</div>
                    <div className="text-white capitalize">Return Policy: {product.returnPolicy}</div>
                    <div className="text-white">Tags:
                      {product.tags.map((tag, idx) => {
                        return (
                          <>
                            <span key={idx} className="text-white capitalize mx-2">{tag}</span>
                            {idx !== product.tags.length - 1 ? <span>/</span> : null}
                          </>
                        )
                      })}
                    </div>
                    <div className="text-white capitalize">SKU: {product.sku}</div>
                  </details>
                </div>
                <hr className=" bg-gray-200 w-full mt-4" />
              </div>
              <button
                type="button"
                className="mt-6 w-full rounded-md focus-visible:ring-border-primary gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative font-montserrat text-[1rem] p-2 text-t-umber hover:text-black border-t-tan hover:bg-t-tan"
              >
                Add to Shopping Bag
              </button>
            </div>
            <div className=" w-full flex flex-row gap-4">
              <div className=" w-full grid grid-cols-1 gap-6">
              {product.images.map((image, idx) => {
                return (
                  <div key={idx} className=" w-full bg-gray-100 flex justify-center items-center rounded-lg" >
                    <img src={image} alt={product.title}  />
                  </div>
                )
              })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
