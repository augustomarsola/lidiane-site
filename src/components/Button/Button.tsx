import { ComponentProps } from 'react'

type ButtonProps = ComponentProps<'button'> & {
  theme?: 'whatsapp' | false
}

export function Button({ children, theme, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`
      ${theme === 'whatsapp' && 'bg-green-500 hover:bg-green-300'}
      ${!theme && 'bg-red-400 hover:bg-red-300'}
      flex items-center gap-1 border-4 border-slate-50 px-8 py-2 font-medium uppercase text-slate-50 transition
      `}
      type={`${props.type ? props.type : 'button'}`}
    >
      {children}
    </button>
  )
}
