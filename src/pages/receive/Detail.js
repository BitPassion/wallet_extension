import Text from "../../styled-components/Text";
import ComboBoxB from '../../components/ComboBoxB';
import styled from "styled-components";
import Button from "../../styled-components/Button";
import { useParams, useNavigate } from "react-router-dom";

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

const Detail = () => {
    const { method } = useParams();
    const navigate = useNavigate();
    return (<>
        <Text style={{
            marginBottom: `69px`,
        }}>Request a payment</Text>
        <ComboBoxB 
            list={[{text: "Choose asset"},{text: "Asset 01"},{text: "Asset 02"},]}
            onChange={() => {}}
        />
        <Text style={{
            margin: `22px 0`,
        }}>Amount</Text>
        <AmountInput style={{
            marginBottom: "25px"
        }}>
            <Input />
        </AmountInput>
        <Text style={{
            marginBottom: `49px`,
        }}>Balance</Text>
        <Button style={{
            backgroundColor: "#15EA37",
            height: "45px",
            width: "123px"
        }} onClick={() => navigate(`/main/receive/${method}?amount=500`)}>Next</Button>
    </>)
}

export default Detail;