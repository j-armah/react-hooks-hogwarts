import React from 'react'
import Hog from './Hog'


const HogCards = ( {hogs} ) => {
    // The children in the columns should have class "ui eight wide column"
    // make sure their parent container has the class "ui grid container"
//    console.log(hogs)
   const allHogs = hogs.map((hog) => {
       return <Hog key={hog.name} hog={hog} />
   })
   

    return (
        <div className="ui grid container">
            {allHogs}
        </div>
    )
}


export default HogCards