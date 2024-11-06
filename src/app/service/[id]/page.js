/* eslint-disable @next/next/no-img-element */
import { services } from "../../../../lib/local-data"
import CategoryPill from "@/components/CategoryPill"
import Link from "next/link"

function Service({ params }) {
  const service = services.filter(service => service.id === Number(params.id))

  return (
    <div className='flex flex-col items-center mt-12 relative w-[375px] mx-auto text-white bg-t-brown font-dm-sans'>
      <div className="text-white font-normal">
        <div className="py-2 px-3">
          <div className="flex justify-between items-center">
            <p className="uppercase text-sm">Service</p>
            <CategoryPill
              category={service[0].service_category}
            />
          </div>
          <div className="flex justify-center items-center flex-col gap-8">
            <div className="w-full items-center">
              <h2 className="font-marcellus text-3xl leading-9 mt-4 text-t-text">{service[0].service_name}</h2>
              <div className="w-full mt-7 bg-transparent">
                <div className="bg-gray-800 rounded-lg" >
                  <img src={service[0].primary_image} alt={service[0].service_name} className="w-full bg-transparent rounded-lg" />
                </div>
              </div>
              <div className="font-montserrat font-normal text-base leading-6 mt-7 mx-2 px-2 py-2 border-l-[6px] border-yellow-300/10 bg-yellow-200/5 rounded-r-md">
                <p>
                  {service[0].service_description}
                </p>
                <div className="space-y-2">
                  <div className="mt-10">
                    <p>Service Area</p>
                  </div>
                  {service[0].service_area.length > 0 ?
                    <div className="leading-5">
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
                  <p className="text-base leading-5">{service[0].our_story}</p>
                </div>
                <div className="mt-10 space-y-2">
                  <p>Additonal Details</p>
                  <p className="text-base leading-5">{service[0].additional_details}</p>
                </div>
              </div>
              <div className="mt-10 font-montserrat">
                <p>Contact Us</p>
                <p>
                  <Link href={`tel:+${service[0].phone_number}`} target="_blank" className="text-base">{service[0].phone_number}</Link>
                </p>
                <p>
                  <Link href={`mailto: ${services[0].email_address}`} target="_blank" className="text-base">{services[0].email_address}</Link>
                </p>
                <p>
                  <Link href={services[0].website_url} target="_blank" className="text-base">{services[0].website_url}</Link>
                </p>
              </div>
            </div>
            <div className=" w-full flex flex-row gap-4">
              <div className=" w-full grid grid-cols-1 gap-6">
              {service[0].gallery_images.map((image, idx) => {
                return (
                  <div key={idx} className=" w-full bg-gray-100 flex justify-center items-center rounded-lg" >
                    <img src={image} alt={service[0].service_name} className="rounded-lg" />
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