
import React from "react"
import { useContext } from "react";
import SampleContext from "./Context";
import Nested from "./Nested";

function Header(props) {
    const {contextValue, updateContextValue} = useContext(SampleContext);
    
    function updateValue() {
        updateContextValue('updated Value');
    }
    
    return <><h1>Header</h1>
    Context value: {contextValue}<br/>
    <button id="headerClick" onClick={updateValue}>Change context value</button><br/>
    <Nested/><br/>
    </>
  }
  
  export default Header;