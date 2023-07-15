'use client'

import Services from '@/components/Services'
import TopHome from '@/components/TopHome'
import Feedbacks from '@/components/Feedbacks'
import Image from 'next/image'
import Divisor from '@/components/divisor'
import Infor from '@/components/Infor'
import Blog from '@/components/blog/Blog'

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="h-[81px]"></div>
      <TopHome />
      <Infor />
      <Services />
      <Divisor />
      <Feedbacks />
      <Divisor />
      <Blog />
      <section
        id="contato"
        className="flex flex-col gap-10 px-14 pb-24 md:px-28"
      >
        <div>
          <div className="flex flex-row gap-2">
            <span className="text-5xl font-semibold text-blue-700">Olá!</span>
            <Image
              src="/smile.jpg"
              alt="smile"
              width={55}
              height={55}
              className="brightness-100"
            />
          </div>
          <span className="text-[40px] font-normal text-black">
            Vamos conversar?
          </span>
        </div>
        <form className="flex w-full flex-col items-center justify-center">
          <input
            type="text"
            name="name"
            placeholder="Nome"
            id="name"
            className="mb-7 h-12 w-full rounded-md border border-blue-500 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm placeholder:font-light
            placeholder:text-black invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500
            focus:outline-none focus:ring-1 focus:ring-sky-900 focus:invalid:border-pink-500
            focus:invalid:ring-pink-500 disabled:border-slate-200
            disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none md:w-[80%]"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className='disabled:shadow-none" peer h-12 w-full rounded-md border border-blue-500 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm placeholder:font-light placeholder:text-black invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500
            focus:outline-none focus:ring-1 focus:ring-sky-900 focus:invalid:border-pink-500
            focus:invalid:ring-pink-500 disabled:border-slate-200
            disabled:bg-slate-50 disabled:text-slate-500 md:w-[80%]'
          />
          <p className="invisible my-1 text-sm text-pink-600 peer-invalid:visible">
            Por favor, forneça um endereço de e-mail válido
          </p>
          <input
            type="text"
            name="assunto"
            id="assunto"
            placeholder="Sobre o que vamos conversar?"
            className='disabled:shadow-none" mb-7 h-24 w-full rounded-md border border-blue-500 bg-white px-3 py-2 text-sm placeholder-slate-400 
            shadow-sm placeholder:font-light placeholder:text-black invalid:border-pink-500 invalid:text-pink-600
            focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-900 focus:invalid:border-pink-500
            focus:invalid:ring-pink-500 disabled:border-slate-200
            disabled:bg-slate-50 disabled:text-slate-500 md:w-[80%]'
          />
          <button className="mt-2 w-2/4 rounded bg-sky-700 p-4 font-semibold text-white">
            Enviar
          </button>
        </form>
      </section>
    </main>
  )
}
