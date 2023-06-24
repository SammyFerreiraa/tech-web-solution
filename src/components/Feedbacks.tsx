import Slider from '@/slider/Slider'
import Image from 'next/image'

import { SwiperProps, SwiperSlide } from 'swiper/react'

const Feedbacks = () => {
  const settings: SwiperProps = {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    navigation: false,
    loop: true,
  }
  return (
    <section>
      <Slider settings={settings}>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center">
            <div className="w-2/3  bg-[#e6e9ec] p-2 leading-snug text-[#7A7A7A] sm:leading-normal md:text-lg">
              Estamos extremamente satisfeitos com o trabalho realizado pela
              TechWeb Solutions. Eles desenvolveram um site incrível para nós,
              com um design moderno e responsivo. A equipe foi altamente
              profissional e atenciosa em entender nossas necessidades. O site
              deles ajudou a impulsionar nossa presença online e recebemos
              elogios de nossos clientes sobre a experiência do usuário.
              Recomendamos fortemente a TechWeb Solutions para qualquer empresa
              que precise de serviços de desenvolvimento web
            </div>
            <div className="mt-6 flex flex-row items-center justify-center gap-2 ">
              <Image
                src="/empA.jpg"
                className="brightness-100"
                alt="logo"
                width={60}
                height={60}
              />
              <div className="flex flex-col items-start justify-start text-xs md:text-sm">
                <p className="font-bold text-[#7a7a7a]">Desenvolvimento</p>
                <p className="text-sky-600">Varejo</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center">
            <div className=" w-2/3 bg-[#e6e9ec] p-2 leading-snug text-[#7A7A7A] sm:leading-normal md:text-lg">
              Trabalhar com a TechWeb Solutions foi uma experiência incrível.
              Eles nos ajudaram a desenvolver um site altamente funcional e
              esteticamente atraente para nossa empresa. A equipe de
              desenvolvimento front-end mostrou grande habilidade técnica e
              profissionalismo. Eles foram receptivos às nossas solicitações e
              cumpriram todos os prazos estabelecidos. Estamos impressionados
              com a qualidade do trabalho entregue e recomendamos a TechWeb
              Solutions para qualquer empresa que precise de serviços de
              desenvolvimento web de alto nível.
            </div>
            <div className="mt-6 flex flex-row items-center justify-center gap-2 ">
              <Image
                src="/empB.jpg"
                className="brightness-100"
                alt="logo"
                width={60}
                height={60}
              />
              <div className="flex flex-col items-start justify-start text-xs md:text-sm">
                <p className="font-bold text-[#7a7a7a]">APIs</p>
                <p className="text-sky-600">Arquitetura</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center">
            <div className=" w-2/3 bg-[#e6e9ec] p-2 leading-snug text-[#7A7A7A] sm:leading-normal md:text-lg">
              Trabalhar com a TechWeb Solutions foi uma experiência incrível.
              Eles nos ajudaram a desenvolver um site altamente funcional e
              esteticamente atraente para nossa empresa. A equipe de
              desenvolvimento front-end mostrou grande habilidade técnica e
              profissionalismo. Eles foram receptivos às nossas solicitações e
              cumpriram todos os prazos estabelecidos. Estamos impressionados
              com a qualidade do trabalho entregue e recomendamos a TechWeb
              Solutions para qualquer empresa que precise de serviços de
              desenvolvimento web de alto nível.
            </div>
            <div className="mt-6 flex flex-row items-center justify-center gap-2 ">
              <Image
                src="/empC.jpg"
                className="brightness-100"
                alt="logo"
                width={60}
                height={60}
              />
              <div className="flex flex-col items-start justify-start text-xs md:text-sm">
                <p className="font-bold text-[#7a7a7a]">Web App</p>
                <p className="text-sky-600">Eletrônicos</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Slider>
    </section>
  )
}

export default Feedbacks
