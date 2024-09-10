import { useState, useEffect } from 'react'
import Dice from './components/Dice'
import './App.scss'

function App() {
    const [dice, setDice] = useState(allNewDice())
    const [tenzies, setTenzies] = useState(false)

    useEffect(() => {
        const firstValue = dice[0].value
        const allHeld = dice.every(d => d.held)
        const allSameNumber = dice.every(d => d.value === firstValue)
        if (allHeld && allSameNumber) {
            setTenzies(true)
        }
    }, [dice])

    function randomDiceValue() {
        return Math.ceil(Math.random() * 6)
    }

    function allNewDice() {
        const newArray = []
        for (let i = 0; i < 10; i++) {
            const newDice = {
                value: randomDiceValue(),
                held: false,
                id: i + 1
            }
            newArray.push(newDice)
        }
        return newArray
    }

    function rollUnheldDice(){
        if (!tenzies) {
            setDice((prevDice) => prevDice.map((d, i) => 
                d.held
                ? d
                : { value: randomDiceValue(), held: false, id: i + 1 }
            ))
        } else {
            setDice(allNewDice())
            setTenzies(false)
        }
    }

    function holdDice(id) {
        setDice(prevDice => prevDice.map(d => {
            return d.id === id ? { ...d, held: !d.held } : d
        }))
    }

    const diceElements = dice.map((d) => (
        <Dice 
            key={d.id} {...d} hold={() => holdDice(d.id)}
        />
    ))

    return (
        <main>
            { tenzies ?
                <div>
                    <h1>Congratulations!</h1>
                    <img className='celebration' src="celebration.svg" />
                </div>
                :
                <div>
                    <h1>Tenzies</h1>
                    <p>Roll until all dice are the same. Click each dice to freeze it at its current value between rolls.</p>
                    <div className="dice-container">
                        { diceElements }
                    </div>
                </div>
            }
            <button className='roll-dice' onClick={rollUnheldDice}>
                {tenzies ? "Reset Game" : "Roll"}
            </button>
        </main>
    )
}

export default App
