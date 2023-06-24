'use client'

import Link from 'next/link'
import React, { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

interface navlink {
  href: string
  children: ReactNode
}

const NavLink = (props: navlink) => {
  const pathname = usePathname()
  return (
    <Link
      className={`${
        pathname === props.href
          ? 'flex items-center justify-center gap-1 py-4 text-sky-600 transition-colors hover:text-sky-600'
          : 'flex items-center justify-center gap-1 py-4 text-[#404040] transition-colors hover:text-sky-600'
      } `}
      href={props.href}
    >
      {props.children}
    </Link>
  )
}

export default NavLink
