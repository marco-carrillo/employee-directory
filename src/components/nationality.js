import React from 'react';

function Nationality(props){
    return(
        <form className="text-center"> 
            <div className="form-check form-check-inline">
                <label>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="all" checked={props.whichOne==="all"} onChange={props.onChange}/>
                    All
                </label>
            </div>

            <div className="form-check form-check-inline">
                <label>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="AU" checked={props.whichOne==="AU"}  onChange={props.onChange}/>
                    AU
                </label>
            </div>
 
            <div className="form-check form-check-inline">
                <label>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="BR" checked={props.whichOne==="BR"}  onChange={props.onChange}/>
                    BR
                </label>
            </div>

            <div className="form-check form-check-inline">
                <label>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="CA" checked={props.whichOne==="CA"}  onChange={props.onChange}/>
                    CA
                </label>
            </div>

            <div className="form-check form-check-inline">
                <label>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios5" value="CH" checked={props.whichOne==="CH"}  onChange={props.onChange}/>
                    CH
                </label>
            </div>
            <div className="form-check form-check-inline">
                <label>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios6" value="DE" checked={props.whichOne==="DE"} onChange={props.onChange}/>
                    DE
                </label>
            </div>

            <div className="form-check form-check-inline">
                <label>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios7" value="DK" checked={props.whichOne==="DK"}  onChange={props.onChange}/>
                    DK
                </label>
            </div>
 
            <div className="form-check form-check-inline">
                <label>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios8" value="ES" checked={props.whichOne==="ES"}  onChange={props.onChange}/>
                    ES
                </label>
            </div>

            <div className="form-check form-check-inline">
                <label>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios9" value="FI" checked={props.whichOne==="FI"}  onChange={props.onChange}/>
                    FI
                </label>
            </div>

            <div className="form-check form-check-inline">
                <label>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios10" value="FR" checked={props.whichOne==="FR"}  onChange={props.onChange}/>
                    FR
                </label>
            </div>
            <div className="form-check form-check-inline">
                <label>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios11" value="GB" checked={props.whichOne==="GB"} onChange={props.onChange}/>
                    GB
                </label>
            </div>

            <div className="form-check form-check-inline">
                <label>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios12" value="IE" checked={props.whichOne==="IE"}  onChange={props.onChange}/>
                    IE
                </label>
            </div>
 
            <div className="form-check form-check-inline">
                <label>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios13" value="IR" checked={props.whichOne==="IR"}  onChange={props.onChange}/>
                    IR
                </label>
            </div>

            <div className="form-check form-check-inline">
                <label>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios14" value="NO" checked={props.whichOne==="NO"}  onChange={props.onChange}/>
                    NO
                </label>
            </div>

            <div className="form-check form-check-inline">
                <label>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios15" value="NL" checked={props.whichOne==="NL"}  onChange={props.onChange}/>
                    NL
                </label>
            </div>
            <div className="form-check form-check-inline">
                <label>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios16" value="NZ" checked={props.whichOne==="NZ"} onChange={props.onChange}/>
                    NZ
                </label>
            </div>

            <div className="form-check form-check-inline">
                <label>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios17" value="TR" checked={props.whichOne==="TR"}  onChange={props.onChange}/>
                    TR
                </label>
            </div>
 
            <div className="form-check form-check-inline">
                <label>
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios18" value="US" checked={props.whichOne==="US"}  onChange={props.onChange}/>
                    US
                </label>
            </div>
        </form>
    )
}

export default Nationality;