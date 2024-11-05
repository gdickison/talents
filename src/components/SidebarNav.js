import Link from "next/link"

function SidebarNav() {

  return (
    <div className="sidenav">
      {/* <button className="sidenav__button">Menu</button> */}
      <div className="sidenav__links">
        <Link href={'/'}>Home</Link>
        <Link href={'/design-system'}>Design System</Link>
        <Link href={'/sign-up'}>Sign Up</Link>
        <Link href={'/sign-in'}>Sign In</Link>
        <Link href={'/business-landing-screen'}>Business Landing Screen</Link>
        <Link href={'/profile-settings'}>Profile Settings Component</Link>
        <Link href={'/toggle-switch'}>Toggle Switch Component</Link>
        <Link href={'/small-toggle'}>Small Toggle Switch Component</Link>
        <Link href={'/account-balance'}>Account Balance Component</Link>
        <Link href={'/order-list'}>Orders List Component</Link>
        <Link href={'/product-list'}>Product List Component</Link>
        <Link href={'/service-list'}>Service List Component</Link>
        <Link href={'/pre-release-landing'}>Pre-Release Landing Page</Link>
        <Link href={'/business-waiting-list'}>Business Waiting List</Link>
        <Link href={'/customer-waiting-list'}>Customer Waiting List</Link>
      </div>
    </div>
  )
}

export default SidebarNav