import "../../Styles/ReUsed/RadioInput.css"

const RadioInput =(props)=> {
    return (
        <div className="RadioInput">
            <input 
                type="radio" 
                value={props.Value}
                checked={props.Checked}
                onChange={(e)=> props.Marked(e)}
            />

            <label className="ms-1">{props.Label}</label>
        </div>
    )
}

export default RadioInput