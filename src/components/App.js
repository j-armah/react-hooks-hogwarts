import React, { useState } from "react";
import Nav from "./Nav";
import HogCards from './HogCards'

import porkers from "../porkers_data";


function App() {
  const [hogs, setHogs] = useState(porkers)
  // console.log(hogs)
  // console.log("augustus gloop".replace(" ", "_"))

  const handleChange = ((value) => {
    
    // console.log(value)
    let selectedHogs = [...porkers]
   
    if (value !== "all") {
      selectedHogs = porkers.filter((hog) => {
        return  hog.greased.toString() === value 
      })
    }

    setHogs((hogs) => hogs = selectedHogs)
  })


  const handleNameSort = () => {
    console.log("hey")
    const sortedHogs = porkers.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      }
      if (a.name > b.name) {
        return 1
      }
      return 0
    })
    console.log(sortedHogs)
    setHogs(sortedHogs)
  }

  return (
    <div className="App">
      <Nav />

    <label for="grease">Filter by Grease</label>
    
    <select name="grease" id="grease" onChange={(e) => handleChange(e.target.value)}>
      <option value="all">All</option>
      <option value="true">Greased</option>
      <option value="false">Ungreased</option>
    </select>
    <div>
      <button onClick={handleNameSort}>Sort by Name</button><button>Sort by Weight</button>
    </div>

    <br/>
    <br/>
      <HogCards hogs={hogs}/>
    </div>
  );
}

export default App;
