import Link from "next/link"

function Home() {
  return (
    <div className='m-6'>
      <Link href={'/design-system'}>Design System</Link>
    </div>
  )
}

export default Home