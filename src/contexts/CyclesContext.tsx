/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createContext,
  useState,
  useEffect,
  useReducer,
  ReactNode
} from 'react'

import { differenceInSeconds } from 'date-fns'
import { ActionTypes, cyclesReducer, initialState } from '../reducers/cycles'

type Cycle = {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  finishedDate?: Date
  interruptedDate?: Date
}

type CreateCycleData = {
  task: string
  minutesAmount: number
}

type CyclesContextType = {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
  interruptCurrentCycle: () => void
}

export const CyclesContext = createContext({} as CyclesContextType)

type CyclesContextProviderProps = {
  children: ReactNode
}

export function CyclesContextProvider({
  children
}: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    initialState,
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-timer:cycles-state-1.0.0'
      )

      return storedStateAsJSON ? JSON.parse(storedStateAsJSON) : initialState
    }
  )

  const { cycles, activeCycleId } = cyclesState
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }

    return 0
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)

    localStorage.setItem('@ignite-timer:cycles-state-1.0.0', stateJSON)
  }, [cyclesState])

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function markCurrentCycleAsFinished() {
    dispatch({
      type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
      payload: {
        activeCycleId
      }
    })
  }

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date()
    }

    console.log(newCycle)

    dispatch({
      type: ActionTypes.ADD_NEW_CYCLE,
      payload: {
        newCycle
      }
    })

    setAmountSecondsPassed(0)
  }

  function interruptCurrentCycle() {
    dispatch({
      type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
      payload: {
        activeCycleId
      }
    })
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        setSecondsPassed,
        createNewCycle,
        interruptCurrentCycle
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
