import { useState } from "react";
// import ScrollContainer from "react-indiana-drag-scroll";
import styled from "styled-components";
import Button from '../../styled-components/Button';
import Text from '../../styled-components/Text';
import Title from "../../components/Title";
import Description from "../../components/Description";
import Switch from '../../components/Switch';
import HightLight from '../../styled-components/HighLight';
import PerfectScrollbar from 'react-perfect-scrollbar';

const IpfsGateway = styled(HightLight)`
    width: 100%;
    height: 26px;
    box-sizing: border-box;
    background: #f0f0f0;
    border-radius: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 14px;
`;

const Advanced = () => {
    const [showHexData, setShowHexData] = useState(false);
    const [customizeNonce, setCustomizeNonce] = useState(false);
    const [logs, setLogs] = useState(false);
    return (
        <PerfectScrollbar style={{
            height: `calc(100vh - 50px - 39px - 44px)`,
        }}>
        {/* <ScrollContainer style={{height: `calc(100vh - 50px - 39px - 44px)`}} vertical={true} horizontal={false} hideScrollbars={true}> */}
            <Title style={{
                marginBottom: "9px"
            }}>Reset account</Title>
            <Description style={{
                marginBottom: "11px"
            }}>protect your wallet by saving your secret recovery phrase<br /> in various places like on a piece of paper, password manager<br /> and/or the cloud.</Description>
            <div style={{
                display: "flex",
                justifyContent: "flex-start",
                marginBottom: "35px"
            }}>
                <Button style={{
                    backgroundColor: "#15EA37",
                    width: "157px",
                    height: "39px"
                }}>reset account</Button>
            </div>
            <Title style={{
                marginBottom: "9px"
            }}>IPFS Gateway</Title>
            <Description style={{
                marginBottom: "13px"
            }}>protect your wallet by saving your secret recovery phrase<br /> in various places like on a piece of paper, password manager<br /> and/or the cloud.</Description>
            <IpfsGateway style={{
                marginBottom: "24px"
            }}>
                <Text>https://cloudflare-ipfs.com/ipfs</Text>
            </IpfsGateway>
            <div style={{
                display: "flex",
                marginBottom: `9px`,
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <Title>Show hex data</Title>
                <Switch on={showHexData} onClick={() => setShowHexData(oldVal => !oldVal)}></Switch>
            </div>
            <Description style={{
                marginBottom: "21px"
            }}>protect your wallet by saving your secret recovery phrase<br /> in various places like on a piece of paper, password manager<br /> and/or the cloud.</Description>
            <div style={{
                display: "flex",
                marginBottom: `9px`,
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <Title>Customise transaction nonce</Title>
                <Switch on={customizeNonce} onClick={() => setCustomizeNonce(oldVal => !oldVal)}></Switch>
            </div>
            <Description style={{
                marginBottom: "26px"
            }}>protect your wallet by saving your secret recovery phrase<br /> in various places like on a piece of paper, password manager<br /> and/or the cloud.</Description>
            <div style={{
                display: "flex",
                marginBottom: `21px`,
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <Title>State logs</Title>
                <Switch on={logs} onClick={() => setLogs(oldVal => !oldVal)}></Switch>
            </div>
            <Description style={{
                marginBottom: "23px"
            }}>This will help metamask to debug an issue you might encounter.</Description>
            <div style={{
                display: "flex",
                justifyContent: "flex-start",
            }}>
                <Button style={{
                    backgroundColor: "#15EA37",
                    width: "157px",
                    height: "39px"
                }}>Download state logs</Button>
            </div>
        {/* </ScrollContainer> */}
        </PerfectScrollbar>
    )
}

export default Advanced;