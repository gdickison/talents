/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

const SignIn = () => {
  return (
    <section id="sign_up" className="px-[5%]">
      <div
        className="relative flex min-h-svh flex-col justify-center overflow-auto py-24 lg:pb-24 lg:pt-16"
      >
        <div className="mx-auto w-full max-w-sm">
          <div className="rb-6 mb-6 text-center md:mb-8 text-[#BF8B30]">
            <h1 className="mb-5 text-5xl font-marcellus md:mb-6 md:text-7xl lg:text-8xl">Sign In</h1>
          </div>
          <form className="grid grid-cols-1 gap-6">
            <div className="grid grid-cols-1">
              <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2 font-montserrat text-[#BF8B30]" htmlFor="email">
                Email*
              </label>
              <div className="relative flex size-full items-center">
                <input
                  type="email"
                  className="block w-full rounded-md border-0 p-2 text-gray-50 shadow-sm text-base placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                  id="email"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1">
              <label
                className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2 font-montserrat text-[#BF8B30]"
                htmlFor="password"
              >
                Password*
              </label>
              <div className="relative flex size-full items-center">
                <input
                  type="password"
                  className="block w-full rounded-md border-0 p-2 text-gray-50 shadow-sm text-base placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                  id="password"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <button className="mt-6 flex gap-x-4 md:mt-8 focus-visible:ring-border-primary gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-alternative px-6 py-3 text-[#BF8B30] hover:text-black border-[#BF8B30] rounded-lg hover:bg-[#BF8B30]" type="submit">
                Sign In
              </button>
              <button className="mt-6 flex gap-x-4 md:mt-8 focus-visible:ring-border-primary gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-alternative px-6 py-3 text-[#BF8B30] hover:text-black border-[#BF8B30] rounded-lg hover:bg-[#BF8B30]" type="submit">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="size-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                  />
                </svg>
                Sign in with Google
              </button>
            </div>
          </form>
          <div className="text-center my-2 text-[#BF8B30]">
            <Link href="/sign-up" className="underline text-[1rem] sm:text-[1.25rem]">Forgot Password?</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignIn