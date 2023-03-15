import React from "react";
import "./style.css"

export default function Form(){
    const [formData, setFormData] = React.useState({firstName: "", 
    lastName: "",
    email: "",
    comments: "",
    isFriendly:true ,
    employment: "",
    favColor: ""
})

    // event.target is who triggered the event
    //cast string to prop left value.
    //if type is a buttom so change the value to the value of chacked
    function handleChange(event){
        const {name , value, type, checked} = event.target
        setFormData(
            (prevFormData) => {
                return{
                    ...prevFormData,
                    [name]: type === "checkbox" ? checked : value
                }
            }
        )
    }
    function handleSubmit(event){
        // this is not rendering the data must do it!!
        event.preventDefault()
        console.log(formData)
    }
    return(
        <form className="form" onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            name = "firstName"
            //we want value to controll the component
            />
            <input
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            name = "lastName"
            />
            <input
            value={formData.email}
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name = "email"
            
            />
            <textarea
            value={formData.comments}
            placeholder="Comments"
            onChange={handleChange}
            name = "comments"
            
            />
            <input
            checked = {formData.isFriendly}
            type="checkbox"
            id = "isFriendly"
            onChange = {handleChange}
            name = "isFriendly"
            />
            <label htmlFor="isFriendly"> Are you riendly?</label>
            <br />
            <br />
            <fieldset>
                <legend> current employement status</legend>
                <input
                type="radio"
                id = "unemplyed"
                name="employment"
                value="unemployed"
                onChange = {handleChange}
                checked = {formData.employment === "unemployed"}
                />
                <label htmlFor="unemplyed">unemployed</label>
                 <br />

                 <input
                type="radio"
                id = "part-time"
                name="employment"
                value = "part-time"
                onChange = {handleChange}
                checked = {formData.employment === "part-time"}
                />
                <label htmlFor="part-time">Part-time</label>
                 <br />

                 <input
                type="radio"
                id = "full-time"
                name="employment"
                value="full-time"
                checked = {formData.employment === "full-time"}
                onChange = {handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                 <br />
            </fieldset>
            <br />

            <label htmlFor="favColor">What is your favorite color</label>
            <br />
            <select
                id = "favColor"
                value={formData.favColor}
                onChange = {handleChange}
                name = "favColor"
            >
                <option value="">--Choose--</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br />
            <br />
            {/* defualt type is Submit */}
            <button>Submit</button>
        </form>
    )
}