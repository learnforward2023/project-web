// generate a TypeScript config file `npx tailwindcss init --ts`

import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class', // or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    },
    accentColor: ({ theme }) => ({
      ...theme('colors'),
      auto: 'auto'
    }),
    animation: {
      none: 'none',
      spin: 'spin 1s linear infinite',
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      bounce: 'bounce 1s infinite'
    },
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose
    }
  },
  cursor: {
    auto: 'auto',
    default: 'default',
    pointer: 'pointer',
    wait: 'wait',
    text: 'text',
    move: 'move',
    help: 'help',
    'not-allowed': 'not-allowed',
    none: 'none',
    'context-menu': 'context-menu',
    progress: 'progress',
    cell: 'cell',
    crosshair: 'crosshair',
    'vertical-text': 'vertical-text',
    alias: 'alias',
    copy: 'copy',
    'no-drop': 'no-drop',
    grab: 'grab',
    grabbing: 'grabbing',
    'all-scroll': 'all-scroll',
    'col-resize': 'col-resize',
    'row-resize': 'row-resize',
    'n-resize': 'n-resize',
    'e-resize': 'e-resize',
    's-resize': 's-resize',
    'w-resize': 'w-resize',
    'ne-resize': 'ne-resize',
    'nw-resize': 'nw-resize',
    'se-resize': 'se-resize',
    'sw-resize': 'sw-resize',
    'ew-resize': 'ew-resize',
    'ns-resize': 'ns-resize',
    'nesw-resize': 'nesw-resize',
    'nwse-resize': 'nwse-resize',
    'zoom-in': 'zoom-in',
    'zoom-out': 'zoom-out'
  },
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900'
  },
  plugins: []
}

export default config
