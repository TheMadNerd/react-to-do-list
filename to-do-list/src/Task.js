import React from 'react'



const Task = (props) => {

   
    
	return( 
    <div>
        <p>
        {props.name} - do {props.date}
        <button>Zostało zrobione</button>
        <button onClick={props.deleteHandler}>X</button>
        </p>
    </div>
    )
}

export default Task
