import React, { useState } from "react";
import Nav from "./Nav";
import HogCards from './HogCards'
import Form from './Form'

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
    let array = [...porkers]
    const sortedHogs = array.sort((a, b) => {
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

  const handleWeightSort = () => {
    let array = [...porkers]
    const sortedHogs = array.sort((a, b) => {
      if (a.weight < b.weight) {
        return -1
      }
      if (a.weight > b.weight) {
        return 1
      }
      return 0
    })
    setHogs(sortedHogs)
  }

  const handleNewPig = (formData) => {
    setHogs([...hogs, formData])
  }

  return (
    <div className="App">
      <Nav />

    <label htmlFor="grease">Filter by Grease</label>
    
    <select name="grease" id="grease" onChange={(e) => handleChange(e.target.value)}>
      <option value="all">All</option>
      <option value="true">Greased</option>
      <option value="false">Ungreased</option>
    </select>
    <div>
      <button onClick={handleNameSort}>Sort by Name</button>
      <button onClick={handleWeightSort}>Sort by Weight</button>
    </div>
    <div>
      <h4>Add Hoggermens</h4>
      <Form newPig={handleNewPig}/>

    </div>

    <br/>
    <br/>
      <HogCards hogs={hogs}/>
    </div>
  );
}

export default App;
