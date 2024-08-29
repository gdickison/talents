import ServicesList from "@/components/ServicesList";

function ServiceListPage () {
  return (
    <div className='flex flex-col mt-12 relative max-w-[375px] mx-auto'>
      <div className="text-center text-white text-[23px] font-normal font-['Marion']">
        <ServicesList/>
      </div>
    </div>
  )
}

export default ServiceListPage