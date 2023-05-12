import "../../Styles/Contents/Login.css"
import InputField from "../ReUsed/InputField";
import SubmitButton from "../ReUsed/SubmitButton";
import Api from "../../Api";

import { useState } from "react";

const Login =()=> {

    const [enter, setEnter] = useState({email:'', password:''})
    
    const inputs = [
        {
            name:'email',
            label:'Email',
            placeholder:'example@email.com'
        },

        {
            name:'password',
            label:'password',
            placeholder:'example@email.com'
        },
    ]

    const handle_User =async( event )=> {
        event.preventDefault();

        try {
            const request = new Api;
            const response = await request.login_User(enter)

            console.log(response.data)
        }

        catch(error) {
            console.log(error)
        }
    }
    
    return (
        <div className="Login">
            <div className="row g-0">
                <div className="col-6 Login-Section">
                    <div className="Align-Login-Form">
                        <div className="col-8">
                            <form onSubmit={handle_User}>
                                {inputs.map((input) => (
                                    <InputField
                                        Label={input.label}
                                        Placeholder={input.placeholder}
                                        Value={enter[input.name]}
                                        Entered={(e)=> setEnter({...enter, [input.name]:e.target.value})}
                                    />
                                ))}

                                <SubmitButton Title="Login"/>
                            </form>

                            <h6>New to Can Academy? <a href="/register">Register</a></h6>
                        </div>
                    </div>
                </div>

                <div className="col-6">

                </div>
            </div>
        </div>
    )
}

export default Login;