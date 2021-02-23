import React, { useState } from 'react'
import Button from './generic/button/button'
import DropDown from './generic/dropdown/dropdown'
function App() {
  return (
    <div className="flex items-center justify-center min-h-screen dark:bg-gray-500 bg-screen">
      <div className="flex flex-row items-center divide-x rounded-full bg-bg">
      <span>04:01:00</span> <Button kind='primary' className='py-2 px-14'> Entrar </Button>
        <DropDown> dsadas</DropDown>
      </div>
    </div>
  )
}

export default App
