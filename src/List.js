import React from 'react'
import ListItem from './ListItem'

const List = ({items, handleCheck, handleDelete, handleDiscription, setDiscription, discription}) => {

  return (
    <ul className='List list-none flex flex-col gap-y-[1vh] justify-center items-center max-w-[90vw]
    md:flex-row md:justify-center md:flex-wrap md:gap-[2vh_2vw]
    '>
      {items.length>=1 && 
      <>
        <ListItem 
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          handleDiscription={handleDiscription}
          setDiscription={setDiscription}
          discription={discription}
        />
      </>
      }
      {
        !items.length && 
        <>
          <p
            className='flex flex-col justify-center items-center max-w-[80vw] text-[1.4rem]'
          >
            List Is Empty
          </p> 
        </>
      }
    </ul>
  )
}

export default List