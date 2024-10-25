/* eslint-disable @next/next/no-img-element */
import { marcellus } from "../layout"

async function BusinessWaitingList() {
  return (
    <section  className="px-[5%] py-16 md:py-24 lg:py-28 bg-black text-white h-screen">
      <div
        className="container grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:grid-flow-col lg:gap-x-20 lg:gap-y-16 mx-auto"
      >
        <div>
          <div className="rb-6 mb-6 md:mb-8">
            <div className="flex items-center gap-x-2 py-8">
              <img src="/gold-icon.svg" className="h-20 w-20 text-ttext" alt="logo"/>
              <h2 className={`rb-5 text-6xl ${marcellus.className} text-[#BF8B30]`}>Join the Wait List</h2>
            </div>
            <p className="md:text-md font-dm-sans text-gray-300 py-8">Talents is a platform that connects consumers with product and service providers that share the same values. The service is still in development, and we will let you know when it&apos;s ready.</p>
            <section  class="px-[5%] py-8">
              <div class="container">
                <div class="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
                  <h2 class="rb-5 mb-5 text-5xl font-semibold text-[#BF8B30] md:mb-6 font-marcellus tracking-wide">Pricing plan</h2>
                  <p class="md:text-md text-gray-300">Sell as much as you want for one price.</p>
                </div>
                <div class="mx-auto w-full max-w-md">
                  <div
                    class="flex h-full flex-col justify-between border border-[#BF8B30] px-6 py-8 md:p-8"
                  >
                    <div>
                      <div class="rb-6 mb-6 text-center md:mb-8 text-[#BF8B30]">
                        <h1 class="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                          $19<span class="text-2xl font-bold md:text-3xl lg:text-4xl">/mo</span>
                        </h1>
                        <p>
                          or
                          $200
                          yearly
                        </p>
                      </div>
                      <div class="mb-8 grid grid-cols-1 gap-4 py-2 text-gray-300">
                        <div class="flex self-start">
                          <div class="mr-4 flex-none self-start">
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
                                d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"
                              ></path>
                            </svg>
                          </div>
                          <p>Unlimited Products / Services</p>
                        </div>
                        <div class="flex self-start">
                          <div class="mr-4 flex-none self-start">
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
                                d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"
                              ></path>
                            </svg>
                          </div>
                          <p>No Sales Commissions</p>
                        </div>
                        <div class="flex self-start">
                          <div class="mr-4 flex-none self-start">
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
                                d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"
                              ></path>
                            </svg>
                          </div>
                          <p>Feature text goes here</p>
                        </div>
                        <div class="flex self-start">
                          <div class="mr-4 flex-none self-start">
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
                                d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"
                              ></path>
                            </svg>
                          </div>
                          <p>Feature text goes here</p>
                        </div>
                        <div class="flex self-start">
                          <div class="mr-4 flex-none self-start">
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
                                d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"
                              ></path>
                            </svg>
                          </div>
                          <p>Feature text goes here</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button
                        className="mt-6 flex gap-x-4 md:mt-8 focus-visible:ring-border-primary gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-alternative px-6 py-3 text-[#BF8B30] hover:text-black border-[#BF8B30] rounded-md hover:bg-[#BF8B30] w-full"
                      >
                        Get started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <form className="grid grid-cols-1 grid-rows-[auto_auto] gap-6 py-8 text-gray-300">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-1">
            <div className="grid w-full items-center">
              <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2" for="email">
                Business Name
              </label>
              <div className="relative flex size-full items-center">
                <input
                  type="text"
                  className="flex size-full min-h-11 border border-border-primary bg-background-primary py-2 align-middle file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 px-3 bg-gray-300"
                  id="email"
                  value=""
                />
              </div>
            </div>
          </div>
          <div className="grid w-full items-center">
            <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2" for="message"
              >Description</label
            ><textarea
              className="flex w-full border border-border-primary bg-neutral-white p-3 placeholder:text-neutral focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 min-h-[11.25rem] overflow-auto bg-gray-300"
              id="message"
              placeholder="Describe your products or services..."
              maxLength={200}
            ></textarea>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="grid w-full items-center">
              <label
                className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2"
                for="firstName"
                >First name</label
              >
              <div className="relative flex size-full items-center">
                <input
                  type="text"
                  className="flex size-full min-h-11 border border-border-primary bg-background-primary py-2 align-middle file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 px-3 bg-gray-300"
                  id="firstName"
                  value=""
                />
              </div>
            </div>
            <div className="grid w-full items-center">
              <label
                className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2"
                for="lastName"
                >Last name</label
              >
              <div className="relative flex size-full items-center">
                <input
                  type="text"
                  className="flex size-full min-h-11 border border-border-primary bg-background-primary py-2 align-middle file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 px-3 bg-gray-300"
                  id="lastName"
                  value=""
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="grid w-full items-center">
              <label
                className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2"
                for="firstName"
                >Email</label
              >
              <div className="relative flex size-full items-center">
                <input
                  type="text"
                  className="flex size-full min-h-11 border border-border-primary bg-background-primary py-2 align-middle file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 px-3 bg-gray-300"
                  id="firstName"
                  value=""
                />
              </div>
            </div>
            <div className="grid w-full items-center">
              <label
                className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2"
                for="lastName"
                >Phone</label
              >
              <div className="relative flex size-full items-center">
                <input
                  type="text"
                  className="flex size-full min-h-11 border border-border-primary bg-background-primary py-2 align-middle file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 px-3 bg-gray-300"
                  id="lastName"
                  value=""
                />
              </div>
            </div>
          </div>
          <div className="grid w-full items-center">
            <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2" for="message"
              >How did you hear about Talents?</label
            ><textarea
              className="flex w-full border border-border-primary bg-neutral-white p-3 placeholder:text-neutral focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 min-h-[11.25rem] overflow-auto bg-gray-300"
              id="message"
              placeholder="Type your answer..."
              maxLength={200}
            ></textarea>
          </div>
            <button className="mt-6 flex gap-x-4 md:mt-8 focus-visible:ring-border-primary gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-alternative px-6 py-3 text-[#BF8B30] hover:text-black border-[#BF8B30] rounded-md hover:bg-[#BF8B30]" type="submit">
              Submit
            </button>
        </form>
      </div>
    </section>
  )
}

export default BusinessWaitingList