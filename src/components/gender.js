import React from 'react';

function Gender(props){
    return(
        <form className="text-center"> 
            <div className="form-check form-check-inline">
                <label>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="both" checked={props.whichOne==="both"} onChange={props.onChange}/>
                    All genders
                </label>
            </div>

            <div className="form-check form-check-inline">
                <label>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="female" checked={props.whichOne==="female"}  onChange={props.onChange}/>
                    Female
                </label>
            </div>
 
            <div className="form-check form-check-inline">
                <label>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="male" checked={props.whichOne==="male"}  onChange={props.onChange}/>
                    Male
                </label>
            </div>

        </form>
    )
}

export default Gender;