import Text from "../../styled-components/Text";
import Input from "../../styled-components/Input";
import styled from "styled-components";

export const InputBox = styled(Input)`
    border: none;
    height: 45px;
    text-align: center;
    outline: none;
    width: 85%;
    margin-top: 16px;
    margin-bottom: 16px;
`;

const Index = () => {
    return (<>
        <Text style={{
            marginTop: "34px",
            marginBottom: "21px"
        }}>From:</Text>
        <InputBox style={{
            marginBottom: "21px"
        }} placeholder={`Account 1`}></InputBox>
        <Text style={{
            marginBottom: "12px"
        }}>To:</Text>
        <InputBox style={{
            marginBottom: "50px"
        }} placeholder={`Add address, search or read qr`}></InputBox>
        <Text style={{
            marginBottom: "98px"
        }}>Transfer between my accounts</Text>
    </>)
}

export default Index;