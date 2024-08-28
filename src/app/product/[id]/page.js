/* eslint-disable @next/next/no-img-element */
async function Product4 ({ params }) {
  const data = await fetch(`https://dummyjson.com/products/${params.id}`)
  const product = await data.json()
console.log('product', product)
  return (
    <div className='flex flex-col items-center mt-12 relative w-[375px] mx-auto text-white bg-t-brown font-dm-sans'>
      <div className="text-white font-normal">
        <div className="py-2 px-3">
          <div className="flex justify-center items-center flex-col gap-8">
            <div className="w-full items-center">
              <h2 className="font-dm-sans text-3xl leading-9 mt-4">{product.title}</h2>
              <div className=" flex flex-row justify-between  mt-5">
                <div className=" flex flex-row space-x-3">
                  <img src="/star_bright.svg" alt="star" />
                  <img src="/star_bright.svg" alt="star" />
                  <img src="/star_bright.svg" alt="star" />
                  <img src="/star_bright.svg" alt="star" />
                  <img src="/star_dark.svg" alt="no star" />
                </div>
                <p className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 hover:underline hover:duration-100 cursor-pointer">{product.reviews.length} reviews</p>
              </div>
              <div className="w-full mt-7 bg-transparent">
                <div className="bg-gray-800" >
                  <img src={product.thumbnail} alt={product.title} className="w-full bg-transparent" />
                </div>
              </div>
              <p className="font-dm-sans font-normal text-base leading-6  mt-7">{product.description}</p>
              <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">${product.price.toFixed(2)}</p>
              <div className="lg:mt-11 mt-10">
                <div className="">
                  <div className="h-10 items-center">
                    <label htmlFor="quantity" className="flex flex-row justify-between items-center w-full">
                      <p className="text-base leading-4 ">Select quantity ({product.stock} in stock)</p>
                      <select name="quantity" id="quantity" className="w-1/4 text-black px-2 text-md text-center">
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
              <button className="focus:outline-none focus:ring-2 hover:bg-royal-blue-500 focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-royal-blue-600 w-full py-5 lg:mt-12 mt-6">Add to shopping bag</button>
            </div>
            <div className=" w-full flex flex-row gap-4">
              <div className=" w-full grid grid-cols-1 gap-6">
              {product.images.map((image, idx) => {
                return (
                  <div key={idx} className=" w-full bg-gray-100 flex justify-center items-center" >
                    <img src={image} alt={product.title}  />
                  </div>
                )
              })}
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h4>Reviews</h4>
            <div className=" flex flex-col gap-4 mt-2">
              {product.reviews.map((review, idx) => {
                return (
                  <div key={idx} className="font-medium text-base leading-4 w-full">
                    <div className="flex justify-between ">
                      <p className="text-white text-base product-details-inner">{review.rating} stars</p>
                      <p className="text-white text-base product-details-inner">{review.comment}</p>
                    </div>
                    <div className="">
                      <p className="text-white text-sm product-details-inner text-right italic">{review.reviewerName}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product4;
