import Text from "../../styled-components/Text";
import ComboBoxB from '../../components/ComboBoxB';
import styled from "styled-components";

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
    return (<>
        <ComboBoxB 
            style={{
                marginTop: "72px",
                marginBottom: `34px`,
            }}
            list={[{text: "Choose asset"},{text: "Asset 01"},{text: "Asset 02"},]}
            onChange={() => {}}
        />
        <Text style={{
            marginBottom: "30px"
        }}>Amount</Text>
        
        <AmountInput style={{
            marginBottom: "25px"
        }}>
            <Input />
        </AmountInput>
        <Text style={{
            marginBottom: "73px"
        }}>Balance</Text>
    </>)
}

export default Detail;