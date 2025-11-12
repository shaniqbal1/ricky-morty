
import {BrowserRouter, Route, Routes } from "react-router"
import HomePage from "../src/contanier/homepage/homepage"
import Profile from "../src/contanier/profile/profile"
function App() {

  return (
    <BrowserRouter>
     <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/profile/:id" element={<Profile />} />

      </Routes>



    </BrowserRouter>
  )
}

export default App
