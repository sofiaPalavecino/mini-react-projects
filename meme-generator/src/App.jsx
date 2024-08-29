import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Header from './components/Header/Header'
import MemeForm from './components/MemeForm/MemeForm'

function App() {

  return (
    <>
      <Header/>
      <MemeForm/>
    </>
  )
}

export default App
