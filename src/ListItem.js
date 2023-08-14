import React from "react";
import { MdPendingActions, MdDelete } from "react-icons/md";
import {BsClipboard2CheckFill} from 'react-icons/bs'

const ListItem = ({items, handleCheck, handleDelete, handleDiscription, setDiscription, discription}) => {
  
    return (
        items.map((item)=>(
            <li
                className={`group grid grid-cols-[0.1fr_1fr_0.1fr] ${item.checked?"bg-[#9893DA] opacity-75":"bg-[#beb9fd]"}
                items-center hover:gap-[1vh_1vw] gap-x-[1vw] p-[1vh_1vw] rounded-[10px] max-w-[87vw] hover:shadow-xl min-w-max text-[#15152c]`}
                key={item.id}
            >
            
                <div className=" justify-self-center" onClick={(e)=>handleCheck(item.id)}>
                    {!item.checked 
                        ? (<MdPendingActions className="listStatusBtn"/>)
                        :(<BsClipboard2CheckFill className="listStatusBtn" />)
                    }
    
                </div>

                <label 
                    htmlFor="listItem" 
                    className ={item.checked
                    ?' line-through justify-self-start max-w-[60vw] break-all'
                    :'justify-self-start  break-all max-w-[60vw]'}
                    onDoubleClick={()=>handleCheck(item.id)}
                >
                    {item.title}        
                </label>

                <MdDelete
                    tabIndex={0}
                    role="deleteItem"
                    className="min-h-[4vh] min-w-[4vw] outline-none active:text-[red] focus:text-[red] active:scale-[1.3] active:transition-all active:duration-100"
                    onClick={()=>handleDelete(item.id)}
                />

                <div
                    className="
                        col-span-3 
                        group-hover:flex 
                        group-hover:flex-col
                        gap-x-[2vw] 
                        text-[0.7rem] text-slate-600
                        group-hover:w-max group-hover:h-max  
                        hidden
                        w-[0] h-[0] 
                        group-hover:transform
                        group-hover:duration-100
                        group-hover:ease-out
                        justify-self-center
                        "
                >
                    
                    <label htmlFor="createdTime">
                        Created:{item.createdTime}
                    </label>
                    
                    {item.checked ? (
                        <label 
                        htmlFor="finishedTime"
                        className=" text-slate-800"
                    >
                        Finished:{item.finishedTime}
                    </label>
                    ):null}
                     
                </div>
                
                {!item.body && !item.checked &&
                    (   
                    <form 
                        className="col-span-3 
                        group-hover:flex 
                        group-hover:flex-col 
                        text-[0.8rem] text-slate-900
                        group-hover:w-max group-hover:h-max  
                        hidden
                        group-hover:transform
                        group-hover:duration-100
                        group-hover:ease-out
                        justify-self-center
                        py-[1vh]"

                        onSubmit={(e)=>handleDiscription(e,item.id)}
                    >   
                        <input 
                            type="text" 
                            className="rounded-full 
                            min-w-[35vw]
                            pl-[1vw]
                            shadow-md
                            "
                            required
                            placeholder="Add Discription"
                            value={discription}
                            onChange={(e)=>setDiscription(e.target.value)}
                        />
                    </form>
    
                    )
                }
                
                {item.body && 
                    <label 
                        className="col-span-3 
                        group-hover:flex 
                        group-hover:flex-col 
                        text-[0.7rem] text-slate-900
                        group-hover:w-max group-hover:h-max  
                        hidden
                        group-hover:max-w-[80vw]
                        w-[0] h-[0] 
                        group-hover:transform
                        group-hover:duration-100
                        group-hover:ease-out
                        px-[1vw]
                        break-all
                        justify-self-start              "         
                    > 
                        <p>
                            <b>Discription:</b> {`${item.body}`}
                        </p>
                    </label>
                }
                
        </li>

        ))
    );
};

export default ListItem;
