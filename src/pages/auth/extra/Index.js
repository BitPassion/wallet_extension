import { useNavigate } from 'react-router-dom';
import Text from '../../../styled-components/Text';
import Button from '../../../styled-components/Button';
import styled from 'styled-components';

const TextUnderline = styled(Text)`
    margin-top: 57px;
    text-align: center;
    color: #7EC8DF;
    text-decoration: underline;
`;

const Index = () => {
    const navigate = useNavigate();
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
        }}>
            <Text style={{
                marginTop: "90px",
            }}>Register or sign in</Text>
            <div style={{
                marginTop: "35px",
                display: "flex",
                alignItems: "center",
            }}>
                <Button style={{
                    backgroundColor: "#15EA37",
                    width: "111px",
                    height: "39px",
                    marginRight: "30px",
                }} onClick={() => navigate("/extra/register1")}>Register</Button>
                <Button style={{
                    backgroundColor: "#15EA37",
                    width: "111px",
                    height: "39px"
                }} onClick={() => navigate("/login")}>Sign in</Button>
            </div>
            <TextUnderline style={{
                marginTop: "57px"
            }}>Restore account using seed phrase?</TextUnderline>
        </div>
    )
}

export default Index;