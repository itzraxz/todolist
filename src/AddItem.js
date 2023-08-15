import React from 'react'
import {MdPlaylistAdd} from 'react-icons/md'

const AddItem = ({addItem, setAddItem, handleAddItem}) => {
  return (
    <form 
        className='flex flex-row gap-x-[2vw] justify-center md:gap-x-[0.5vw]'
        onSubmit={(e)=>handleAddItem(e)}
    >
        <label
            className='fixed left-[-999px]'
        >
            Add Item
        </label>
        
        <input 
            type="text" 
            name="addItem" 
            id="addItem"
            className='rounded-full min-w-[79vw] h-[2rem] pl-[2vw] focus:caret-[#15152c]
            outline-[#15152c] text-[#15152c]
            hover:scale-[1.01] hover:transition-all duration-100 hover:shadow-md border-[2px]
            md:min-w-[40vw]
            md:max-w-[45vw]
            md:min-h-[2.5rem]
            md:border-[#15152c]'
            placeholder='What do you want to be done?'
            required
            title='Add Task'
            value={addItem}
            onChange={(e)=>setAddItem(e.target.value)}
        />
        <button type='submit'>
            <MdPlaylistAdd 
                role='button'
                tabIndex={0}
                className='addBtn self-center outline-none active:text-[blue] focus:text-[blue] active:scale-[1.3] acctive:transition-all duration-100 acctive:drop-shadow-2xl
                md:h-8
                md:w-8'
                title='Click to add'
            />
        </button>
        
    
    </form>
  )
}

export default AddItem