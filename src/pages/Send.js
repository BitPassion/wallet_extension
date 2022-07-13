import styled from 'styled-components';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Text from '../styled-components/Text';
import Button from '../styled-components/Button';
import ScrollContainer from "react-indiana-drag-scroll";

const SendLayout = styled.div`
    padding: 31px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 50px - 62px);
`;

const Footer = styled.div`
    display: flex;
    align-items: center;
    height: 45px;
`;

const baseUrl = "/main/send"
const subUrls = [
    "",
    "/detail",
    "/confirm"
]
const toSubUrls = [
    `${baseUrl}/detail`,
    `${baseUrl}/confirm`,
    `/`,
]

const Send = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    return (
        <SendLayout>
            <Text style={{
                marginBottom: `18px`,
            }}>Send</Text>
            <ScrollContainer style={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: '90%',
            }} vertical={true} horizontal={false} hideScrollbars={true}>
                <Outlet />
            </ScrollContainer>
            <Footer>
                <Button style={{
                    width: "123px",
                    height: "45px",
                    backgroundColor: "#15EA37"
                }} onClick={() => {navigate(toSubUrls[subUrls.indexOf(pathname.slice(baseUrl.length, pathname.length))])}}>Next</Button>
            </Footer>
        </SendLayout>
    )
}

export default Send;