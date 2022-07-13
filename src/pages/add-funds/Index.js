import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Text from "../../styled-components/Text";
import Button from "../../styled-components/Button";

const TextUnderline = styled(Text)`
    text-decoration: underline;
    margin: 16px 0;
`;

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

const AddFundsIndex = () => {
    const navigate = useNavigate();
    return (
        <>
            <Text style={{
                marginBottom: "31px"
            }}>Add funds</Text>
            <Text style={{
                marginBottom: `21px`
            }}>BUY</Text>
            <Text style={{
                marginBottom: `21px`
            }}>*BUSD logo here*</Text>
            <TextUnderline style={{
                marginBottom: `43px`
            }}>Choose other asset</TextUnderline>
            <Text style={{
                marginBottom: `30px`
            }}>Amount</Text>
            <AmountInput style={{
                marginBottom: "43px"
            }}>
                <Input />
            </AmountInput>
            <Text style={{
                marginBottom: `21px`
            }}>*saved Credit card* xxxxxx 4321</Text>
            <Text style={{
                marginBottom: `30px`
            }}>+Add Credit or Debit Card</Text>
            <div style={{
                display: "flex",
                justifyContent: "center",
            }}>
                <Button style={{
                    backgroundColor: "#15EA37",
                    height: "45px",
                    width: "123px"
                }} onClick={() => navigate("/main/add-funds/credit-detail")}>Next</Button>
            </div>
        </>
    )
}

export default AddFundsIndex;