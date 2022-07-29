import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import faviconSvg from '../assets/favicon.svg'

export function History() {
  return (
    <div className="flex justify-center items-center w-100 min-h-screen bg-[#1A1A1A] font-roboto">
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

        <section className="flex flex-col w-full max-w-[58rem]">
          <h1 className="text-[#E1E1E6] text-2xl font-bold">Meu histórico</h1>

          <div className="flex-1 overflow-auto mt-8 text-[#C4C4CC]">
            <table className="min-w-[36rem] w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 pl-6 rounded-tl-lg bg-[#323238] text-sm text-left text-[#E1E1E6] leading-6">
                    Tarefa
                  </th>
                  <th className="p-4 bg-[#323238] text-sm text-left text-[#E1E1E6] leading-6">
                    Duração
                  </th>
                  <th className="p-4 bg-[#323238] text-sm text-left text-[#E1E1E6] leading-6">
                    Duração
                  </th>
                  <th className="p-4 pr-6 rounded-tr-lg bg-[#323238] text-sm text-left text-[#E1E1E6] leading-6">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t-4 border-[#202024]">
                  <td className="w-2/4 p-4 pl-6 border-t-[#202024] bg-[#29292E] text-sm text-left text-[#E1E1E6] leading-6">
                    Conserto de débitos técnicos
                  </td>
                  <td className="p-4 border-t-[#202024] bg-[#29292E] text-sm text-left text-[#E1E1E6] leading-6">
                    25 minutos
                  </td>
                  <td className="p-4 border-t-[#202024] bg-[#29292E] text-sm text-left text-[#E1E1E6] leading-6">
                    Há cerca de 2 meses
                  </td>
                  <td className="p-4 pr-6 border-t-[#202024] bg-[#29292E] text-sm text-left text-[#E1E1E6] leading-6">
                    <span>Em andamento</span>
                  </td>
                </tr>

                <tr className="border-t-4 border-[#202024]">
                  <td className="w-2/4 p-4 pl-6 border-t-[#202024] bg-[#29292E] text-sm text-left text-[#E1E1E6] leading-6">
                    Conserto de débitos técnicos
                  </td>
                  <td className="p-4 border-t-[#202024] bg-[#29292E] text-sm text-left text-[#E1E1E6] leading-6">
                    25 minutos
                  </td>
                  <td className="p-4 border-t-[#202024] bg-[#29292E] text-sm text-left text-[#E1E1E6] leading-6">
                    Há cerca de 2 meses
                  </td>
                  <td className="p-4 pr-6 border-t-[#202024] bg-[#29292E] text-sm text-left text-[#E1E1E6] leading-6">
                    <span>Em andamento</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  )
}
