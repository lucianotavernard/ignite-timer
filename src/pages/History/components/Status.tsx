import { ReactNode } from 'react'

const STATUS_COLORS = {
  yellow: '#FBA94C',
  green: '#00875F',
  red: '#AB222E'
} as const

type StatusProps = {
  children: ReactNode
  statusColor: keyof typeof STATUS_COLORS
}

export function Status({ children, statusColor }: StatusProps) {
  return (
    <span
      className={`before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-[${STATUS_COLORS[statusColor]}] flex items-center gap-2`}
    >
      {children}
    </span>
  )
}
