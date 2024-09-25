import OrdersList from "@/components/OrdersList"

function OrdersListPage() {
  return (
    <div className='flex flex-col items-center mt-36 relative'>
      <div className="text-white text-[23px] font-normal font-['Marion']">
        <OrdersList/>
      </div>
    </div>
  )
}

export default OrdersListPage