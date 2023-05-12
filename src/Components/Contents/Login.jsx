import "../../Styles/Contents/Login.css"
import InputField from "../ReUsed/InputField";
import SubmitButton from "../ReUsed/SubmitButton";

const Login =()=> {
    
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
    
    return (
        <div className="Login">
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