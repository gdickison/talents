/* eslint-disable @next/next/no-img-element */
import AccountBalance from "@/components/AccountBalance"
import OrdersList from "@/components/OrdersList"
import ProductsList from "@/components/ProductsList"
import ServicesList from "@/components/ServicesList"
import Profile from "@/components/Profile"
import ToggleSwitch from "@/components/ToggleSwitch"
import Link from "next/link"

function BusinessLandingScreen() {
  return (
    <div className="flex flex-col items-center -m-5 relative font-dm-sans mt-24">
      <div className="py-4 flex justify-center fixed top-[575px]">
        <ToggleSwitch/>
      </div>
      <h6 className='text-left'>Business Landing Screen</h6>
      <div className='w-[375px] min-h-screen bg-t-dark-brown'>
        <div>
          <div className='font-marcellus  h-24 border-b border-t-gray flex items-center p-4 justify-between'>
            <p className='text-[2rem] text-white'>Talents</p>
            <img src="/ellipse_1.svg" alt="" />
          </div>
          <div className="my-4 flex flex-col">
            <div className="px-2 pb-4 leading-[3rem]">
              <div className="w-full text-white text-[43px] font-normal">
                Welcome,
              </div>
              <div className="w-full text-white text-[43px] font-normal">
                Preston
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="">
                <OrdersList/>
              </div>
              <div className="text-center text-white text-[23px] font-normal">
                <ProductsList/>
                <div className="flex justify-center">
                  <Link href={'/add-new-product'} className="w-1/2 rounded-md px-3 py-2 mx-auto text-sm font-semibold text-white border border-t-gold">Add New Product</Link>
                </div>
              </div>
              <div className="text-center text-white text-[23px] font-normal">
                <ServicesList/>
                <div className="flex justify-center">
                  <Link href={'/add-new-service'} className="w-1/2 rounded-md px-3 py-2 mx-auto text-sm font-semibold text-white border border-t-gold">Add New Service</Link>
                </div>
              </div>
              <div className="">
                <AccountBalance/>
              </div>
              <div className="text-center text-white text-[23px] font-normal">
                <Profile/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessLandingScreen