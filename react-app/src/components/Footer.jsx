
import React from "react"
import SampleContext from "./Context";
import { useContext } from "react";

function Footer(){
  const {contextValue, updateContextValue} = useContext(SampleContext);
      return <><footer>2024</footer>
      <br/>
      Context:{contextValue}</>
   
  }

  export default Footer;