import React from 'react';

function NbrRecords(props){
    return(
        <form className="text-center"> 
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
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="500" checked={props.whichOne==="500"}  onChange={props.onChange}/>
                    500 users
                </label>
            </div>

            <div className="form-check form-check-inline">
                <label>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="1000" checked={props.whichOne==="1000"}  onChange={props.onChange}/>
                    1,000 users
                </label>
            </div>

            <div className="form-check form-check-inline">
                <label>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios5" value="5000" checked={props.whichOne==="5000"}  onChange={props.onChange}/>
                    5,000 users
                </label>
            </div>
        </form>
    )
}

export default NbrRecords;