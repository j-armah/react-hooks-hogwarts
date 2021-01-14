import React, {useState} from 'react'
import PigImage from './PigImage'

function Hog( {hog} ) { 
    const [isClicked, setIsClicked] = useState("")
    const [isHid, setIsHid] = useState("")
    const {name, specialty, greased, weight } = hog
    const highestMedalAchieved = hog["highest medal achieved"]
    // console.log(greased)

    const handleClick = () => {
        setIsClicked("shown")
    }

    const handleHide = () => {
        setIsHid("hidden")
    }
    
    return (
        <div 
        onClick={handleClick} 
        className="ui eight wide column" 
        onClick={handleClick}
        id={isHid === "" ? "shown" : "hidden" }
        >
            <h3>{name}</h3>
            <PigImage name={name}/>
            <div className={isClicked === "" ? "hidden" : "shown" }>
                <p>Specialty: {specialty}</p>
                <p>Weight: {weight}</p>
                <p>Greased: {greased ? "Yes" : "No"}</p>
                <p>Highest Medal: {highestMedalAchieved}</p>
                <button onClick={handleHide}>Hide Hog</button>
            </div>
            
        </div>
    )
}

export default Hog