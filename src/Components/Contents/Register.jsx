import "../../Styles/Contents/Register.css"
import { useState } from "react";
import InputField from "../ReUsed/InputField";
import SubmitButton from "../ReUsed/SubmitButton";
import RadioInput from "../ReUsed/RadioInput";
import Api from "../../Api";

const Register =()=> {
    const [enter, setEnter] = useState({type:null, name:'', email:'', phone:'', whatsapp:'', password:''})
    const inputs = [
        {
            name:'name',
            label:'Name',
            placeholder:'Your first name'
        },

        {
            name:'email',
            label:'Email',
            placeholder:'example@email.com'
        },

        {
            name:'phone',
            label:'Phone Number',
            placeholder:'Your phone number'
        },

        {
            name:'whatsapp',
            label:'Whatsapp Number',
            placeholder:'Your whatsapp number'
        },

        {
            name:'password',
            label:'Password',
            placeholder:'Enter a password'
        },

        {
            name:'confirm',
            label:'Confirm Password',
            placeholder:'Confirm your password'
        },
    ]

    const types = [
        {
            label:"I'm a Student",
            value:'student'
        },

        {
            label:"I'm an Instructor",
            value:'instructor'
        },
    ]

    const save_Data =async( event )=> {
        event.preventDefault();
        
        try {
            const request = new Api
            const response = await request.add_User(enter)
            console.log(response.data)
        }

        catch(error) {
            console.log(error)
        }
    }

    return (
        <div className="Register">
             <div className="row g-0">
                <div className="col-6 Login-Section">
                    <div className="Align-Login-Form">
                        <div className="col-8 py-5">
                            <div className="Register-Title">
                                <div>
                                    <h4>Register</h4>
                                    <p>Start your journey with us.</p>
                                </div>
                                
                                <i class="bi bi-person-fill-add"></i>
                            </div>
                            

                            <div className="liner mb-4"></div>

                            <form onSubmit={save_Data}>
                                <div className="Choose-Type">
                                    {types.map((type) => (
                                        <RadioInput
                                            Label={type.label}
                                            Value={type.value}
                                            Checked={enter.type === type.value}
                                            Marked={(e)=> setEnter({...enter, type:e.target.value})}
                                        />
                                    ))}
                                </div>

                                {inputs.map((input) => (
                                    <InputField
                                        Label={input.label}
                                        Placeholder={input.placeholder}
                                        Value={enter[input.name]}
                                        Entered={(e)=> setEnter({...enter, [input.name]:e.target.value})}
                                    />
                                ))}

                                <SubmitButton Title="Register"/>
                            </form>
                            
                            <h6 className="mt-2">Already have an account? <a href="/login">Login</a></h6>
                        </div>
                    </div>
                </div>

                <div className="col-6">

                </div>
            </div>
        </div>
    )
}

export default Register;