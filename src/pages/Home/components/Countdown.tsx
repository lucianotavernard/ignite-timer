import { differenceInSeconds } from 'date-fns'
import { useContext, useEffect } from 'react'

import { CyclesContext } from '../../../contexts/CyclesContext'

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    amountSecondsPassed,
    setSecondsPassed
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: NodeJS.Timer

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate
        )

        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()

          setSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    setSecondsPassed,
    markCurrentCycleAsFinished
  ])

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])

  return (
    <section className="flex items-center gap-4 my-14 text-[10rem] leading-[8rem]">
      <span className="py-8 px-4 rounded-lg bg-[#29292E] text-[#E1E1E6] font-bold">
        {minutes[0]}
      </span>
      <span className="py-8 px-4 rounded-lg bg-[#29292E] text-[#E1E1E6] font-bold">
        {minutes[1]}
      </span>

      <span className="text-[#00875F] font-bold">:</span>

      <span className="py-8 px-4 rounded-lg bg-[#29292E] text-[#E1E1E6] font-bold">
        {seconds[0]}
      </span>
      <span className="py-8 px-4 rounded-lg bg-[#29292E] text-[#E1E1E6] font-bold">
        {seconds[1]}
      </span>
    </section>
  )
}
