import React from 'react'

const SearchItem = ({search, setSearch}) => {
  return (
    <form 
      className='flex flex-row gap-x-[2vw] justify-center'
      onSubmit={(e)=>e.preventDefault()}
    >
        <label 
            className='fixed left-[-999px]'
        >
            Search 
        </label>
        <input type="text"
        name="searchItem"id="searchItem"
            className='rounded-full min-w-[87vw] h-[2rem] pl-[2vw] focus:caret-[#15152c]
            outline-[#15152c] text-[#15152c]
            hover:scale-[1.01] hover:transition-all duration-100 hover:shadow-md border-[2px] hover:shadow-black
            md:min-w-[40vw]
            md:max-w-[45vw]
            md:min-h-[2.5rem]
            md:border-[#15152c]'
            placeholder='Search'
            value={search}
            title='Search Task'
            onChange={(e)=>setSearch(e.target.value)}
        />
        
    </form>
  )
}

export default SearchItem