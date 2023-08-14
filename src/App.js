import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import {format} from 'date-fns'
import { useEffect, useState } from "react";

function App() {
  const time = format(new Date()," YYY,MMM-dd hh:mm:ss aa")
  const [items, setItems] = useState([]);
  
  const [addItem, setAddItem] = useState('');
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [discription, setDiscription] = useState('');

  useEffect(()=>{
    const fetchData = ()=>{
      const result = items.filter((item)=>(
        item.title.toLowerCase().includes(search.toLowerCase())
      ))
      setSearchResult(result.reverse());
    }
    fetchData();
  },[items, search]);

  const handleCheck=(id)=>{
    const newList= items.map((item)=>
      item.id === id ? {...item, checked:!item.checked, finishedTime:time}:item
    )
    setItems(newList);
  }

  const handleDelete =(id)=>{
    const newList = items.filter((item)=>(
      (item.id !== id)
    ))
    setItems(newList);
  }

  const handleAddItem =(event)=>{
    event.preventDefault();
    const id = (items.length ?items[items.length - 1].id +1: 1) 
    const newItem = {
      id,
      checked:false,
      title:addItem,
      body:null,
      createdTime: time,
      finishedTime: null,

    }
    setItems([...items, newItem]);
    setAddItem('');
  }

  const handleDiscription = (e,id)=>{
    e.preventDefault();
    const newList = items.map((item)=>
    item.id === id ? {...item, body:discription}:item
    )
    setItems(newList);
    setDiscription('');
  }

  return (
    <div 
      className=" flex-grow flex flex-col bg-[#f3f3f4] m-0 p-0 box-border max-h-max"
    >
      <Header title={"To-Do-List"} />
      <Nav 
        addItem={addItem}
        setAddItem={setAddItem}
        handleAddItem={handleAddItem}
        search={search}
        setSearch={setSearch}
      />
      <Home 
        items={searchResult}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        handleDiscription={handleDiscription}
        discription={discription}
        setDiscription={setDiscription}

      />
      <Footer />
    </div>
  );
}

export default App;
