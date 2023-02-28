import React from 'react'



const Task = (props) => {

    
	return( 
    <div>
        {props.name} - do {props.date}  
        <button>Zostało zrobione</button>
        <button>X</button>
    </div>
    )
}

export default Task
