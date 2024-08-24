import { InputContainer } from "./styles";

function Input({ value, onChange }) {
    return (
        <InputContainer>
            <input value={value} onChange={onChange} placeholder="user/repo" />
        </InputContainer>
    );
}

export default Input;
