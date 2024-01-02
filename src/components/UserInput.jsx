import { memo } from "react";

function InputComponent({children, typeContent, changeEvent}){
    return (
        <div>
            <p>
            <label id="label">{children}</label>
            <input id="input" onChange={(event)=>changeEvent(event, typeContent)} type="number" defaultValue={0} required></input>
            </p>
        </div>
    );
}

function UserInput({onChange}){
    return (
        <div id="user-input">
            <div className="input-group">
                <InputComponent typeContent="initialInvestment" changeEvent={onChange}>INITIAL INVESTMENT</InputComponent>
                <InputComponent typeContent="annualInvestment" changeEvent={onChange}>ANNUAL INVESTMENT</InputComponent>
            </div>
            <div className="input-group">
                <InputComponent typeContent="expectedReturn" changeEvent={onChange}>EXPECT RETURN</InputComponent>
                <InputComponent typeContent="duration" changeEvent={onChange}>DURATION</InputComponent>
            </div>
        </div>
    );
}

export default memo (UserInput);