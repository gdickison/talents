import React from 'react'

function AddNewService() {
  return (
    <div className='flex flex-col items-center mt-12 py-2 relative w-[375px] mx-auto text-white bg-t-brown font-dm-sans'>
      <h2>Add New Service</h2>
      <div id='service'>Service Name</div>
      <div id="description">Description</div>
      <div id="category">Category (Select)</div>
      <div id="tags">Tags (multiple / array)</div>
      <div id="remote">Remote (checkbox)</div>
      <div id="serviceArea">Service Area (select one or more cities)</div>
      <div id="bannerImage">Banner / Primary Image</div>
      <div id="galleryImages">Service / Gallery Images (Upload multiple / array)</div>
      <p>Business information will be pulled in from profile.</p>
    </div>
  )
}

export default AddNewService