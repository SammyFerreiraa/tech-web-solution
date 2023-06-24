import React from 'react'
import { ItemsService } from './ItemsService'

const Services = () => (
  <section
    id="service"
    className="mb-24 flex flex-col gap-14 px-14 xl:flex-row xl:gap-32"
  >
    <div className="flex min-w-fit flex-row items-center justify-center gap-4">
      <div className="h-14 w-2 bg-sky-600"></div>
      <p className=" flex-1 border-l-sky-700 text-2xl font-black">
        Serviços de TI
      </p>
    </div>

    <div>
      <ItemsService />

      <div className="mb-12 flex h-1 w-full bg-sky-600 sm:hidden"></div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <button className="min-w-[130px] rounded bg-sky-600 pb-4 pl-7 pr-7 pt-4 text-white transition-colors hover:bg-sky-700">
          Desenvolvimento
        </button>
        <button className="min-w-[130px] rounded bg-sky-600 pb-4 pl-7 pr-7 pt-4 text-white transition-colors hover:bg-sky-700">
          Design
        </button>
        <button className="min-w-[130px] rounded bg-sky-600 pb-4 pl-7 pr-7 pt-4 text-white transition-colors hover:bg-sky-700">
          Apps
        </button>
        <button className="min-w-[130px] rounded bg-sky-600 pb-4 pl-7 pr-7 pt-4 text-white transition-colors hover:bg-sky-700">
          APIs
        </button>
      </div>
    </div>
  </section>
)

export default Services
