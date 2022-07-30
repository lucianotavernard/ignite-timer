import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { CyclesContext } from '../../contexts/CyclesContext'

import { Header } from '../../components/Header'
import { Status } from './components/Status'

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <div className="flex justify-center items-center w-100 min-h-screen bg-[#1A1A1A] font-roboto">
      <main className="flex flex-col items-center w-full max-w-6xl h-[45rem] px-10 pt-8 pb-10 rounded-lg bg-[#202024]">
        <Header />

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
                {cycles.map((cycle) => (
                  <tr key={cycle.id} className="border-t-4 border-[#202024]">
                    <td className="w-2/4 p-4 pl-6 border-t-[#202024] bg-[#29292E] text-sm text-left text-[#E1E1E6] leading-6">
                      {cycle.task}
                    </td>
                    <td className="p-4 border-t-[#202024] bg-[#29292E] text-sm text-left text-[#E1E1E6] leading-6">
                      {cycle.minutesAmount} minutos
                    </td>
                    <td className="p-4 border-t-[#202024] bg-[#29292E] text-sm text-left text-[#E1E1E6] leading-6">
                      {formatDistanceToNow(new Date(cycle.startDate), {
                        addSuffix: true,
                        locale: ptBR
                      })}
                    </td>
                    <td className="p-4 pr-6 border-t-[#202024] bg-[#29292E] text-sm text-left text-[#E1E1E6] leading-6">
                      {cycle.finishedDate && (
                        <Status className="before:bg-[#00875F]">
                          Concluído
                        </Status>
                      )}

                      {cycle.interruptedDate && (
                        <Status className="before:bg-[#AB222E]">
                          Interrompido
                        </Status>
                      )}

                      {!cycle.finishedDate && !cycle.interruptedDate && (
                        <Status className="before:bg-[#FBA94C]">
                          Em andamento
                        </Status>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  )
}
