import { useContext } from 'react'
import { HandPalm, Play } from 'phosphor-react'

import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { CyclesContext } from '../../contexts/CyclesContext'

import { Header } from '../../components/Header'
import { Countdown } from './components/Countdown'
import { NewCycleForm } from './components/NewCycleForm'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos.')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos.')
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { interruptCurrentCycle, activeCycle } = useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
  })

  const { watch } = newCycleForm

  const task = watch('task')
  const isSubmitDisable = !task

  return (
    <div className="flex justify-center items-center w-100 min-h-screen bg-[#1A1A1A]">
      <main className="flex flex-col items-center w-full max-w-6xl h-[45rem] px-10 pt-8 pb-10 rounded-lg bg-[#202024]">
        <Header />

        <section className="w-full max-w-[42rem]">
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>

          <Countdown />

          <footer className="flex flex-col">
            {activeCycle ? (
              <button
                type="button"
                onClick={interruptCurrentCycle}
                className="transition-colors flex justify-center items-center gap-2 p-5 rounded-lg bg-[#AB222E] text-[#E1E1E6] font-bold cursor-pointer enabled:hover:bg-[#7A1921] focus:shadow-none disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <HandPalm size={24} />
                Interromper
              </button>
            ) : (
              <button
                type="submit"
                form="createNewCycle"
                disabled={isSubmitDisable}
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
