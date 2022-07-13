import Text from '../../../styled-components/Text';
import Button from '../../../styled-components/Button';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ButtonEffect = styled(Button)`
    backgroundColor: #F1F1F1;
    width: 111px;
    height: 39px;
    box-sizing: border-box;
    &:active, &:focus, &.active {
        border: 2px solid #7EC8DF;
    }
`;

const Register3 = () => {
    const navigate = useNavigate();
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
        }}>
            <Text style={{
                fontSize: "18px",
                marginTop: "35px",
            }}>Register or sign in</Text>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "32px 20px 0 20px",
                borderRadius: "10px",
                boxShadow: "2px 0px 5px #F0F0F0",
                padding: "32px 34px 21px 34px",
                width: "calc(100% - 40px - 68px)",
            }}>
                <Text style={{
                    marginBottom: "36px",
                    textAlign: "center"
                }}>Choose preferred<br />quick sign in</Text>
                <ButtonEffect className="active" style={{
                    marginBottom: "19px"
                }}>Pin</ButtonEffect>
                <ButtonEffect style={{
                    marginBottom: "50px"
                }}>Fingerprint</ButtonEffect>
                <Button style={{
                    backgroundColor: "#15EA37",
                    width: "111px",
                    height: "39px",
                    marginBottom: "31px"
                }} onClick={() => navigate("/extra/register4")}>Next</Button>
                <Text>1/2</Text>
            </div>
        </div>
    )
}

export default Register3;
