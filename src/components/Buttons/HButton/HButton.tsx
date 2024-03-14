'use client'
import React from 'react'

interface IHButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'normal' | 'large';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const HButton: React.FC<IHButtonProps> = ({
  className = '',
  variant = 'primary',
  size = 'normal',
  type = 'button',
  disabled = false,
  onClick,
  children
}) => {
  const [buttonColor, setButtonColor] = React.useState('')
  const [buttonSize, setButtonSize] = React.useState('')

  React.useEffect(() => {
    let colors: string = ''

    switch (variant) {
    case 'primary':
      colors = 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:border-blue-700 focus:ring focus:ring-blue-200'
      break
    case 'secondary':
      colors = 'bg-gray-500 hover:bg-gray-600 active:bg-gray-700 focus:border-gray-700 focus:ring focus:ring-gray-200'
      break
    case 'tertiary':
      colors = 'bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:border-violet-700 focus:ring focus:ring-violet-200'
      break
    default:
      colors = 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:border-blue-700 focus:ring focus:ring-blue-200'
    }
    setButtonColor(colors)

    let sizes: string = ''

    switch (size) {
    case 'small':
      sizes = 'py-1 px-2 text-xs h-7'
      break
    case 'normal':
      sizes = 'py-2 px-4 text-sm h-8'
      break
    case 'large':
      sizes = 'py-3 px-6 text-base h-10'
      break
    default:
      sizes = 'py-2 px-4 text-sm'
    }
    setButtonSize(sizes)
  }, [])

  return (
    <button
      className={`inline-flex items-center border border-transparent rounded-md font-semibold text-white uppercase tracking-widest disabled:opacity-45 transition ${buttonColor} ${buttonSize} ${className}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default HButton
