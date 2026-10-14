import type { ReactNode } from 'react'

type PhoneMockupProps = {
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeClasses = {
  sm: 'w-[140px] rounded-[1.25rem] p-1.5',
  md: 'w-[180px] rounded-[1.75rem] p-2',
  lg: 'w-[220px] rounded-[2rem] p-2.5',
}

export function PhoneMockup({ children, className = '', size = 'lg' }: PhoneMockupProps) {
  return (
    <div
      className={`relative bg-neutral-900 shadow-phone ${sizeClasses[size]} ${className}`}
    >
      <div className="absolute left-1/2 top-2 z-10 h-1.5 w-12 -translate-x-1/2 rounded-full bg-neutral-800" />
      <div className="overflow-hidden rounded-[1.35rem] bg-white">{children}</div>
    </div>
  )
}
