/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { marcellus } from "../layout"

function PreReleaseLandingPage() {
  return (
    <section
      
      class="grid grid-cols-1 gap-y-16 pt-16 md:grid-flow-row md:pt-24 lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:pt-0 bg-tbg"
    >
      <div class="mx-[5%] max-w-[40rem] justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
        <p class="text-3xl font-dm-sans text-gray-300">Welcome to</p>
        <h1 class="mb-5 text-6xl md:mb-6 md:text-9xl lg:text-10xl text-ttext font-marcellus text-[#BF8B30]">
          Talents
        </h1>
        <p class="md:text-xl font-dm-sans text-gray-300">
          The Christian marketplace that meets your needs. A new way to find products and services for every day life in a marketplace built for you.
        </p>
        <div class="mt-6 flex gap-x-4 md:mt-8">
          <Link
            href="/business-waiting-list"
            className="mt-6 flex gap-x-4 md:mt-8 focus-visible:ring-border-primary gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-alternative px-6 py-3 text-[#BF8B30] hover:text-black border-[#BF8B30] rounded-md hover:bg-[#BF8B30]"
          >
            I&apos;m a Seller
        </Link>
          <Link
            href="/customer-waiting-list"
            className="mt-6 flex gap-x-4 md:mt-8 focus-visible:ring-border-primary gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-alternative px-6 py-3 text-[#BF8B30] hover:text-black border-[#BF8B30] rounded-md hover:bg-[#BF8B30]"
          >
            I&apos;m a Buyer
        </Link>
        </div>
      </div>
      <div class="h-[30rem] max-w-[40rem] overflow-hidden pl-[5vw] pr-[5vw] md:h-[40rem] lg:h-screen lg:pl-0">
        <div class="grid w-full grid-cols-2 gap-x-4">
          <div
            class="-mt-[120%] grid size-full animate-loop-vertically columns-2 grid-cols-1 gap-4 self-center"
          >
            <div class="grid size-full grid-cols-1 gap-4">
              <div class="relative w-full pt-[120%]">
                <img
                  class="absolute inset-0 size-full object-cover"
                  src="https://picsum.photos/id/73/390/467"
                  alt="placeholder image 1"
                />
              </div>
            </div>
            <div class="grid size-full grid-cols-1 gap-4">
              <div class="relative w-full pt-[120%]">
                <img
                  class="absolute inset-0 size-full object-cover"
                  src="https://picsum.photos/id/7/390/467"
                  alt="placeholder image 2"
                />
              </div>
            </div>
            <div class="grid size-full grid-cols-1 gap-4">
              <div class="relative w-full pt-[120%]">
                <img
                  class="absolute inset-0 size-full object-cover"
                  src="https://picsum.photos/id/325/390/467"
                  alt="placeholder image 3"
                />
              </div>
            </div>
            <div class="grid size-full grid-cols-1 gap-4">
              <div class="relative w-full pt-[120%]">
                <img
                  class="absolute inset-0 size-full object-cover"
                  src="https://picsum.photos/id/23/390/467"
                  alt="placeholder image 4"
                />
              </div>
            </div>
            <div class="grid size-full grid-cols-1 gap-4">
              <div class="relative w-full pt-[120%]">
                <img
                  class="absolute inset-0 size-full object-cover"
                  src="https://picsum.photos/id/200/390/467"
                  alt="placeholder image 5"
                />
              </div>
            </div>
            <div class="grid size-full grid-cols-1 gap-4">
              <div class="relative w-full pt-[120%]">
                <img
                  class="absolute inset-0 size-full object-cover"
                  src="https://picsum.photos/id/26/390/467"
                  alt="placeholder image 6"
                />
              </div>
            </div>
          </div>
          <div class="grid size-full animate-loop-vertically grid-cols-1 gap-4">
            <div class="grid size-full grid-cols-1 gap-4">
              <div class="relative w-full pt-[120%]">
                <img
                  class="absolute inset-0 size-full object-cover"
                  src="https://picsum.photos/id/30/390/467"
                  alt="placeholder image 1"
                />
              </div>
            </div>
            <div class="grid size-full grid-cols-1 gap-4">
              <div class="relative w-full pt-[120%]">
                <img
                  class="absolute inset-0 size-full object-cover"
                  src="https://picsum.photos/id/39/390/467"
                  alt="placeholder image 2"
                />
              </div>
            </div>
            <div class="grid size-full grid-cols-1 gap-4">
              <div class="relative w-full pt-[120%]">
                <img
                  class="absolute inset-0 size-full object-cover"
                  src="https://picsum.photos/id/225/390/467"
                  alt="placeholder image 3"
                />
              </div>
            </div>
            <div class="grid size-full grid-cols-1 gap-4">
              <div class="relative w-full pt-[120%]">
                <img
                  class="absolute inset-0 size-full object-cover"
                  src="https://picsum.photos/id/425/390/467"
                  alt="placeholder image 4"
                />
              </div>
            </div>
            <div class="grid size-full grid-cols-1 gap-4">
              <div class="relative w-full pt-[120%]">
                <img
                  class="absolute inset-0 size-full object-cover"
                  src="https://picsum.photos/id/145/390/467"
                  alt="placeholder image 5"
                />
              </div>
            </div>
            <div class="grid size-full grid-cols-1 gap-4">
              <div class="relative w-full pt-[120%]">
                <img
                  class="absolute inset-0 size-full object-cover"
                  src="https://picsum.photos/id/175/390/467"
                  alt="placeholder image 6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PreReleaseLandingPage