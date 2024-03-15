import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import './index.scss'
import HButton from '../../Buttons/HButton'
import { Dropdown, MenuProps } from 'antd'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon }
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon }
]

const menuItems: MenuProps['items'] = [
  {
    label: <Link className="text-sm font-semibold leading-6 text-gray-900" href="#" rel="https://studytogether.vn">Englishization</Link>,
    key: '0'
  },
  {
    label: <Link className="text-sm font-semibold leading-6 text-gray-900" href="#" rel="https://studytogether.vn" target="_blank">About Us</Link>,
    key: '1'
  },
  {
    type: 'divider'
  },
  {
    label: <Link className="text-sm font-semibold leading-6 text-gray-900" href="https://studytogether.vn" rel="https://studytogether.vn">Blog</Link>,
    key: '3'
  }
]

const PrimaryHeader: React.FC = () => {
  return (
    <header className="bg-white PrimaryHeader">
      <nav className="mx-auto flex max-w-7xl items-center justify-between lg:px-8 p-4" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="non-style-link">
            <div className="h-full flex top-0 left-0 items-center overflow-hidden cursor-pointer">
              <img src="/primary-logo.png" alt="together logo" width={40} />
              <h3 className="font-bold font-mono text-2xl HTextLogo">2gether</h3>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Dropdown menu={{ items: menuItems }} trigger={['click']}>
            <button>
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </Dropdown>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Features
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Link className="text-sm font-semibold leading-6 text-gray-900" href="https://studytogether.vn" rel="https://studytogether.vn" target="_blank">Blog</Link>
          <Link className="text-sm font-semibold leading-6 text-gray-900" href="#" rel="https://studytogether.vn">Englishization</Link>
          <Link className="text-sm font-semibold leading-6 text-gray-900" href="#" rel="https://studytogether.vn">About Us</Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <HButton variant="primary" size="normal" type="submit">
            Join For Free &rarr;
          </HButton>
        </div>
      </nav>
    </header>
  )
}

export default PrimaryHeader
