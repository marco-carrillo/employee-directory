//****************************************************************************/
//  This component just formats and shows the header of the page to provide  */
//  information about what the overall application is, what is does and      */
//  what type of information is available here.                              */
//****************************************************************************/
import React from "react";
import "./headerStyle.css";

function Header() {
    return(
        <div className="jumbotron jumbotron-fluid toppage pb-1 pt-0 my-0">
        <div className="container text-center">
            <h1 className="maintitle">Employee Directory MarcoSoft Inc.</h1>
            {/* <p className="lead">Random list of users (limited to 75).  Filterable (enter string below) </p> */}
        </div>
        </div>
    )
}

export default Header;