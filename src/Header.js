import React from 'react'

const Header = ({title}) => {
  return (
    <header className='flex flex-col bg-[#15152c] text-[white] p-[2vh] text-[1.7rem] rounded-b-[20px]'>
        <h1
            className=' flex-grow self-center font-semibold hover:transition duration-100 ease-in-out hover:scale-x-105 hover:text-[lightblue]'
        >{`${title}`}</h1>
    </header>
  )
}

export default Header