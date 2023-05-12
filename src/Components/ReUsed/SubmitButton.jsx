import "../../Styles/ReUsed/SubmitButton.css"

const SubmitButton =( props )=> {
    return (
        <button type="submit" className="Submit-Button mt-3">{props.Title}</button>
    )
}

export default SubmitButton