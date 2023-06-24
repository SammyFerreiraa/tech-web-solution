import Slider from '@/slider/Slider'
import Image from 'next/image'
import { SwiperProps, SwiperSlide } from 'swiper/react'

const TopHome = () => {
  const settings: SwiperProps = {
    spaceBetween: 0,
    effect: 'fade',
    slidesPerView: 1,
    navigation: true,
    loop: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
  }
  return (
    <div className="hidden h-[screen] w-full overflow-hidden xl:flex">
      <Slider settings={settings}>
        <SwiperSlide className="relative">
          <Image
            src="/tec1.jpg"
            alt="img1"
            width={5000}
            height={3333}
            className="relative -z-10 h-[90vh] w-full"
          />
          <p className="absolute left-24 top-14 text-6xl font-extrabold text-gray-100">
            Desenvolvimento Web
          </p>

          <p className="absolute left-28 top-32 max-w-[50%] text-2xl font-medium leading-normal text-gray-100">
            <span className="font-extrabold">-</span> Sites Responsivos <br />{' '}
            <span className="font-extrabold">-</span> Desenvolvimento Mobile{' '}
            <br />
            <span className="font-extrabold">-</span> Tecnologias Atuais <br />
            <br /> <br />
            <span className="font-normal">
              O desenvolvimento web é a arte de transformar linhas de código em
              experiências digitais cativantes que conectam pessoas, negócios e
              ideias em todo o mundo.
            </span>
          </p>
          <button className="absolute left-28 top-3/4 rounded bg-sky-600 p-4 pl-6 pr-6 text-3xl font-semibold text-gray-100 transition-colors hover:bg-sky-800">
            Saiba Mais
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/tec2.jpg"
            alt="img2"
            width={4200}
            height={2800}
            className="relative -z-10 h-[90vh] w-full"
          />
          <p className="absolute left-24 top-14 text-6xl font-extrabold text-gray-100">
            Design UI e UX
          </p>
          <p className="absolute left-28 top-32 max-w-[50%] text-2xl font-medium leading-normal text-gray-100">
            <span className="font-extrabold">-</span> Interfaces Intuitivas{' '}
            <br /> <span className="font-extrabold">-</span> Foco na Usabilidade{' '}
            <br />
            <span className="font-extrabold">-</span> Designs Modernos <br />
            <br /> <br />
            <span className="font-normal">
              O design UX/UI é a alquimia que combina criatividade, empatia e
              tecnologia, transformando complexidade em simplicidade e
              proporcionando experiências encantadoras que fazem a diferença na
              vida das pessoas.
            </span>
          </p>
          <button className="absolute left-28 top-3/4 rounded bg-sky-600 p-4 pl-6 pr-6 text-3xl font-semibold text-gray-100 transition-colors hover:bg-sky-800">
            Saiba Mais
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/tec3.jpg"
            alt="img3"
            width={2700}
            height={1700}
            className="relative -z-10 h-[90vh] w-full"
          />
          <p className="absolute left-24 top-14 text-6xl font-extrabold text-gray-100">
            Desenvolvimento Web App
          </p>
          <p className="absolute left-28 top-32 max-w-[50%] text-2xl font-medium leading-normal text-gray-100">
            <span className="font-extrabold">-</span> Interação Dinâmica <br />{' '}
            <span className="font-extrabold">-</span> Usuario & App <br />
            <span className="font-extrabold">-</span> Tecnologias Atuais do
            mercado <br />
            <br /> <br />
            <span className="font-normal">
              O desenvolvimento de web apps é o caminho para dar vida a ideias
              inovadoras, onde a harmonia entre funcionalidade, usabilidade e
              desempenho se unem para criar aplicações web poderosas, capazes de
              transformar a maneira como as pessoas interagem e alcançam seus
              objetivos.
            </span>
          </p>
          <button className="absolute left-28 top-3/4 rounded bg-sky-600 p-4 pl-6 pr-6 text-3xl font-semibold text-gray-100 transition-colors hover:bg-sky-800">
            Saiba Mais
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/tec4.jpg"
            alt="img4"
            width={1920}
            height={1280}
            className="relative -z-10 h-[90vh] w-full"
          />
          <p className="absolute left-24 top-14 text-6xl font-extrabold text-gray-100">
            Integração de Sistemas e APIs
          </p>
          <p className="absolute left-28 top-32 max-w-[50%] text-2xl font-medium leading-normal text-gray-100">
            <span className="font-extrabold">-</span> Domínio Total sobre APIs{' '}
            <br /> <span className="font-extrabold">-</span> Integração Ágil{' '}
            <br />
            <span className="font-extrabold">-</span> Melhores Bancos de Dados{' '}
            <br />
            <br /> <br />
            <span className="font-normal">
              Caso sua empresa necessite integrar sistemas existentes ou
              utilizar serviços de terceiros, podemos ajudar a integrar essas
              soluções em seu site.
            </span>
          </p>
          <button className="absolute left-28 top-3/4 rounded bg-sky-600 p-4 pl-6 pr-6 text-3xl font-semibold text-gray-100 transition-colors hover:bg-sky-800">
            Saiba Mais
          </button>
        </SwiperSlide>
      </Slider>
    </div>
  )
}

export default TopHome
