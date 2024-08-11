import OrdersList from "@/components/OrdersList"

function OrdersListPage() {
  return (
    <div className='flex flex-col items-center mt-12 relative'>
      <div className="text-center text-white text-[23px] font-normal font-['Marion']">
        <OrdersList/>
      </div>
    </div>
  )
}

export default OrdersListPage