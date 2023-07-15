'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Infor = () => {
  useEffect(() => {
    AOS.init()
  })
  return (
    <div
      className="flex flex-col items-center justify-center px-2 pb-12 pt-12 xl:mb-24 xl:pt-0"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="500"
    >
      <h3 className="p-3 pb-12 text-center text-[24px] font-black  sm:text-[28px]">
        ESTRATÉGIA PARA O SUCESSO
      </h3>
      <p
        id="service"
        className="max-[50%]: max-w-4xl text-center text-[15px] font-normal sm:text-[17px]"
      >
        Como empresa fictícia, a TechWeb Solutions é especializada em
        desenvolvimento web e oferece uma variedade de serviços para ajudar as
        empresas a estabelecer uma forte presença online. Nossa principal área
        de atuação é o desenvolvimento front-end, focando em criar sites
        bonitos, funcionais e responsivos.
      </p>
    </div>
  )
}

export default Infor
