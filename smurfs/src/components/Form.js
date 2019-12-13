import React from 'react';
import {connect} from 'react-redux';
import {inputChange, addSmurf, submit} from '../state/actionCreators';
 
export function Form({formData, inputChange, addSmurf, submit}){
     
    const onValueChange = event => {
        inputChange(
          event.target.name,
          event.target.value,
        );
       
      };
      
    const onFormSubmit = event => {
        event.preventDefault();
     
        console.log(formData);
        
        
        addSmurf(formData);
     
        submit();
      };
    return(
        <div>
            <form onSubmit= {onFormSubmit}>
                <label> Name
                    <input type="text"  name="name" value={formData.name} onChange={onValueChange} />
                </label>
                <br />
                <label> Age
                    <input type="number" name="age" value={formData.age} onChange={onValueChange} />
                </label>
                <br />
                <label> Height
                    <input type= "text"  name="height" value={formData.height} onChange={onValueChange} />
                </label>
                <br />
                <button type="submit"> Add Smurf</button>
            </form>
        </div>
    )
}
function mapStateToProps(state){
    return{
        formData : state.formData
    }
}
export default connect(mapStateToProps, {inputChange, addSmurf, submit})(Form);