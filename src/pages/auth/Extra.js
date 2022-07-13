import { useNavigate, Outlet } from "react-router";
import LeftIcon from "../../components/Icons/Left";
import Text from '../../styled-components/Text';

const Extra = () => {
    const navigate = useNavigate();
    return (
    <div style={{
        width: "calc(100% + 44px)",
        height: "568px",
        margin: "0 -22px",
    }}>
        <div style={{
            height: "50px",
            width: "100%",
            backgroundColor: "#C4C4C4",
        }}></div>
        <div style={{
            position: "absolute",
            left: "16px",
            top: "60px",
            cursor: "pointer"
        }} onClick={() => {navigate(-1)}}>
            <LeftIcon width={"16px"} height={"27px"}></LeftIcon>
        </div>
        <Text style={{
            fontSize: "18px",
            lineHeight: "21px",
            marginTop: "35px",
            width: "100%",
            textAlign: "center",
        }}>Valo.id logo</Text>
        <Outlet />
    </div>)
}

export default Extra;