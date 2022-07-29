import { HandPalm, Play, Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import faviconSvg from '../assets/favicon.svg'

export function Home() {
  return (
    <div className="flex justify-center items-center w-100 min-h-screen bg-[#1A1A1A]">
      <main className="flex flex-col items-center w-full max-w-6xl h-[45rem] px-10 pt-8 pb-10 rounded-lg bg-[#202024]">
        <header className="flex justify-between items-center w-full mb-16">
          <picture className="flex w-10 h-10">
            <img src={faviconSvg} alt="" />
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
                <Scroll
                  size={24}
                  className={isActive ? 'text-[#00875F]' : ''}
                />
              )}
            </NavLink>
          </nav>
        </header>

        <section className="w-full max-w-[42rem]">
          <form className="flex flex-wrap justify-center items-center gap-2 w-full text-lg font-bold tracking-tight">
            <label htmlFor="task" className="text-[#E1E1E6]">
              Vou trabalhar em
            </label>
            <input
              id="task"
              list="task-suggestions"
              className="transition-colors flex-1 px-2 border-0 border-b-2 border-[#7C7C8A] bg-transparent text-[#E1E1E6] focus:shadow-none focus:border-[#00875F] placeholder:text-[#7C7C8A]"
              placeholder="Dê um nome para o seu projeto"
            />

            <datalist id="task-suggestions">
              <option value="Projeto 1" />
              <option value="Projeto 2" />
              <option value="Projeto 3" />
              <option value="Banana" />
            </datalist>

            <label htmlFor="minutesAmount" className="text-[#E1E1E6]">
              durante
            </label>
            <input
              type="number"
              id="minutesAmount"
              className="transition-colors px-2 border-0 border-b-2 border-[#7C7C8A] bg-transparent text-[#E1E1E6] focus:shadow-none focus:border-[#00875F] placeholder:text-[#7C7C8A]"
              placeholder="00"
              step={5}
              min={5}
              max={60}
            />

            <span className="text-[#E1E1E6]">minutos.</span>
          </form>

          <section className="flex items-center gap-4 my-14 text-[10rem] leading-[8rem]">
            <span className="py-8 px-4 rounded-lg bg-[#29292E] text-[#E1E1E6] font-bold">
              0
            </span>
            <span className="py-8 px-4 rounded-lg bg-[#29292E] text-[#E1E1E6] font-bold">
              0
            </span>

            <span className="text-[#00875F] font-bold">:</span>

            <span className="py-8 px-4 rounded-lg bg-[#29292E] text-[#E1E1E6] font-bold">
              0
            </span>
            <span className="py-8 px-4 rounded-lg bg-[#29292E] text-[#E1E1E6] font-bold">
              0
            </span>
          </section>

          <footer className="flex flex-col">
            <button
              type="button"
              className="transition-colors flex justify-center items-center gap-2 p-5 rounded-lg bg-[#AB222E] text-[#E1E1E6] font-bold cursor-pointer enabled:hover:bg-[#7A1921] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <HandPalm size={24} />
              Interromper
            </button>

            <button
              type="submit"
              className="transition-colors flex justify-center items-center gap-2 p-5 rounded-lg bg-[#00875F] text-[#E1E1E6] font-bold cursor-pointer enabled:hover:bg-[#015F43] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <Play size={24} />
              Começar
            </button>
          </footer>
        </section>
      </main>
    </div>
  )
}
