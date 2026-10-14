type TequanMarkProps = {
  className?: string
  alt?: string
}

export function TequanMark({ className = '', alt = '' }: TequanMarkProps) {
  return (
    <img
      src="/images/tequan-logo.png"
      alt={alt}
      className={`block ${className}`}
    />
  )
}
