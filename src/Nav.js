import React from 'react'
import AddItem from './AddItem'
import SearchItem from './SearchItem'

const Nav = ({addItem, setAddItem, handleAddItem, search, setSearch}) => {
  return (
    <nav className='flex flex-col p-[3vh_0] gap-y-[2vh]' >
        <AddItem 
          addItem={addItem}
          setAddItem={setAddItem}
          handleAddItem={handleAddItem}
        />
        <SearchItem 
          search={search}
          setSearch={setSearch}
        />
    </nav>
  )
}

export default Nav