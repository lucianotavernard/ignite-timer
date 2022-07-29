import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import logoImg from '../assets/favicon.png'

export function Header() {
  return (
    <header className="flex justify-between items-center w-full mb-16">
      <picture className="flex w-10 h-10">
        <img src={logoImg} alt="" />
      </picture>

      <nav className="flex gap-2">
        <NavLink
          to="/"
          title="Timer"
          className="transition-colors flex justify-center items-center w-12 h-12 border-y-[3px] border-transparent text-[#E1E1E6] hover:border-b-[#00875F] focus:shadow-none"
        >
          {({ isActive }) => (
            <Timer size={24} className={isActive ? 'text-[#00875F]' : ''} />
          )}
        </NavLink>

        <NavLink
          to="/history"
          title="Histórico"
          className="transition-colors flex justify-center items-center w-12 h-12 border-y-[3px] border-transparent text-[#E1E1E6] hover:border-b-[#00875F] focus:shadow-none"
        >
          {({ isActive }) => (
            <Scroll size={24} className={isActive ? 'text-[#00875F]' : ''} />
          )}
        </NavLink>
      </nav>
    </header>
  )
}
