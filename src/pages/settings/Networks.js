import { useNavigate } from "react-router-dom";
// import ScrollContainer from "react-indiana-drag-scroll";
import styled from "styled-components";
import Text from "../../styled-components/Text";
import Button from "../../styled-components/Button";
import SignalImg from '../../components/SignalImg';
import PerfectScrollbar from 'react-perfect-scrollbar';

const Footer = styled.div`
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const networks = [{
    name: "Ethereum Main Network"
},{
    name: "Ropsten test network"
},{
    name: "Kovan test network"
},{
    name: "Rinkeby test network"
},{
    name: "Goerli test network"
},{
    name: "Binance Smart Chain Mainnet"
},{
    name: "Matic Mainnet"
},]

const Networks = () => {
    const navigate = useNavigate();
    return (
        <>
            <PerfectScrollbar style={{
                height: `calc(100vh - 50px - 39px - 44px)`,
                paddingRight: `12px`
            }}>
            {/* <ScrollContainer style={{height: `calc(100vh - 50px - 39px - 44px - 64px)`}} vertical={true} horizontal={false} hideScrollbars={true}> */}
                <ul style={{
                    listStyle: "none",
                    paddingLeft: "5px",
                    marginTop: `50px`,
                }}>
                    {networks.map((network, id) => {
                        return (
                            <li key={id} style={{
                                display: "flex",
                                alignItems: "center",
                                marginBottom: "27px"
                            }}>
                                <SignalImg signal={false}></SignalImg>
                                <Text style={{
                                    marginLeft: `25px`
                                }}>{network.name}</Text>
                            </li>
                        )
                    })}
                </ul>
            {/* </ScrollContainer> */}
            </PerfectScrollbar>
            <Footer>
                <Button style={{
                    backgroundColor: "#15EA37",
                    width: "157px",
                    height: "39px"
                }} onClick={() => navigate("/main/settings/add-network")}>Add Network</Button>
            </Footer>
        </>
    )
}

export default Networks;