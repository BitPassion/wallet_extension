import styled from 'styled-components';

const Input = styled.input`
    background-color: #f0f0f0;
    border-radius: 10px;
    height: 30px;
    border: none;
    font-size: 12px;
    &:active, &:focus {
        outline: none;
        border: none;
    }
    &::placeholder {
        color: #000000;
    }
`;

export default Input;