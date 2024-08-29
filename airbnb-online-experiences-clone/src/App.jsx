import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Card from './components/Card/Card'
import data from './data'

function getData(){
  const cardsInfo = data.map((card) => {
    return <Card 
      key = {card.id}
      {...card}
    />
  })
  return cardsInfo
}

function App() {
  const [count, setCount] = useState(0)
  const info = getData();
  return (
    <>
      <Navbar/>
      <Hero />
      <section className='container'>
        {info}
      </section>
    </>
  )
}

export default App
