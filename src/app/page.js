import AccountBalance from "@/components/AccountBalance"
import OrdersList from "@/components/OrdersList"
import ProductsList from "@/components/ProductsList"
import Profile from "@/components/Profile"
import Link from "next/link"

function Home() {
  return (
    <div className="flex flex-col gap-12">
      <div className='text-white flex flex-col items-center mt-12 relative'>
        <Link href={'/design-system'}>Design System</Link>
        <Link href={'/business-landing-screen'}>Business Landing Screen</Link>
        <Link href={'/profile-settings'}>Profile Settings Component</Link>
        <Link href={'/toggle-switch'}>Toggle Switch Component</Link>
        <Link href={'/small-toggle'}>Small Toggle Switch Component</Link>
        <Link href={'/account-balance'}>Account Balance Component</Link>
        <Link href={'/order-list'}>Orders List Component</Link>
        <Link href={'/product-list'}>Product List Component</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12 text-white mx-auto font-marion">
        <div className="w-96">
          <AccountBalance/>
        </div>
        <div className="w-96">
          <OrdersList/>
        </div>
        <div className="w-96">
          <ProductsList/>
        </div>
        <div className="w-96">
          <Profile
            gridrows={1}
          />
        </div>
      </div>
    </div>
  )
}

export default Home