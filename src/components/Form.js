import React, {useState} from 'react'

function Form({ newPig }) {
    const [formData, setFormData] = useState({
        name: "",
        specialty: "",
        greased: "true",
        weight: 0,
        ["highest medal achieved"]: "",
    });
    
    function handleChange(event) {
        
        if (event.target.name === "weight") {
            event.target.value = parseInt(event.target.value)
        }
        setFormData({
        ...formData,
        [event.target.name]: event.target.value,
        });
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        //console.log(formData);
    
        newPig(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
            Name:
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            </label>
            <label>
            Specialty:
            <input
                type="text"
                name="specialty"
                value={formData.specialty}
                onChange={handleChange}
            />
            </label>

            <label>
                Greased?
                <select
                name="greased"
                value={formData.greased}
                onChange={handleChange}
                >
                <option value="true">Yes</option>
                <option value="false">No</option>
                </select>
            </label>

            <label>
            Weight:
            <input
                type="text"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
            />
            </label>
            <label>
            Highest Medal Achieved:
            <input
                type="text"
                name="highest medal achieved"
                value={formData.["highest medal achieved"]}
                onChange={handleChange}
            />
            </label>
            <button type="submit">Add Hog</button>
        </form>
    )
}


export default Form