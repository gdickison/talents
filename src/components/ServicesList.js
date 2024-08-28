/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { services } from "../../lib/local-data"

export default async function ServicesList () {

  return (
    <div className="">
      <h4 className="text-left px-3 font-marion">Services</h4>
      <div className="font-dm-sans">
        <p className="px-3 text-base">Click a service for details.</p>
        <ul role="list" className="px-5 m-1 flex gap-6 py-5 overflow-auto whitespace-nowrap">
          {services.length > 0 && services.map((service, idx) => (
            <li key={idx} className="min-w-[18rem] h-[27rem] py-2 px-3 bg-t-med-brown rounded-2xl">
              <Link href={`/service/${service.id}`} className="">
                <div className="flex flex-col gap-3 items-stretch">
                  <p className="text-left text-sm capitalize h-4">{service.service_category}</p>
                  <img alt="" src={service.primary_image} className="h-52 w-52 flex-none bg-gray-800 mx-auto" />
                  <h3 className="text-base font-marion text-wrap text-left min-h-20">{service.service_name}</h3>
                  <p className="text-t-light-blue text-left tracking-wide text-base">Rating:  ({service.reviews.length} reviews)</p>
                  {/* <p className="text-left">${product.price.toFixed(2)}</p> */}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
