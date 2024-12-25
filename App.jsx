import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home"
import Navbar from "./components/Navbar"

const App = () => {
    const [mode , setMode] = useState(true);
    return(
    <div>
        <Navbar mode={mode} setMode={setMode}/>
        <Routes>
            <Route path="/" element={<Home mode={mode}/>}/>
        </Routes>
    </div>
    )
}

export default App