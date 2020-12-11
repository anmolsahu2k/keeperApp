import React from "react";


//define function component 'Footer' to be used in 'App.jsx'  
function Footer() {
    //get current year from Date object
    const year = new Date().getFullYear();
    //return the HTML to be rendered
    return (
        <footer>
      <p>Copyright ⓒ {year}</p>
    </footer>
    );
}

//export 'Footer' function component as default export
export default Footer;