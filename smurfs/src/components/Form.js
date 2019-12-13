import React from 'react';
 
function Form(){
    return(
        <div>
            <form>
            <label> Name
                <input  name='name' />
            </label>
            <br />
            <label> Age
                <input  name='age' />
            </label>
            <br />
            <label> Height
                <input  name='height' />
            </label>
            <br />
            <button> Add Smurf</button>
            </form>
        </div>
    )
}
export default Form;