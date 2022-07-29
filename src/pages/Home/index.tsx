import { HandPalm, Play } from 'phosphor-react'

import { Header } from '../../components/Header'
import { Countdown } from './components/Countdown'
import { NewCycleForm } from './components/NewCycleForm'

export function Home() {
  const activeCycle = false

  return (
    <div className="flex justify-center items-center w-100 min-h-screen bg-[#1A1A1A]">
      <main className="flex flex-col items-center w-full max-w-6xl h-[45rem] px-10 pt-8 pb-10 rounded-lg bg-[#202024]">
        <Header />

        <section className="w-full max-w-[42rem]">
          <NewCycleForm />

          <Countdown />

          <footer className="flex flex-col">
            {activeCycle ? (
              <button
                type="button"
                className="transition-colors flex justify-center items-center gap-2 p-5 rounded-lg bg-[#AB222E] text-[#E1E1E6] font-bold cursor-pointer enabled:hover:bg-[#7A1921] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <HandPalm size={24} />
                Interromper
              </button>
            ) : (
              <button
                type="submit"
                className="transition-colors flex justify-center items-center gap-2 p-5 rounded-lg bg-[#00875F] text-[#E1E1E6] font-bold cursor-pointer enabled:hover:bg-[#015F43] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <Play size={24} />
                Começar
              </button>
            )}
          </footer>
        </section>
      </main>
    </div>
  )
}
