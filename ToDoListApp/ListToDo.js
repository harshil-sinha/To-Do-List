import React from 'react'
import "../ToDoListApp/App.css";

const ListToDo = (props) => {
  return (
   <>
                <li className="list-group-item" key={props.index}>
                   {props.item}
                    <button
                        className="btn btn-sm float-end bt"
                        onClick={() => props.fun(props.index)}
                    >
                       <i className='fa fa-times bt2'></i>
                    </button>
                </li>
   </>
  )
}

export default ListToDo