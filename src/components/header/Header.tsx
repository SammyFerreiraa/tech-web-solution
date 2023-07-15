'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import NavLink from './NavLink'
import Hamburguer from './icon/Hamburguer'
import Quit from './icon/Quit'

const Header = () => {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { href: '/', text: 'HOME' },
    { href: '#service', text: 'SERVIÇOS' },
    { href: '#sobre', text: 'SOBRE' },
    { href: '#', text: 'PORTFÓLIO' },
    { href: '#depoimentos', text: 'DEPOIMENTOS' },
    { href: '#blog', text: 'BLOG' },
    { href: '#contato', text: 'CONTATO' },
  ]

  const renderNavLinks = () => {
    return navLinks.map((link) => (
      <div onClick={() => setOpen(false)} className="w-full" key={link.href}>
        <NavLink href={link.href}>{link.text}</NavLink>
      </div>
    ))
  }

  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <header className="fixed z-50 flex w-screen flex-col justify-between bg-white shadow-xl">
      <div className="flex w-[99.65vw] flex-row justify-between bg-white px-4">
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
          {renderNavLinks()}
        </div>
        <div className="flex items-center justify-center gap-6 md:hidden">
          <button
            className="transition-colors hover:fill-sky-500"
            onClick={toggleOpen}
          >
            {open === true ? (
              <Quit fill="#0ea5e9" />
            ) : (
              <Hamburguer fill="#0ea5e9" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`fixed top-[89px] ${
          open === true ? 'flex' : 'hidden'
        } h-[calc(100vh-89px)] w-full items-center justify-center bg-white pb-[45px] transition-colors`}
      >
        <div className="flex w-full flex-col items-center justify-center gap-4">
          {renderNavLinks()}
        </div>
      </div>
    </header>
  )
}

export default Header
