import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditItem = ({

    items, setEditTitle,setEditDiscrip, handleEditUpdate, editDiscrip, editTitle
    }) => {
 const navigate = useNavigate();
 const {id} = useParams();  
 const item = items.find((item)=> (item.id).toString() === id)
 useEffect(()=>{
   if(item){
    setEditTitle(item.title); 
    setEditDiscrip(item.body); 
   }
   else{
    navigate('/');
   }
 },[item,navigate,setEditDiscrip,setEditTitle])
 return (
    <main className="flex-grow-1 flex flex-col min-h-[50vh] my-[5vh] justify-center items-center w-[87vw] mx-auto mb-[10vh]">
      <h2 className="self-center p-[1vh_1vw] text-[1.5rem] drop-shadow-[1px_1px_2px_#15152c]">
        Edit Task
      </h2>

      <form className="relative flex flex-col gap-y-[0.5rem]" onSubmit={(e)=>{e.preventDefault(); handleEditUpdate(item.id)}}
      >
        <label
          htmlFor="editTitle"
          name="editTitle"
          className=" absolute left-[-9999px]"
        >
          Title:
        </label>
        <input
          type="text"
          name="editTitle"
          id="editTitle"
          placeholder="Title"
          className="rounded-lg
                p-[0.2vh_2vw] text-[#15152c] 
                outline-[#15152c] outline-[4px]
                border border-[#15152c] border-opacity-50
                bg-[#d4d1ff]"
          required
          autoFocus
          value={editTitle}
          onChange={(e)=>{setEditTitle(e.target.value)}}   
        />

        <label
          htmlFor="editDiscrip"
          name="editDiscrip"
          className="absolute left-[-9999px]"
        >
          Discription:
        </label>
        <textarea
          name="editDiscrip"
          id="editDiscrip"
          cols="30"
          rows="7"
          placeholder="Discription"
          required
          className="rounded-lg
                p-[0.2vh_2vw] text-[#15152c] 
                outline-[#15152c] outline-[4px]
                border border-opacity-50 border-[#15152c]
                bg-[#d4d1ff]"
          value={editDiscrip}
          onChange={(e)=>{setEditDiscrip(e.target.value)}}     
        />

        <div className="flex justify-end gap-[1vh_1vw]">
          <Link
            to="/"
            className="rounded border p-[0.2vh_1.5vw] bg-[#9893da8c]
                    active:bg-[#15152c]
                    active:text-[#9893da]
                    active:duration-100"
          >
            Cancel
          </Link>

          <button
            type="submit"
            className="rounded border p-[0.2vh_1.5vw] bg-[#9893da8c]
                    active:bg-[#15152c]
                    active:text-[#9893da]
                    active:duration-100"
          >
            Done
          </button>
        </div>
      </form>
    </main>
  );
};

export default EditItem;
