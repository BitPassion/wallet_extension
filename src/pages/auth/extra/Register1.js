import Text from '../../../styled-components/Text';
import Button from '../../../styled-components/Button';
import { FullInput } from "../Common";
import { useNavigate } from 'react-router-dom';

const Register1 = () => {
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
                margin: "52px 20px 0 20px",
                borderRadius: "10px",
                boxShadow: "2px 0px 5px #F0F0F0",
                padding: "43px 34px 21px 34px"
            }}>
                <Button style={{
                    backgroundColor: "white",
                    width: "111px",
                    height: "39px",
                    marginTop: "-62px",
                    boxShadow: "0px -2px 2px lightgrey",
                    marginBottom: "23px"
                }}>Register</Button>
                <FullInput className="font-roboto-400" style={{
                    marginBottom: "13px",
                    width: "213px"
                }} placeholder="Name or Nickname" />
                <FullInput className="font-roboto-400" style={{
                    marginBottom: "13px",
                    width: "213px"
                }} placeholder="Email" />
                <FullInput className="font-roboto-400" style={{
                    marginBottom: "7px",
                    width: "213px"
                }} placeholder="Password" />
                <Text style={{
                    marginBottom: "12px",
                }}>Password requirements here</Text>
                <Text style={{
                    marginBottom: "16px",
                    textDecoration: "underline"
                }}>Create password?</Text>
                <Button style={{
                    backgroundColor: "#15EA37",
                    width: "111px",
                    height: "39px",
                }} onClick={() => navigate("/extra/register2")}>Register</Button>
            </div>
        </div>
    )
}

export default Register1;
