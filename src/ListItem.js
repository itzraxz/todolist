import React from "react";
import { MdPendingActions, MdDelete } from "react-icons/md";
import { BsClipboard2CheckFill } from "react-icons/bs";

const ListItem = ({
  items,
  handleCheck,
  handleDelete,
  handleDiscription,
  setDiscription,
  discription,
}) => {
  return items.map((item) => (

    <li  key={item.id}>
    <form className={`grid grid-cols-[0.1fr_1fr_0.1fr] 
        ${
            item.checked 
            ? "bg-[#9893DA] opacity-75"
            : "bg-[#beb9fd]"
        }
        justify-around
        items-center  
        gap-x-[1vw] 
        p-[0.5vh_0.5vw]
        hover:p-[1vh_1vw] 
        rounded-lg 
        max-w-[80vw]
        min-w-max 
        text-[#15152c]
        hover:shadow-xl
        hover:transform
        hover:duration-100
        hover:ease
        hover:my-[1vh]
        md:p-[1vh_1vw]
        md:my-[1vh]
        md:hover:scale-105
        md:hover:ease-in-out
        md:hover:transform
        md:hover:duration-150
        md:hover:shadow-[#15152c]
        md:hover:shadow-md
        `
        }
        onSubmit={(e) => handleDiscription(e, item.id)}
    > 
        
        <div
            className="justify-self-center"
            onClick={(e) => handleCheck(item.id)}
        >
            {!item.checked ? (
            <MdPendingActions className="listStatusBtn" />
            ) : (
            <BsClipboard2CheckFill className="listStatusBtn" />
            )}
        </div>

        <div
            className="group
            flex 
            flex-col 
            max-w-[60vw] 
            break-all
            min-h-max
            hover:pb-[0.5vh]
            gap-y-[1vh]
            items-start
            md:pb-[0.5vh]
            "
        >
            <label
                className={
                item.checked
                    ? "line-through font-cookie text-[1.3rem] self-center"
                    : "normal self-center font-cookie text-[1.3rem]"
                }
                onDoubleClick={() => handleCheck(item.id)}
            >
                {item.title}
            </label>
            
            <div
                className=" 
                    group-hover:flex
                    flex-col    
                    text-[0.7rem] text-slate-600
                    group-hover:min-w-max group-hover:min-h-max  
                    hidden
                    group-hover:transform
                    group-hover:duration-100
                    group-hover:ease-in-out
                    justify-self-start
                    border-y
                    py-[0.5vh]
                    border-[#15152c2a]
                    md:flex
                    
                    "
                    
            >
            
                <label
                >
                    Created:{item.createdTime}
                </label>
                
                {item.checked ? (
                <label
                    className="text-slate-800"
                >
                    Finished:{item.finishedTime}
                </label>
                ) : null}
            </div>
        
            {!item.body && !item.checked && (
                <div
                    className="
                    group-hover:flex
                    group-hover:min-w-full 
                    text-[0.8rem] text-slate-900
                    hidden
                    group-hover:transform
                    group-hover:duration-100
                    group-hover:ease-out
                    "
                    >
                    <input
                        type="text"
                        id="discription"
                        name="discription"
                        className="rounded-full
                        min-w-full
                        shadow-xl
                        border-[1px]
                        border-[#15152c]
                        pl-[1vw]
                        "
                        title="Add Discription"
                        required
                        placeholder="Add Discription"
                        value={discription}
                        onChange={(e) => setDiscription(e.target.value)}
                    />
                </div>
            )}

            {item.body && (
                <label
                    className=" 
                    group-hover:flex  
                    text-[0.8rem] text-slate-900
                    group-hover:min-w-[100%] group-hover:min-h-max  
                    hidden
                    group-hover:transform
                    group-hover:duration-100
                    group-hover:ease-out
                    break-all
                    justify-self-start
                    max-w-[60vw]
                    md:flex
                    md:hover:justify-self-center
                    "
                >
                <p
                    className="max-w-[60vw]
                    leading-none
                    "
                >
                    <b>Discription:</b> {`${item.body}`}
                </p>
                </label>
            )}

        </div>

        <MdDelete
            tabIndex={0}
            role="deleteItem"
            className="min-h-[4vh] 
            min-w-[4vw] 
            outline-none 
            active:text-[red]
            focus:text-[red]
            active:scale-[1.3]
            active:transform 
            active:duration-100"
            title="Delete"
            onClick={() => handleDelete(item.id)}
        />
    </form>  
    </li>
  ));
};

export default ListItem;
