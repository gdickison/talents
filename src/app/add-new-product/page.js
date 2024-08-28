import React from 'react'

async function AddNewProduct() {
  const data = await fetch('https://dummyjson.com/products/category-list')
  const categories = await data.json()

  return (
    <div className='mt-12 py-2 px-2 w-[375px] mx-auto text-white bg-t-brown font-dm-sans'>
      <h1 className='text-3xl text-center my-4'>New Product Form</h1>
      <form action="submit" className='space-y-4'>
        <div>
          <label for="name" class="block text-sm font-medium leading-6">
            Product Name
            <div class="mt-2">
              <input type="text" name="name" id="name" className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Electric Dog Polisher"/>
            </div>
          </label>
        </div>
        <div>
          <label for="description" class="block text-sm font-medium leading-6">
            Description
            <div class="mt-2">
              <textarea rows={5} name="description" id="description" className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Describe your electric dog polisher"/>
            </div>
          </label>
        </div>
        <div>
          <label for="category" class="block text-sm font-medium leading-6">
            Select Category
            <div class="mt-2">
              <select rows={5} name="category" id="category" className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 capitalize" placeholder="Describe your electric dog polishing service">
                {categories.map((category, idx) => {
                  return <option key={idx} value="category" >{category}</option>
                })}
              </select>
            </div>
          </label>
        </div>
        <div>
          <label for="tags" class="block text-sm font-medium leading-6">
            Product Tags
            <div class="mt-2">
              <input type="text" name="tags" id="tags" className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Enter search tags, separated by commas"/>
            </div>
          </label>
        </div>
        <div>
          <label for="brand" class="block text-sm font-medium leading-6">
            Brand
            <div class="mt-2">
              <input type="text" name="brand" id="brand" className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Enter the product's brand name"/>
            </div>
          </label>
        </div>
        <div>
          <label for="price" class="block text-sm font-medium leading-6">
            Price
            <div class="relative mt-2 rounded-md shadow-sm">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span class="text-gray-500 sm:text-sm">$</span>
              </div>
              <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0.00" aria-describedby="price-currency"/>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <span class="text-gray-500 sm:text-sm" id="price-currency">USD</span>
              </div>
            </div>
          </label>
        </div>
        <div>
          <label for="sku" class="block text-sm font-medium leading-6">
            SKU
            <div class="mt-2">
              <input type="text" name="sku" id="sku" className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Enter the product's sku"/>
            </div>
          </label>
        </div>
        <div>
          <label for="weight" class="block text-sm font-medium leading-6">
            Shipping Weight
            <div class="mt-2">
              <input type="number" name="weight" id="weight" className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Enter the product's shipping weight in lbs"/>
            </div>
          </label>
        </div>
        <div>
          <label for="height" class="block text-sm font-medium leading-6">
            Height
            <div class="mt-2">
              <input type="number" name="height" id="height" className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Enter the product's height in inches"/>
            </div>
          </label>
        </div>
        <div>
          <label for="width" class="block text-sm font-medium leading-6">
            Width
            <div class="mt-2">
              <input type="number" name="width" id="width" className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Enter the product's width in inches"/>
            </div>
          </label>
        </div>
        <div>
          <label for="depth" class="block text-sm font-medium leading-6">
            Depth / Length
            <div class="mt-2">
              <input type="number" name="depth" id="depth" className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Enter the product's depth or length in inches"/>
            </div>
          </label>
        </div>
        <div>
          <label for="warrantyInformation" class="block text-sm font-medium leading-6">
            Warranty Information
            <div class="mt-2">
              <textarea rows={5} name="warrantyInformation" id="warrantyInformation" className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="E.g., '30 day money-back guarantee'"/>
            </div>
          </label>
        </div>
        <div>
          <label for="shippingInformation" class="block text-sm font-medium leading-6">
            Shipping Information
            <div class="mt-2">
              <textarea rows={5} name="shippingInformation" id="shippingInformation" className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="E.g., 'Ships in 1-3 business days'"/>
            </div>
          </label>
        </div>
        <div>
          <label for="returnPolicy" class="block text-sm font-medium leading-6">
            Return Policy
            <div class="mt-2">
              <textarea rows={5} name="returnPolicy" id="returnPolicy" className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="E.g., 'Please call first to arrange for returns'"/>
            </div>
          </label>
        </div>
        <div>
          <label for="barcode" class="block text-sm font-medium leading-6">
            Barcode Number
            <div class="mt-2">
              <input type="text" name="barcode" id="barcode" className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="1234567890"/>
            </div>
          </label>
        </div>
        <div class="block text-sm font-medium leading-6">
          QR Code
          <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 bg-gray-100">
            <div class="text-center">
              <svg class="mx-auto h-12 w-12 text-gray-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
              </svg>
              <div class="mt-4 flex text-sm leading-6">
                <label for="qrCode" class="relative cursor-pointer rounded-md bg-gray-200 font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  <span className='px-2'>Upload a file</span>
                  <input id="qrCode" name="qrCode" type="file" class="sr-only"/>
                </label>
                <p class="pl-1 text-gray-500">or drag and drop</p>
              </div>
              <p class="text-xs leading-5 text-gray-500">PNG, JPG, WebP up to 250k</p>
            </div>
          </div>
        </div>
        <div class="block text-sm font-medium leading-6">
          Product Images
          <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 bg-gray-100">
            <div class="text-center">
              <svg class="mx-auto h-12 w-12 text-gray-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
              </svg>
              <div class="mt-4 flex text-sm leading-6">
                <label for="productImages" class="relative cursor-pointer rounded-md bg-gray-200 font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  <span className='px-2'>Upload multiple files</span>
                  <input id="productImages" name="productImages" type="file" class="sr-only"/>
                </label>
                <p class="pl-1 text-gray-500">or drag and drop</p>
              </div>
              <p class="text-xs leading-5 text-gray-500">PNG, JPG, WebP up to 1MB</p>
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

export default AddNewProduct