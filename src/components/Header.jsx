import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";

//define function component 'Header' to be used in 'App.jsx' 
function Header() {
    //return the HTML to be rendered
    return (
        <header>
      <h1>
      	{/*Function component from material-ui*/}
        <HighlightIcon />
        Keeper
      </h1>
    </header>
    );
}

//export 'Header' function component as default export
export default Header;