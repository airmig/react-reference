
import React from "react"
import { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Greeting from "./components/Greeting"
import SampleContext from "./components/Context"

function App() {

  const [contextValue, updateContextValue] = useState('initial value');

  return (
    <SampleContext.Provider value={{contextValue, updateContextValue}}>
      <div>
        <Header/>
        Hello World!<br/>
        <Greeting name='stubname'/>
        <Footer/>
      </div>
    </SampleContext.Provider>

  )
}

export default App
