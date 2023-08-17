import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import {format} from 'date-fns'
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import EditItem from "./EditItem";

function App() {
  const navigate = useNavigate();
  const time = format(new Date()," YYY,MMM-dd hh:mm:ss aa")
  const [items, setItems] = useState([]);  
  const [addItem, setAddItem] = useState('');
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [discription, setDiscription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [editTitle, setEditTitle] = useState('')
  const [editDiscrip, setEditDiscrip] = useState('')

  useEffect(()=>{
    setTimeout(()=>{
      const fetchDataFromLocal = ()=>{
        const fetchData= JSON.parse(localStorage.getItem("listItems"));
        fetchData? setItems(fetchData):setItems([]);
      }
      fetchDataFromLocal(); 
      setIsLoading(true); 
    },2000)
  },[]);

  useEffect(()=>{ 
    const fetch= ()=>{
      const result = items.filter((item)=>(
        item.title.toLowerCase().includes(search.toLowerCase())
      ))
      setSearchResult(result.reverse());
    }
    fetch();
  },[items, search]);

  const handleCheck=(id)=>{
    const newList= items.map((item)=>
      item.id === id ? {...item, checked:!item.checked, finishedTime:time}:item
    )
    setItems(newList);
    localStorage.setItem("listItems",JSON.stringify(newList))
  }

  const handleDelete =(id)=>{
    const newList = items.filter((item)=>(
      (item.id !== id)
    ))
    setItems(newList);
    localStorage.setItem("listItems",JSON.stringify(newList));
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
    const newList = [...items, newItem];
    setItems(newList);
    setAddItem('');
    localStorage.setItem("listItems", JSON.stringify(newList))
  }

  const handleDiscription = (e,id)=>{
    e.preventDefault();
    const newList = items.map((item)=>
    item.id === id ? {...item, body:discription}:item
    )
    setItems(newList);
    localStorage.setItem("listItems", JSON.stringify(newList));
    setDiscription('');
  }

  
  const handleEditUpdate = (id)=>{
    console.log("Updated: ",id);
    const newList= items.map((item)=>
      item.id === id ? {...item, title:editTitle,body:editDiscrip}:item
    )
    setItems(newList);
    localStorage.setItem("listItems", JSON.stringify(newList));
    navigate('/');
  }

  return (
    <div 
      className=" flex-grow flex flex-col bg-[#f3f3f4] m-0 p-0 box-border max-h-max min-h-screen"
    >
      <Header title={"To-Do-List"} />
      <Nav 
          addItem={addItem}
          setAddItem={setAddItem}
          handleAddItem={handleAddItem}
          search={search}
          setSearch={setSearch}
      />
      <Routes>
        <Route path="/" element={
           <Home 
           items={searchResult}
           handleCheck={handleCheck}
           handleDelete={handleDelete}
           handleDiscription={handleDiscription}
           discription={discription}
           setDiscription={setDiscription}
           isLoading={isLoading}
         />
        }
        />
        <Route path="edit/:id" element={
          <EditItem 
            items={items}
            setEditTitle={setEditTitle}
            setEditDiscrip={setEditDiscrip}
            editDiscrip={editDiscrip}
            editTitle={editTitle}
            handleEditUpdate={handleEditUpdate}

          />
        }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
