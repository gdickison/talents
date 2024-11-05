/* eslint-disable @next/next/no-img-element */
import React from 'react'

const SignIn = () => {
  return (
    <section id="relume" class="px-[5%]">
      <div class="relative flex min-h-svh flex-col justify-center overflow-auto py-24 lg:py-20">
        <div
          class="absolute left-0 right-0 top-0 flex h-16 w-full items-center justify-between md:h-18"
        >
          <a href="#">
            <img src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg" alt="Logo text"/>
          </a>
          <div class="inline-flex gap-x-1 text-[#BF8B30]">
            <p class="hidden md:block">Don&#x27;t have an account?</p>
            <a href="#" class="underline">Sign up</a>
          </div>
        </div>
        <div class="mx-auto w-full max-w-sm">
          <div class="rb-6 mb-6 text-center md:mb-8">
            <h1 class="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">Log In</h1>
            <p class="md:text-md">Lorem ipsum dolor sit amet adipiscing elit.</p>
          </div>
          <form class="grid grid-cols-1 gap-6">
            <div class="grid w-full items-center">
              <label class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2" for="email">
                Email*
              </label>
              <div class="relative flex size-full items-center">
                <input
                  type="email"
                  class="flex size-full min-h-11 border border-border-primary bg-background-primary py-2 align-middle file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 px-3"
                  id="email"
                  required=""
                  value=""
                />
              </div>
            </div>
            <div class="grid w-full items-center">
              <label
                class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2"
                for="password"
              >
                Password*
              </label>
              <div class="relative flex size-full items-center">
                <input
                  type="password"
                  class="flex size-full min-h-11 border border-border-primary bg-background-primary py-2 align-middle file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 px-3"
                  id="password"
                  required=""
                  value=""
                />
              </div>
            </div>
            <div class="grid grid-cols-1 gap-4">
              <button
                class="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-alternative px-6 py-3"
              >
                Log in
              </button>
              <button
                class="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary bg-background-primary px-6 py-3 gap-x-3"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="size-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                  />
                </svg>
                Log in with Google
              </button>
            </div>
          </form>
          <div class="mt-5 w-full text-center md:mt-6">
            <a href="#" class="underline">Forgot your password?</a>
          </div>
        </div>
        <footer
          class="absolute bottom-0 left-0 right-0 flex h-16 w-full items-center justify-center md:h-18"
        >
          <p class="text-sm">© 2024 Relume</p>
        </footer>
      </div>
    </section>
  )
}

export default SignIn