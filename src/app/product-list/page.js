/* eslint-disable @next/next/no-img-element */
import ProductsList from "@/components/ProductsList"

function ProductListPage() {
  return (
    <div className='flex flex-col items-center mt-12 relative max-w-[375px]'>
      <div className="text-center text-white text-[23px] font-normal font-['Marion']">
        <ProductsList/>
      </div>
    </div>
  )
}

export default ProductListPage