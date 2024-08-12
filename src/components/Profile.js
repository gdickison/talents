/* eslint-disable @next/next/no-img-element */
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import SmallToggle from './SmallToggle'

export default function Profile({gridrows}) {
  // Set gridrows to 1 for development, 0 for production. 1 will always show the form; 0 will hide the form pending the transition 
  return (
    <>
      <style>
        {`#profile-form-wrapper {
            display: grid;
            grid-template-rows: ${gridrows || 0}fr;
            transition: grid-template-rows 1.0s ease-out;
        }`}
      </style>
      <input id='profile-input' type="checkbox" className='hidden' />
      <label htmlFor="profile-input" className='flex items-center space-x-1 cursor-pointer px-3'>
        <h3>Profile</h3>
        <img id='profile-form-arrow' src="/arrow_down.png" alt="open profile" className='h-6 w-6' />
      </label>
      <div id="profile-form-wrapper" >
        <form id='profile-form' className='px-3 text-left'>
          <div className="space-y-12 font-dm-sans">
            <div className="border-b border-gray-50/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
                <div className="">
                  <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-50">
                    Username
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm">
                      <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="janesmith"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-50 shadow-sm text-base px-1 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-50">
                    About
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-50 shadow-sm text-base px-1 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                      defaultValue={''}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                </div>

                <div className="col-span-full">
                  <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-50">
                    Photo
                  </label>
                  <div className="mt-2 flex items-center gap-x-3">
                    <UserCircleIcon aria-hidden="true" className="h-12 w-12 text-t-tan" />
                    <button
                      type="button"
                      className="w-3/4 rounded-md bg-t-light-blue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-t-gold hover:text-t-brown focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-t-light-blue"
                    >
                      Change
                    </button>
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-50">
                    Cover photo
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-50/25 px-6 py-10">
                    <div className="text-center">
                      <PhotoIcon aria-hidden="true" className="mx-auto h-12 w-12 text-t-tan" />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-t-brown font-semibold text-t-tan focus-within:outline-none focus-within:ring-2 focus-within:ring-t-gray focus-within:ring-offset-2 hover:text-t-gold px-1"
                        >
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1 text-t-tan">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-t-tan">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-50/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-50">Plaid Account Information</h2>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
                <div className="">
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-50">
                    Plaid Username
                  </label>
                  <div className="mt-2">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-50 shadow-sm text-base px-1 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                    />
                  </div>
                </div>

                <div className="">
                  <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-50">
                    Plaid account connection
                  </label>
                  <div className="mt-2">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-50 shadow-sm text-base px-1 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                    />
                  </div>
                </div>

                <div className="">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-50">
                    [Whatever else Plaid needs]
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-50 shadow-sm text-base px-1 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-50/10 pb-12">
              <div className="flex flex-col gap-4">
                <h2 className="text-base font-semibold leading-7 text-gray-50">Personal Information</h2>
                <SmallToggle
                  label={'Toggle to make public'}
                />
              </div>



              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
                <div className="">
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-50">
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-50 shadow-sm text-base px-1 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                    />
                  </div>
                </div>

                <div className="">
                  <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-50">
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-50 shadow-sm text-base px-1 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                    />
                  </div>
                </div>

                <div className="">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-50">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-50 shadow-sm text-base px-1 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                    />
                  </div>
                </div>

                <div className="">
                  <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-50">
                    Country
                  </label>
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-50 shadow-sm text-base px-1 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-50">
                    Street address
                  </label>
                  <div className="mt-2">
                    <input
                      id="street-address"
                      name="street-address"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-50 shadow-sm text-base px-1 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                    />
                  </div>
                </div>

                <div className="">
                  <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-50">
                    City
                  </label>
                  <div className="mt-2">
                    <input
                      id="city"
                      name="city"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-50 shadow-sm text-base px-1 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                    />
                  </div>
                </div>

                <div className="">
                  <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-50">
                    State / Province
                  </label>
                  <div className="mt-2">
                    <input
                      id="region"
                      name="region"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-50 shadow-sm text-base px-1 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                    />
                  </div>
                </div>

                <div className="">
                  <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-50">
                    ZIP / Postal code
                  </label>
                  <div className="mt-2">
                    <input
                      id="postal-code"
                      name="postal-code"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-50 shadow-sm text-base px-1 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-50/10 pb-12">
            <div className="flex flex-col gap-4">
                <h2 className="text-base font-semibold leading-7 text-gray-50">Business Information</h2>
                <SmallToggle
                  label={'Toggle to make public'}
                />
              </div>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
                <div className="">
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-50">
                    Business name
                  </label>
                  <div className="mt-2">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-50 shadow-sm text-base px-1 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                    />
                  </div>
                </div>

                <div className="">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-50">
                    Busienss email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-50 shadow-sm text-base px-1 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                    />
                  </div>
                </div>

                <div className="">
                  <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-50">
                    State where business is organized
                  </label>
                  <div className="mt-2">
                    <input
                      id="state-of-organization"
                      name="state-of-organization"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-50 shadow-sm text-base px-1 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                    />
                  </div>
                </div>

                <div className="">
                  <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-50">
                    EIN / TIN
                  </label>
                  <div className="mt-2">
                    <input
                      id="ein"
                      name="ein"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-50 shadow-sm text-base px-1 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-50">
                    Street address
                  </label>
                  <div className="mt-2">
                    <input
                      id="street-address"
                      name="street-address"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-50 shadow-sm text-base px-1 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                    />
                  </div>
                </div>

                <div className="">
                  <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-50">
                    City
                  </label>
                  <div className="mt-2">
                    <input
                      id="city"
                      name="city"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-50 shadow-sm text-base px-1 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                    />
                  </div>
                </div>

                <div className="">
                  <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-50">
                    State / Province
                  </label>
                  <div className="mt-2">
                    <input
                      id="region"
                      name="region"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-50 shadow-sm text-base px-1 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                    />
                  </div>
                </div>

                <div className="">
                  <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-50">
                    ZIP / Postal code
                  </label>
                  <div className="mt-2">
                    <input
                      id="postal-code"
                      name="postal-code"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-50 shadow-sm text-base px-1 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6 font-dm-sans">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-50">
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-t-light-blue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-t-gold hover:text-t-brown focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-t-light-blue"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
