import React from 'react'
import List from './List'

const Home = ({handleCheck, items, handleDelete, handleDiscription, setDiscription,discription}) => {

  return (
    <main 
      className=' flex-grow-1 min-h-[56vh] my-[5vh] flex justify-center items-center w-[87vw] mx-auto mb-[10vh]'
    >
        <List 
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          handleDiscription={handleDiscription}
          discription={discription}
          setDiscription={setDiscription}
        />
    </main>
  )
}

export default Home