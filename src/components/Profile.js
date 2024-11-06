/* eslint-disable @next/next/no-img-element */
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import SmallToggle from './SmallToggle'

export default function Profile({gridrows}) {
  // Set gridrows to 1 for development, 0 for production. 1 will always show the form; 0 will hide the form pending the transition 
  return (
    <div className='mb-24'>
      <h1 className='font-marcellus text-t-text text-left px-3 text-5xl'>Profile</h1>
      <div id="profile-form-wrapper" >
        <form id='profile-form' className='px-3 text-left'>
          <div className="space-y-12 font-dm-sans">
            <div className="border-b border-gray-50/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
                <div className="">
                  <label htmlFor="username" className="block text-[1rem] font-medium leading-6 text-t-umber font-montserrat">
                    Username
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm">
                      <input
                        id="username"
                        name="username"
                        type="text"
                        className="block w-full rounded-md border-0 p-2 text-gray-50 shadow-sm text-base placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="about" className="block text-[1rem] font-medium leading-6 text-t-umber font-montserrat">
                    About Me
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="block w-full rounded-md border-0 p-2 text-gray-50 shadow-sm text-base placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                      defaultValue={''}
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="photo" className="block text-[1rem] font-medium leading-6 text-t-umber font-montserrat">
                    Photo
                  </label>
                  <div className="mt-2 flex items-center justify-between">
                    <UserCircleIcon aria-hidden="true" className="h-12 w-12 text-t-umber" />
                    <button
                      type="button"
                      className="w-3/4 rounded-md focus-visible:ring-border-primary gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative font-montserrat text-[1rem] p-2 text-t-umber hover:text-black border-t-tan hover:bg-t-tan"
                    >
                      Change
                    </button>
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="cover-photo" className="block text-[1rem] font-medium leading-6 text-t-umber font-montserrat">
                    Cover photo
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-50/25 px-6 py-10">
                    <div className="text-center">
                      <PhotoIcon aria-hidden="true" className="mx-auto h-12 w-12 text-t-umber" />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-t-brown font-semibold text-t-umber focus-within:outline-none focus-within:ring-2 focus-within:ring-t-gray focus-within:ring-offset-2 hover:text-t-umber px-1"
                        >
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1 text-t-umber">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-t-umber">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PLAID ACCOUNT INPUTS */}
            <div className="border-b border-gray-50/10 pb-12">
              {/* <h2 className="block text-[1.15rem] font-medium leading-6 text-t-umber font-montserrat">Plaid Account Information</h2> */}
              <style>
                {`#plaid-form-wrapper {
                    display: grid;
                    grid-template-rows: ${gridrows || 0}fr;
                    transition: grid-template-rows 0.5s ease-out;
                }`}
              </style>
              <input id='plaid-input' type="checkbox" className='hidden' />
              <label htmlFor="plaid-input" className='flex items-center space-x-1 cursor-pointer'>
                <h4 className='block text-2xl leading-6 text-t-umber font-marion'>Plaid Account Information</h4>
                <img id='plaid-form-arrow' src="/arrow_down.png" alt="open plaid form" className='h-6 w-6' />
              </label>
              <div id="plaid-form-wrapper">
                <div id="plaid-form">
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
                    <div className="">
                      <label htmlFor="first-name" className="block text-[1rem] font-medium leading-6 text-t-umber font-montserrat">
                        Plaid Username
                      </label>
                      <div className="mt-2">
                        <input
                          id="first-name"
                          name="first-name"
                          type="text"
                          className="block w-full rounded-md border-0 p-2 text-gray-50 shadow-sm text-base placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                        />
                      </div>
                    </div>

                    <div className="">
                      <label htmlFor="last-name" className="block text-[1rem] font-medium leading-6 text-t-umber font-montserrat">
                        Plaid account connection
                      </label>
                      <div className="mt-2">
                        <input
                          id="last-name"
                          name="last-name"
                          type="text"
                          className="block w-full rounded-md border-0 p-2 text-gray-50 shadow-sm text-base placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                        />
                      </div>
                    </div>

                    <div className="">
                      <label htmlFor="email" className="block text-[1rem] font-medium leading-6 text-t-umber font-montserrat">
                        [Whatever else Plaid needs]
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          className="block w-full rounded-md border-0 p-2 text-gray-50 shadow-sm text-base placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PERSONAL PROFILE INPUTS */}
            <div className="border-b border-gray-50/10 pb-12">
              <style>
                {`#personal-form-wrapper {
                    display: grid;
                    grid-template-rows: ${gridrows || 0}fr;
                    transition: grid-template-rows 0.5s ease-out;
                }`}
              </style>
              <input id='personal-input' type="checkbox" className='hidden' />
              <label htmlFor="personal-input" className='flex items-center space-x-1 cursor-pointer'>
                <h2 className="block text-2xl leading-6 text-t-umber font-marion">Personal Information</h2>
                <img id='personal-form-arrow' src="/arrow_down.png" alt="open personal form" className='h-6 w-6' />
              </label>
              <div id="personal-form-wrapper">
                <div id="personal-form">
                  <div className="mt-10 flex flex-col gap-4">
                    <SmallToggle
                      label={'Toggle to make public'}
                    />
                  </div>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
                    <div className="">
                      <label htmlFor="first-name" className="block text-[1rem] font-medium leading-6 text-t-umber font-montserrat">
                        First name
                      </label>
                      <div className="mt-2">
                        <input
                          id="first-name"
                          name="first-name"
                          type="text"
                          className="block w-full rounded-md border-0 p-2 text-gray-50 shadow-sm text-base placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                        />
                      </div>
                    </div>

                    <div className="">
                      <label htmlFor="last-name" className="block text-[1rem] font-medium leading-6 text-t-umber font-montserrat">
                        Last name
                      </label>
                      <div className="mt-2">
                        <input
                          id="last-name"
                          name="last-name"
                          type="text"
                          className="block w-full rounded-md border-0 p-2 text-gray-50 shadow-sm text-base placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                        />
                      </div>
                    </div>

                    <div className="">
                      <label htmlFor="email" className="block text-[1rem] font-medium leading-6 text-t-umber font-montserrat">
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          className="block w-full rounded-md border-0 p-2 text-gray-50 shadow-sm text-base placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                        />
                      </div>
                    </div>

                    <div className="">
                      <label htmlFor="country" className="block text-[1rem] font-medium leading-6 text-t-umber font-montserrat">
                        Country
                      </label>
                      <div className="mt-2">
                        <select
                          id="country"
                          name="country"
                          className="block w-full rounded-md border-0 p-2 text-gray-50 shadow-sm text-base placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label htmlFor="street-address" className="block text-[1rem] font-medium leading-6 text-t-umber font-montserrat">
                        Street address
                      </label>
                      <div className="mt-2">
                        <input
                          id="street-address"
                          name="street-address"
                          type="text"
                          className="block w-full rounded-md border-0 p-2 text-gray-50 shadow-sm text-base placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                        />
                      </div>
                    </div>

                    <div className="">
                      <label htmlFor="city" className="block text-[1rem] font-medium leading-6 text-t-umber font-montserrat">
                        City
                      </label>
                      <div className="mt-2">
                        <input
                          id="city"
                          name="city"
                          type="text"
                          className="block w-full rounded-md border-0 p-2 text-gray-50 shadow-sm text-base placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                        />
                      </div>
                    </div>

                    <div className="">
                      <label htmlFor="region" className="block text-[1rem] font-medium leading-6 text-t-umber font-montserrat">
                        State / Province
                      </label>
                      <div className="mt-2">
                        <input
                          id="region"
                          name="region"
                          type="text"
                          className="block w-full rounded-md border-0 p-2 text-gray-50 shadow-sm text-base placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                        />
                      </div>
                    </div>

                    <div className="">
                      <label htmlFor="postal-code" className="block text-[1rem] font-medium leading-6 text-t-umber font-montserrat">
                        ZIP / Postal code
                      </label>
                      <div className="mt-2">
                        <input
                          id="postal-code"
                          name="postal-code"
                          type="text"
                          className="block w-full rounded-md border-0 p-2 text-gray-50 shadow-sm text-base placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BUSINESS INFORMATION INPUTS */}
            <div className="border-b border-gray-50/10 pb-12">
              <style>
                {`#business-form-wrapper {
                    display: grid;
                    grid-template-rows: ${gridrows || 0}fr;
                    transition: grid-template-rows 0.75s ease-out;
                }`}
              </style>
              <input id='business-input' type="checkbox" className='hidden' />
              <label htmlFor="business-input" className='flex items-center space-x-1 cursor-pointer'>
                <h2 className="block text-2xl leading-6 text-t-umber font-marion">Business Information</h2>
                <img id='business-form-arrow' src="/arrow_down.png" alt="open business form" className='h-6 w-6' />
              </label>
              <div id="business-form-wrapper">
                <div id="business-form">
                  <div className="mt-10 flex flex-col gap-4">
                    <SmallToggle
                      label={'Toggle to make public'}
                    />
                  </div>

                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
                    <div className="">
                      <label htmlFor="first-name" className="block text-[1rem] font-medium leading-6 text-t-umber font-montserrat">
                        Business name
                      </label>
                      <div className="mt-2">
                        <input
                          id="first-name"
                          name="first-name"
                          type="text"
                          className="block w-full rounded-md border-0 p-2 text-gray-50 shadow-sm text-base placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                        />
                      </div>
                    </div>

                    <div className="">
                      <label htmlFor="email" className="block text-[1rem] font-medium leading-6 text-t-umber font-montserrat">
                        Busienss email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          className="block w-full rounded-md border-0 p-2 text-gray-50 shadow-sm text-base placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                        />
                      </div>
                    </div>

                    <div className="">
                      <label htmlFor="country" className="block text-[1rem] font-medium leading-6 text-t-umber font-montserrat">
                        State where business is organized
                      </label>
                      <div className="mt-2">
                        <input
                          id="state-of-organization"
                          name="state-of-organization"
                          type="text"
                          className="block w-full rounded-md border-0 p-2 text-gray-50 shadow-sm text-base placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                        />
                      </div>
                    </div>

                    <div className="">
                      <label htmlFor="country" className="block text-[1rem] font-medium leading-6 text-t-umber font-montserrat">
                        EIN / TIN
                      </label>
                      <div className="mt-2">
                        <input
                          id="ein"
                          name="ein"
                          type="text"
                          className="block w-full rounded-md border-0 p-2 text-gray-50 shadow-sm text-base placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                        />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label htmlFor="street-address" className="block text-[1rem] font-medium leading-6 text-t-umber font-montserrat">
                        Street address
                      </label>
                      <div className="mt-2">
                        <input
                          id="street-address"
                          name="street-address"
                          type="text"
                          className="block w-full rounded-md border-0 p-2 text-gray-50 shadow-sm text-base placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                        />
                      </div>
                    </div>

                    <div className="">
                      <label htmlFor="city" className="block text-[1rem] font-medium leading-6 text-t-umber font-montserrat">
                        City
                      </label>
                      <div className="mt-2">
                        <input
                          id="city"
                          name="city"
                          type="text"
                          className="block w-full rounded-md border-0 p-2 text-gray-50 shadow-sm text-base placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                        />
                      </div>
                    </div>

                    <div className="">
                      <label htmlFor="region" className="block text-[1rem] font-medium leading-6 text-t-umber font-montserrat">
                        State / Province
                      </label>
                      <div className="mt-2">
                        <input
                          id="region"
                          name="region"
                          type="text"
                          className="block w-full rounded-md border-0 p-2 text-gray-50 shadow-sm text-base placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                        />
                      </div>
                    </div>

                    <div className="">
                      <label htmlFor="postal-code" className="block text-[1rem] font-medium leading-6 text-t-umber font-montserrat">
                        ZIP / Postal code
                      </label>
                      <div className="mt-2">
                        <input
                          id="postal-code"
                          name="postal-code"
                          type="text"
                          className="block w-full rounded-md border-0 p-2 text-gray-50 shadow-sm text-base placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-t-orange outline-t-orange bg-t-brown"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6 font-dm-sans">
            <button type="button" className="font-montserrat text-t-umber leading-6 text-[1rem]">
              Cancel
            </button>
            <button
              type="submit"
              className="w-3/4 rounded-md font-montserrat focus-visible:ring-border-primary gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative p-2 text-t-umber text-[1rem] hover:text-black border-t-tan hover:bg-t-tan"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
