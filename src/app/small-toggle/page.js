import SmallToggle from "@/components/SmallToggle"

export default function SmallTogglePage() {
  return (
    <div className='flex flex-col items-center mt-12 relative'>
      <div className='text-center text-white text-[23px] font-normal font-marion'>
        <SmallToggle
          label={'Toggle to do something'}
        />
      </div>
    </div>
  )
}
