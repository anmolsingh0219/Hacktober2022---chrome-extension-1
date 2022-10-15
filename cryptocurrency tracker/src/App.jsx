import Header from "./components/Header"
import { useState } from "react"
import { CoinContext } from "./CoinContext"
import CoinTable from "./components/CoinTable"
function App() {

  return (
    <div className=" min-h-screen w-full bg-primaryBg text-white">
      <Header/>
      <CoinContext.Provider value={{}}>
        <CoinTable />
      </CoinContext.Provider>
    </div>
  )
}

export default App
