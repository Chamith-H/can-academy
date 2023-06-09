import "../../Styles/ReUsed/InputField.css"

const InputField =( props )=> {
    return (
        <div className="InputField pt-3">
            <label>{props.Label}</label>
            
            <input 
                type="" 
                placeholder={props.Placeholder}
                onChange={(e)=> props.Entered(e)}
            />
        </div>
    )
}

export default InputField