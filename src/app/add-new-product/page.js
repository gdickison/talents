import React from 'react'

function AddNewProduct() {
  return (
    <div className='flex flex-col items-center mt-12 py-2 relative w-[375px] mx-auto text-white bg-t-brown font-dm-sans'>
      <h1>Add New Product</h1>
      <div id='title'>Product Name</div>
      <div id="description">Description</div>
      <div id="category">Category (Select)</div>
      <div id="tags">Tags (multiple / array)</div>
      <div id="brand">Brand</div>
      <div id="sku">SKU</div>
      <div id="weight">Weight (oz)</div>
      <div id="height">Height (inches)</div>
      <div id="width">Width (inches)</div>
      <div id="depth">Depth / Length (inches)</div>
      <div id="warrantyInformation">Warranty Information</div>
      <div id="shippingInformation">Shipping Information</div>
      <div id="returnPolicy">Return Policy</div>
      <div id="barcode">Barcode No.</div>
      <div id="qrCode">QR Code (image)</div>
      <div id="images">Images (Upload multiple / array)</div>
    </div>
  )
}

export default AddNewProduct