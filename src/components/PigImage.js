import React from "react";
import augustus_gloop from "../assets/augustus_gloop.jpg";
import babe from "../assets/babe.jpg";
import bailey from "../assets/bailey.jpg";
import cherub from "../assets/cherub.jpg";
import galaxy_note from "../assets/galaxy_note.jpg";
import leggo_my_eggo from "../assets/leggo_my_eggo.jpg";
import peppa from "../assets/peppa.jpg";
import piggy_smalls from "../assets/piggy_smalls.jpg";
import piglet from "../assets/piglet.jpg";
import porkchop from "../assets/porkchop.jpg";
import trouble from "../assets/trouble.jpg";
import truffle_shuffle from "../assets/truffle_shuffle.jpg"; 


function PigImage({ name }) {
    let pigArray = [truffle_shuffle, trouble, porkchop, piglet, piggy_smalls, babe, peppa, augustus_gloop, bailey, cherub, galaxy_note, leggo_my_eggo ]
   
    
    let pigName = name.toLowerCase().replaceAll(" ","_")
    console.log(pigName)

    const selectedPig = pigArray.find(pig => {
        return pig.includes(pigName)
    })

    if (selectedPig === undefined) {
        return <img src={babe} alt={name}/>
    }
    return (
        <img src={selectedPig} alt={name}/>
    )

    
} 

export default PigImage