'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { ChevronDown } from 'lucide-react'
import Hamburguer from './icon/Hamburguer'
import Quit from './icon/Quit'

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed z-50 flex w-screen flex-col justify-between bg-white shadow-xl">
      <div className=" flex w-[99.65vw] flex-row justify-between bg-white px-4">
        <NavLink href="/">
          <Image
            src="/logo.png"
            priority
            alt="Logo"
            width={65}
            height={65}
            className="brightness-100"
          />
        </NavLink>

        <div className="hidden items-center justify-center gap-6 md:flex">
          <NavLink href="/">HOME</NavLink>
          <NavLink href="/service">
            SERVIÇOS <ChevronDown size={16} />
          </NavLink>
          <NavLink href="/about">SOBRE</NavLink>
          <NavLink href="/portfolio">PORTFÓLIO</NavLink>
          <NavLink href="/depoimentos">DEPOIMENTOS</NavLink>
          <NavLink href="/blog">BLOG</NavLink>
          <NavLink href="/contact">CONTATO</NavLink>
        </div>
        <div className="flex items-center justify-center gap-6 md:hidden">
          <button
            className="transition-colors hover:fill-sky-500"
            onClick={() => setOpen(!open)}
          >
            {open === true ? (
              <Quit fill="#0ea5e9"></Quit>
            ) : (
              <Hamburguer fill="#0ea5e9" />
            )}
          </button>
        </div>
      </div>

      <div
        className={
          open === true
            ? 'fixed top-[89px] flex h-[calc(100vh-89px)] w-full items-center justify-center bg-white pb-[45px] transition-colors'
            : 'fixed top-[89px] hidden h-[calc(100vh-89px)] w-full items-center justify-center bg-white pb-[45px] transition-colors'
        }
      >
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <div className="w-full">
            <NavLink href="/">HOME</NavLink>
          </div>
          <div className="w-full">
            <NavLink href="/service">
              SERVIÇOS <ChevronDown size={16} />
            </NavLink>
          </div>
          <div className="w-full">
            <NavLink href="/about">SOBRE</NavLink>
          </div>
          <div className="w-full">
            <NavLink href="/portfolio">PORTFÓLIO</NavLink>
          </div>
          <div className="w-full">
            <NavLink href="/depoimentos">DEPOIMENTOS</NavLink>
          </div>
          <div className="w-full">
            <NavLink href="/blog">BLOG</NavLink>
          </div>
          <div className="w-full">
            <NavLink href="/contact">CONTATO</NavLink>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
