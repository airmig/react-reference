import React from "react";
import { useContext } from "react";
import SampleContext from "./Context";

function Nested(){
    const {contextValue, updateContextValue} = useContext(SampleContext);

    return <>Nested context: {contextValue}</>
}

export default Nested;