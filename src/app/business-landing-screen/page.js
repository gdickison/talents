/* eslint-disable @next/next/no-img-element */
import AccountBalance from "@/components/AccountBalance"
import OrdersList from "@/components/OrdersList"
import ProductsList from "@/components/ProductsList"
import Profile from "@/components/Profile"
import ToggleSwitch from "@/components/ToggleSwitch"

function BusinessLandingScreen() {
  return (
    <div className="flex flex-col items-center mt-12 relative">
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
              <div className="w-full text-white text-[43px] font-normal font-['Marion']">
                Welcome,
              </div>
              <div className="w-full text-white text-[43px] font-normal font-['Marion']">
                Preston
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="text-center text-white text-[23px] font-normal font-['Marion']">
                <OrdersList/>
              </div>
              <div className="text-center text-white text-[23px] font-normal font-['Marion']">
                <ProductsList/>
              </div>
              <div className="text-center text-white text-[23px] font-normal font-['Marion']">
                <AccountBalance/>
              </div>
              <div className="text-center text-white text-[23px] font-normal font-['Marion']">
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