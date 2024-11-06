/* eslint-disable @next/next/no-img-element */
import { services } from "../../../../lib/local-data"

function Service({ params }) {
  const service = services.filter(service => service.id === Number(params.id))

  return (
    <div className='flex flex-col items-center mt-12 relative w-[375px] mx-auto text-white bg-t-brown font-dm-sans'>
      <div className="text-white font-normal">
        <div className="py-2 px-3">
          <p className="text-right text-sm capitalize h-4">{service[0].service_category}</p>
          <div className="flex justify-center items-center flex-col gap-8">
            <div className="w-full items-center">
              <h2 className="font-dm-sans text-3xl leading-9 mt-4">{service[0].service_name}</h2>
              <div className="w-full mt-7 bg-transparent">
                <div className="bg-gray-800" >
                  <img src={service[0].primary_image} alt={service[0].service_name} className="w-full bg-transparent" />
                </div>
              </div>
              <p className="font-dm-sans font-normal text-base leading-6  mt-7">{service[0].service_description}</p>
              <div className="space-y-2">
                <div className="mt-10">
                  <p>Service Area</p>
                </div>
              {service[0].service_area.length > 0 ?
                <div className="">
                  Locally we serve {service[0].service_area.map((area, idx) => {
                    return (
                      <span key={idx}>{area}{idx + 1 !== service[0].service_area.length ? ', ' : null}</span>
                    )
                  })}
                </div>
              : null}
              {service[0].remote_services ?
                <p className="text-base">We {service[0].service_area.length > 0 ? 'also' : null} offer remote service</p>
              : null
              }
              </div>
              <div className="mt-10 space-y-2">
                <p>About {service[0].service_name}</p>
                <p className="text-base">{service[0].our_story}</p>
              </div>
              <div className="mt-10 space-y-2">
                <p>Additonal Details</p>
                <p className="text-base">{service[0].additional_details}</p>
              </div>
              <div className="mt-10 space-y-1">
                <p>Contact Us</p>
                <p className="text-base">{service[0].phone_number}</p>
                <p className="text-base">{services[0].email_address}</p>
                <p className="text-base">{services[0].website_url}</p>
              </div>
            </div>
            <div className=" w-full flex flex-row gap-4">
              <div className=" w-full grid grid-cols-1 gap-6">
              {service[0].gallery_images.map((image, idx) => {
                return (
                  <div key={idx} className=" w-full bg-gray-100 flex justify-center items-center" >
                    <img src={image} alt={service[0].service_name}  />
                  </div>
                )
              })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service