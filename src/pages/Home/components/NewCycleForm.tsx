import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import * as zod from 'zod'

import { CyclesContext } from '../../../contexts/CyclesContext'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos.')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos.')
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function NewCycleForm() {
  const { createNewCycle, activeCycle } = useContext(CyclesContext)
  const { register, handleSubmit, reset } = useFormContext<NewCycleFormData>()

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  return (
    <form
      id="createNewCycle"
      onSubmit={handleSubmit(handleCreateNewCycle)}
      className="flex flex-wrap justify-center items-center gap-2 w-full text-lg font-bold tracking-tight"
    >
      <label htmlFor="task" className="text-[#E1E1E6]">
        Vou trabalhar em
      </label>

      <input
        id="task"
        list="task-suggestions"
        className="transition-colors flex-1 px-2 border-0 border-b-2 border-[#7C7C8A] bg-transparent text-[#E1E1E6] focus:shadow-none focus:border-[#00875F] placeholder:text-[#7C7C8A]"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
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
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span className="text-[#E1E1E6]">minutos.</span>
    </form>
  )
}
