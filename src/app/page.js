import AccountBalance from "@/components/AccountBalance"
import OrdersList from "@/components/OrdersList"
import ProductsList from "@/components/ProductsList"
import Profile from "@/components/Profile"

function Home() {
  return (
    <div className="flex flex-col gap-12 mt-24">
      <div className="flex gap-12 text-white overflow-auto">
        <div className="w-96 min-w-96">
          <AccountBalance/>
        </div>
        <div className="w-96 min-w-96">
          <OrdersList/>
        </div>
        <div className="w-96 min-w-96">
          <ProductsList/>
        </div>
        <div className="w-96 min-w-96">
          <Profile
            gridrows={1}
          />
        </div>
      </div>
    </div>
  )
}

export default Home