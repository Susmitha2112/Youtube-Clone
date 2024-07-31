import {useState}from 'react'
import { Route, Routes } from "react-router-dom"
import Navbars from "./Component/Navbars/Navbars"
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'



const App = () => {

   const [sidebar,setSidebar]=useState(true);



  return (
    <div>
      <Navbars setSidebar={setSidebar}/>
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar}/>}/>
        <Route path="/video/:categoryId/:videoId" element={<Video/>}/> 
      </Routes>
    </div>
  )
}

export default App