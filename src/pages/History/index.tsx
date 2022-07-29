import { Header } from '../../components/Header'
import { Status } from './components/Status'

export function History() {
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
                    <Status statusColor="green">Concluído</Status>
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
                    <Status statusColor="yellow">Em andamento</Status>
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
