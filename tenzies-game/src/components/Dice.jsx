import './Dice.scss'

export default function Dice({hold, held, value}){
    const styles = {
        backgroundColor: held ? "#59E391" : "white"
    }
    return (
        <div className="dice-face" onClick={hold} style={styles}>
            <div className="dice-num">{value}</div>
        </div>
    )
}