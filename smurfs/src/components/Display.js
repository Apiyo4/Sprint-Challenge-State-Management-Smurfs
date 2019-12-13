import React from 'react';
function Display(props){
    return(<div>
            <h2>{props.item.name}</h2>
            <p>Age: {props.item.age}</p>
            <p>Height: {props.item.height}</p>
    
    </div>)
}
export default Display;