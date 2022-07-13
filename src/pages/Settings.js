import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import LeftIcon from "../components/Icons/Left";
import Text from '../styled-components/Text';

const Settings = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            height: `calc(100% - 50px)`,
            padding: `22px`,
            boxSizing: "border-box",
        }}>
            <div style={{
                display: "flex",
                cursor: "pointer",
                alignItems: "center",
                marginBottom: "21px"
            }} onClick={() => navigate(-1)}>
                <LeftIcon width={16} height={27}/>
                <Text style={{
                    paddingLeft: "12px",
                    textTransform: "capitalize",
                    fontSize: "14px",
                    lineHeight: "16px",
                    fontWeight: "bold",
                }}>{ location.pathname.slice("/main/settings/".length).replace('-',' ') }</Text>
            </div>
            <Outlet />
        </div>
    )
}

export default Settings;
