import { ReactNode } from 'react'

type StatusProps = {
  children: ReactNode
  className: string
}

export function Status({ children, className }: StatusProps) {
  return (
    <span
      className={"before:content-[''] before:w-2 before:h-2 before:rounded-full flex items-center gap-2 ".concat(
        className
      )}
    >
      {children}
    </span>
  )
}
