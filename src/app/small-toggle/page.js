import SmallToggle from "@/components/SmallToggle"

export default function SmallTogglePage() {
  return (
    <div className='flex flex-col mt-12 relative max-w-[375px] mx-auto'>
      <div className='text-white text-[23px] font-normal font-marion'>
        <SmallToggle
          label={'Toggle to do something'}
        />
      </div>
    </div>
  )
}
