import Link from "next/link"

function Home() {
  return (
    <div className='text-white m-6 flex flex-col gap-4'>
      <Link href={'/design-system'}>Design System</Link>
      <Link href={'/business-landing-screen'}>Business Landing Screen</Link>
      <Link href={'/account-settings'}>Account Settings</Link>
    </div>
  )
}

export default Home