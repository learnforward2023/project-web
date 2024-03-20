'use client'
import React from 'react'

interface IHGoogleButtonProps {
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const HGoogleButton: React.FC<IHGoogleButtonProps> = ({
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
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <rect width="20" height="20" fill="url(#pattern0)" />
        <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_31_2" transform="scale(0.025)" />
          </pattern>
          <image id="image0_31_2" width="40" height="40" xlinkHref="data:image/png;base64,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" />
        </defs>
      </svg>
      Google
    </button>
  )
}

export default HGoogleButton
