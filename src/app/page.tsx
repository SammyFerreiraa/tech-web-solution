'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Services from '@/components/Services'
import TopHome from '@/components/TopHome'
import Feedbacks from '@/components/Feedbacks'

export default function Home() {
  useEffect(() => {
    AOS.init()
  })

  return (
    <main className="flex flex-col">
      <div className="h-[81px]"></div>
      <TopHome />
      <div
        className="flex flex-col items-center justify-center px-2 pb-12 pt-12 xl:pt-0"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="500"
      >
        <h3 className="p-3 pb-12 text-center text-[24px] font-black sm:text-[28px]">
          ESTRATÉGIA PARA O SUCESSO
        </h3>
        <p className="bold max-[50%]: max-w-4xl text-center text-[15px] font-normal sm:text-[17px]">
          Como empresa fictícia, a TechWeb Solutions é especializada em
          desenvolvimento web e oferece uma variedade de serviços para ajudar as
          empresas a estabelecer uma forte presença online. Nossa principal área
          de atuação é o desenvolvimento front-end, focando em criar sites
          bonitos, funcionais e responsivos.
        </p>
      </div>

      <Services />

      <div className="relative mb-24 h-24 w-full overflow-hidden">
        <div className="absolute -left-2 -top-10 z-40 h-3/4 w-[110vw] -rotate-2 bg-sky-950"></div>
        <div className="absolute -top-2 z-30 h-3/4 w-[110vw] bg-sky-700"></div>
        <div className="absolute top-1 z-20  h-full w-[110vw] rotate-2 bg-sky-500"></div>
        <div className="absolute top-[75%] z-10 h-3/4 w-full bg-sky-300"></div>
      </div>

      <Feedbacks />
    </main>
  )
}
