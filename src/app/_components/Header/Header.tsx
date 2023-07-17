'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import { List, X } from '@phosphor-icons/react'
import { useState } from 'react'

export function Header() {
  const [menuIsClosed, setMenuIsClosed] = useState(true)
  const isMediumDevice = useMediaQuery('(min-width: 678px)')

  const handlerMobileMenuClick = () => {
    setMenuIsClosed((menuState) => !menuState)
  }

  return (
    <header className="fixed left-0 top-0 flex h-14 w-full items-center justify-between px-4">
      <div>Logo</div>
      <button
        className="text-2xl"
        onClick={handlerMobileMenuClick}
        title="Abrir menu"
        type="button"
      >
        {menuIsClosed ? <List /> : <X />}
      </button>
      <ul
        className={`fixed right-0 top-14 transition-all duration-300 ${
          menuIsClosed
            ? 'invisible translate-x-2/3 opacity-0'
            : 'visible translate-y-0 opacity-100'
        }`}
      >
        <li>
          <a href="#">Teste</a>
        </li>
        <li>
          <ul>
            <li>Rede 1</li>
            <li>Rede 2</li>
            <li>Rede 2</li>
          </ul>
        </li>
      </ul>
    </header>
  )
}
