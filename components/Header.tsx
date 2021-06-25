import { useState } from 'react'
import {
  CollectionIcon,
  SearchIcon,
  FilmIcon
} from '@heroicons/react/outline'
import {
  MoonIcon,
  SunIcon
} from '@heroicons/react/solid'
import Image from 'next/image'
import Switch from 'react-switch'

function Header(): JSX.Element {
  const [menuVisible, setMenuVisible] = useState(false)

  return (
    <header className='flex flex-col sm:flex-row md:px-10 md:py-4
    justify-between items-center h-auto select-none'>
      <div className='flex flex-grow space-x-14 max-w-2xl'>
        <Image
          className='object-contain'
          src='/hulu-white.png'
          width={60}
          height={20}
        />
        <div className="flex flex-row items-center cursor-pointer 
        text-white space-x-3">
          <CollectionIcon className="h-7 w-8" />
          <p>BROWSE</p>
        </div>
        <div className="flex flex-row items-center cursor-pointer 
        text-white space-x-3">
          <FilmIcon className="h-7 w-8" />
          <p>MY STUFF</p>
        </div>
      </div>
      <div className='flex flex-grow justify-end space-x-14 max-w-2xl'>
        <div className="flex flex-row items-center cursor-pointer 
        text-white space-x-3">
          <SearchIcon className="h-7 w-8" />
          <p>SEARCH</p>
        </div>
        <div className="flex flex-row items-center cursor-pointer 
        text-white space-x-3"
          onClick={() => setMenuVisible(!menuVisible)}>
          <div className='flex items-center justify-center bg-opacity-25 
          bg-gray-200 h-8 w-8 rounded-3xl'>
            <p className='text-white'>U</p>
          </div>
          <p>USER</p>
        </div>
      </div>
      {menuVisible && (
        <div className='absolute right-0 top-16 mx-8'>
          <div className="flex flex-col bg-[#06202A] space-y-3 w-72 h-full py-6">
            <div className="flex flex-row items-center justify-center text-white
            space-x-3 px-6 pb-3">
              <SunIcon className="h-8 w-8 cursor-default" />
              <label
                htmlFor="material-switch"
                className='flex items-center space-x-3'>
                <span>Night Mode: On</span>
                <Switch
                  onChange={() => {/* */ }}
                  checked={false}
                  handleDiameter={25}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  height={20}
                  width={48}
                />
              </label>
            </div>
            <div className='h-px bg-gray-600'></div>
            <div className='space-y-4 px-6'>
              <p className='text-sm font-medium text-gray-300 hover:text-white cursor-pointer'>
                Manage Profiles
              </p>
              <p className='text-sm font-medium text-gray-300 hover:text-white cursor-pointer'>
                Account
              </p>
              <p className='text-sm font-medium text-gray-300 hover:text-white cursor-pointer'>
                Help Center
              </p>
              <p className='text-sm font-medium text-gray-300 hover:text-white cursor-pointer'>
                Log Out
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
