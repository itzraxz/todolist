import React from 'react'

const SearchItem = ({search, setSearch}) => {
  return (
    <form 
      className='flex flex-row gap-x-[2vw] justify-center'
      onSubmit={(e)=>e.preventDefault()}
    >
        <label htmlFor="addIten"
            className='fixed left-[-999px]'
        >
            Search Item
        </label>
        <input type="text" name="addItem" id="addItem"
            className='rounded-full min-w-[87vw] h-[2rem] pl-[2vw] focus:caret-[#15152c]
            outline-[#15152c] text-[#15152c]
            hover:scale-[1.01] hover:transition-all duration-100 hover:shadow-md border-[2px] hover:shadow-black'
            placeholder='Search Item'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
        />
        
    </form>
  )
}

export default SearchItem