'use client'
import React from 'react'

interface IHGithubButtonProps {
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const HGithubButton: React.FC<IHGithubButtonProps> = ({
  className = '',
  disabled = false,
  onClick
}) => {
  return (
    <button
      className={`inline-flex gap-2 items-center border border-transparent text-sm rounded-md tracking-widest disabled:opacity-45 transition${className} p-2 text-black hover:bg-gray-100 focus:border-gray-300 focus:ring focus:ring-opacity-50 focus:ring-gray-200 flex-1 justify-center items-center gap-2 border-gray-300`}
      disabled={disabled}
      onClick={onClick}
      style={{ border: '1px solid #89898926' }}
    >
      <img src="/logos/github.png" alt="Github logo sign in with Study together" width={20} />
      Github
    </button>
  )
}

export default HGithubButton
