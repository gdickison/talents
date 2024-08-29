import { cities } from "../../../lib/local-data"

async function AddNewService() {
  const data = await fetch('https://dummyjson.com/products/category-list')
  const services = await data.json()

  return (
    <div className='mt-12 py-2 px-2 w-[375px] mx-auto text-white bg-t-brown font-dm-sans'>
      <h1 className='text-3xl text-center my-4'>New Service Form</h1>
      <form action="submit" className='space-y-4'>
        <div>
          <label for="name" className="block text-sm font-medium leading-6">
            Service Name
            <div className="mt-2">
              <input type="text" name="name" id="name" className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Electric Dog Polishing"/>
            </div>
          </label>
        </div>
        <div>
          <label for="description" className="block text-sm font-medium leading-6">
            Description
            <div className="mt-2">
              <textarea rows={5} name="description" id="description" className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Describe your electric dog polishing service"/>
            </div>
          </label>
        </div>
        <div>
          <label for="category" className="block text-sm font-medium leading-6">
            Select Category
            <div className="mt-2">
              <select rows={5} name="category" id="category" className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 capitalize" placeholder="Describe your electric dog polishing service">
                {services.map((category, idx) => {
                  return <option key={idx} value="category" >{category}</option>
                })}
              </select>
            </div>
          </label>
        </div>
        <div>
          <label for="tags" className="block text-sm font-medium leading-6">
            Service Tags
            <div className="mt-2">
              <input type="text" name="tags" id="tags" className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Enter search tags, separated by commas"/>
            </div>
          </label>
        </div>
        <div>
          <label for="remote" className="flex items-center justify-between text-sm font-medium leading-6">
            <span>Check if the service is offered remotely</span>
            <input type="checkbox" name="remote" id="remote" className="w-6 h-6 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Enter search tags, separated by commas"/>
          </label>
        </div>
        <div>
          <label for="localServiceArea" className="block text-sm font-medium leading-6">
            Select Cities in Your Local Service Area
            <div className="mt-2">
              <select rows={5} name="localServiceArea" id="localServiceArea" className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 capitalize">
                {cities.map((city, idx) => {
                  return <option key={idx} value="city" >{city.name}</option>
                })}
              </select>
            </div>
          </label>
        </div>
        <div>
          <label for="serviceDetails" className="block text-sm font-medium leading-6">
            Additional Service Details
            <div className="mt-2">
              <textarea rows={5} name="serviceDetails" id="description" className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Describe your electric dog polishing service"/>
            </div>
          </label>
        </div>
        <div className="block text-sm font-medium leading-6">
          Primary Image
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 bg-gray-100">
            <div className="text-center">
              <svg className="mx-auto h-12 w-12 text-gray-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
              </svg>
              <div className="mt-4 flex text-sm leading-6">
                <label for="primaryImage" className="relative cursor-pointer rounded-md bg-gray-200 font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  <span className='px-2'>Upload a file</span>
                  <input id="primaryImage" name="primaryImage" type="file" className="sr-only"/>
                </label>
                <p className="pl-1 text-gray-500">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-500">PNG, JPG, WebP up to 1MB</p>
            </div>
          </div>
        </div>
        <div className="block text-sm font-medium leading-6">
          Gallery Images
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 bg-gray-100">
            <div className="text-center">
              <svg className="mx-auto h-12 w-12 text-gray-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
              </svg>
              <div className="mt-4 flex text-sm leading-6">
                <label for="serviceImages" className="relative cursor-pointer rounded-md bg-gray-200 font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  <span className='px-2'>Upload multiple files</span>
                  <input id="serviceImages" name="serviceImages" type="file" className="sr-only"/>
                </label>
                <p className="pl-1 text-gray-500">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-500">PNG, JPG, WebP up to 1MB</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button type="button" className="w-1/2 rounded-md px-3 py-2 mx-auto text-sm font-semibold text-blue-50 border border-t-gold bg-blue-600 hover:bg-blue-700">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddNewService