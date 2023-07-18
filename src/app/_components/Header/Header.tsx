'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import {
  InstagramLogo,
  List,
  Phone,
  WhatsappLogo,
  X,
} from '@phosphor-icons/react'
import { useState } from 'react'

export function Header() {
  const [menuIsClosed, setMenuIsClosed] = useState(true)
  const isMediumDevice = useMediaQuery('(min-width: 678px)')
  const menuOptions = [
    {
      name: 'Serviços',
      link: '#',
    },
    {
      name: 'Sobre',
      link: '#',
    },
    {
      name: 'Contato',
      link: '#',
    },
  ]
  const socialMedias = [
    {
      name: 'Instagram',
      SocialIcon: InstagramLogo,
      link: '#',
    },
    {
      name: 'WhatsApp',
      SocialIcon: WhatsappLogo,
      link: '#',
    },
    {
      name: 'Telefone',
      SocialIcon: Phone,
      link: '#',
    },
  ]

  const handlerMobileMenuClick = () => {
    setMenuIsClosed((menuState) => !menuState)
  }

  return (
    <header className="fixed left-0 top-0 flex h-14 w-full items-center justify-between px-4">
      <div>Logo</div>
      {!isMediumDevice && (
        <>
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
            {menuOptions.map((option) => (
              <li key={option.name}>
                <a href={option.link}>{option.name}</a>
              </li>
            ))}
            <li>
              <ul className="flex justify-center">
                {socialMedias.map((socialMedia) => (
                  <li key={socialMedia.name}>
                    <a href={socialMedia.link} title={socialMedia.name}>
                      <socialMedia.SocialIcon />
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </>
      )}
      {isMediumDevice && (
        <>
          <ul className="flex gap-4">
            {menuOptions.map((option) => (
              <li key={option.name}>
                <a href={option.link}>{option.name}</a>
              </li>
            ))}
          </ul>
          <ul className="flex gap-2">
            {socialMedias.map((socialMedia) => (
              <li key={socialMedia.name}>
                <a href={socialMedia.link} title={socialMedia.name}>
                  <socialMedia.SocialIcon />
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </header>
  )
}
