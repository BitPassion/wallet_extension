import Text from "../../styled-components/Text";
import styled from 'styled-components';

import { InputBox } from './Index';

const Input = styled.input``;
const AmountInput = styled.div`
    width: 200px;
    height: 59px;
    text-align: center;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.25);
    border-radius: 1000px;
    border: none;
    outline: none;
    & ${Input} {
        border: none;
        border-bottom: 1px solid black;
        width: 89px;
        height: 48px;
        text-align: center;
        &:active, &:focus {
            outline: none;
        }
    }
`;

const Confirm = () => {
    return (<>
        <Text style={{
            marginBottom: "5px",
        }}>From:</Text>
        <InputBox style={{
            marginBottom: "20px"
        }} placeholder={`Account 1`}></InputBox>
        <Text style={{
            marginBottom: "-6px"
        }}>To:</Text>
        <InputBox style={{
            marginBottom: "26px"
        }} placeholder={`Account 2`}></InputBox>
        <Text style={{
            marginBottom: "26px",
            fontSize: "18px"
        }}>Amount</Text>
        <AmountInput style={{
            marginBottom: "25px"
        }}>
            <Input />
        </AmountInput>
        <Text>Balance</Text>
    </>)
}

export default Confirm;