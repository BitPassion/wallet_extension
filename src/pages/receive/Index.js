import Button from "../../styled-components/Button";
import Text from "../../styled-components/Text";
import { useNavigate } from "react-router-dom";

const Index = () => {
    const navigate = useNavigate();
    return (<>
        <Text style={{
            marginBottom: `56px`,
        }}>Request a payment</Text>
        <Text style={{
            margin: `19px`,
        }}>Send link</Text>
        <Text style={{
            marginBottom: "16px"
        }}>Your request is ready to send!</Text>
        <Text style={{
            width: `50%`,
            textAlign: "center",
            marginBottom: "37px"
        }}>Send this link to a friend, and it will ask them to send *amount & token here*</Text>
        <Text style={{
            marginBottom: `34px`,
            textAlign: "center",
        }}>*link here*</Text>
        <Button style={{
            marginBottom: `10px`,
            backgroundColor: "#15EA37",
            width: "145px",
            height: "45px"
        }}>Copy to clipboard</Button>
        <Button style={{
            marginBottom: `10px`,
            backgroundColor: "#15EA37",
            width: "145px",
            height: "45px"
        }} onClick={() => navigate('/main/receive/detail/qr-code')}>QR code</Button>
        <Button style={{
            marginBottom: `10px`,
            backgroundColor: "#15EA37",
            width: "145px",
            height: "45px"
        }}>Send link</Button>
    </>)
}

export default Index;