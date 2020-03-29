import React from 'react';

function NbrRecords(props){
    return(
        <form className="text-center my-0 py-0"> 
            <div className="form-check form-check-inline">
                <label>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="10" checked={props.whichOne==="10"} onChange={props.onChange}/>
                    10 users
                </label>
            </div>

            <div className="form-check form-check-inline">
                <label>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="100" checked={props.whichOne==="100"}  onChange={props.onChange}/>
                    100 users
                </label>
            </div>
 
            <div className="form-check form-check-inline">
                <label>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="200" checked={props.whichOne==="200"}  onChange={props.onChange}/>
                    200 users
                </label>
            </div>

            <div className="form-check form-check-inline">
                <label>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="300" checked={props.whichOne==="300"}  onChange={props.onChange}/>
                    300 users
                </label>
            </div>

            <div className="form-check form-check-inline">
                <label>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios5" value="400" checked={props.whichOne==="400"}  onChange={props.onChange}/>
                    400 users
                </label>
            </div>
        </form>
    )
}

export default NbrRecords;