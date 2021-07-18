import { useState } from 'react'
import Image from 'next/image'
import {
  CollectionIcon,
  SearchIcon,
  FilmIcon
} from '@heroicons/react/outline'
import {
  MoonIcon,
  SunIcon,
  MenuIcon
} from '@heroicons/react/solid'

import Switch from 'react-switch'

function Header(): JSX.Element {
  const [menuVisible, setMenuVisible] = useState(false)
  const [nightMode, setNightMode] = useState(false)

  return (
    <header className='flex flex-row items-center justify-between w-full h-auto px-4 py-4 select-none md:px-10'>
      <div className='flex flex-grow max-w-2xl space-x-14'>
        <Image
          className='object-contain'
          src='/hulu-white.png'
          width={60}
          height={20}
        />
        <div className="flex-row items-center hidden space-x-3 text-white cursor-pointer md:flex">
          <CollectionIcon className="w-8 h-7" />
          <p>BROWSE</p>
        </div>
        <div className="flex-row items-center hidden space-x-3 text-white cursor-pointer md:flex">
          <FilmIcon className="w-8 h-7" />
          <p>MY STUFF</p>
        </div>
      </div>
      <div className='justify-end flex-grow hidden max-w-2xl space-x-6 sm:flex md:space-x-14'>
        <div className="flex flex-row items-center space-x-3 text-white cursor-pointer">
          <SearchIcon className="w-8 h-7" />
          <p className='hidden md:flex'>SEARCH</p>
        </div>
        <div className="flex flex-row items-center space-x-3 text-white cursor-pointer"
          onClick={() => setMenuVisible(!menuVisible)}>
          <div className='flex items-center justify-center w-8 h-8 bg-gray-200 bg-opacity-25 rounded-3xl'>
            <p className='text-white'>U</p>
          </div>
          <p className='hidden md:flex'>USER</p>
        </div>
      </div>
      <div
        className='flex sm:hidden'
        onClick={() => setMenuVisible(!menuVisible)}
      >
      <MenuIcon className="w-8 h-7" />
      </div>
      {menuVisible && (
        <div
          className='fixed top-0 left-0 z-50 w-full h-full'
          onClick={() => setMenuVisible(!menuVisible)}>
          <div
            className='absolute right-0 mx-8 top-16'
            onClick={(e) => e.stopPropagation()}>
          <div className="flex flex-col bg-[#06202A] space-y-3 w-72 h-full py-3">
            <div className="flex flex-row items-center justify-center px-6 space-x-3 text-white">
                {
                  nightMode
                  ? <MoonIcon className="w-8 cursor-default h-7" />
                  : <SunIcon className="w-8 cursor-default h-7" />
                }
              <label
                htmlFor="material-switch"
                className='flex items-center space-x-3'>
                <span className="text-sm">Night Mode: On</span>
                <Switch
                  onChange={() => setNightMode(!nightMode)}
                  checked={nightMode}
                  onColor={'#5283de'}
                  handleDiameter={20}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  height={15}
                  width={40}
                />
              </label>
            </div>
            <div className='h-px bg-gray-600'></div>
            <div className='px-6 space-y-4'>
              <p className='text-sm font-medium text-gray-300 cursor-pointer hover:text-white'>
                Manage Profiles
              </p>
              <p className='text-sm font-medium text-gray-300 cursor-pointer hover:text-white'>
                Account
              </p>
              <p className='text-sm font-medium text-gray-300 cursor-pointer hover:text-white'>
                Help Center
              </p>
              <p className='text-sm font-medium text-gray-300 cursor-pointer hover:text-white'>
                Log Out
              </p>
            </div>
          </div>
          </div>
          </div>
      )}
    </header>
  )
}

export default Header
