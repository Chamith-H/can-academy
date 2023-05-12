import InputField from "../ReUsed/InputField";
import SubmitButton from "../ReUsed/SubmitButton";

const Register =()=> {
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

    return (
        <div className="Register">
             <div className="row g-0">
                <div className="col-6 Login-Section">
                    <div className="Align-Login-Form">
                        <div className="col-8">
                            <form action="">
                                {inputs.map((input) => (
                                    <InputField
                                        Label={input.label}
                                        Placeholder={input.placeholder}
                                    />
                                ))}

                                <SubmitButton Title="Register"/>
                            </form>
                            
                            <h6>Already have an account? <a href="/login">Login</a></h6>
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