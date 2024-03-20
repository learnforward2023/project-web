'use client'
import React from 'react'

interface IHFacebookButtonProps {
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const HFacebookButton: React.FC<IHFacebookButtonProps> = ({
  className = '',
  disabled = false,
  onClick
}) => {
  return (
    <button
      className={`inline-flex flex-1 gap-2 items-center border border-transparent text-sm rounded-md tracking-widest disabled:opacity-45 transition${className} p-2 text-black hover:bg-gray-100 focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50 justify-center items-center gap-2 border-gray-300`}
      disabled={disabled}
      onClick={onClick}
      style={{ border: '1px solid #89898926' }}
    >
      <img src="/logos/facebook.png" alt="Facebook logo sign in with Study together" width={20} />
      Facebook
    </button>
  )
}

export default HFacebookButton
