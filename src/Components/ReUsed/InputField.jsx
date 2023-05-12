import "../../Styles/ReUsed/InputField.css"

const InputField =( props )=> {
    return (
        <div className="InputField pt-3">
            <label>{props.Label}</label>
            <input 
                type="" 
                placeholder={props.Placeholder}
            />
        </div>
    )
}

export default InputField