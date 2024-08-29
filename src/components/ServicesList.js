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
              <Link href={`/service/${service.id}`} className="space-y-6">
                <div className="flex flex-col gap-5">
                  <p className="text-left text-xs capitalize h-4">{service.service_category}</p>
                  <img alt="" src={service.primary_image} className="h-52 w-52 flex-none bg-gray-800 mx-auto" />
                  <h3 className="text-lg text-wrap text-left">{service.service_name}</h3>
                </div>
                <div>
                  <p className="w-full text-wrap text-left text-base">{service.service_description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
