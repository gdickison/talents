import Link from "next/link"

function Home() {
  return (
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
  )
}

export default Home