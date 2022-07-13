import { useState } from "react";
// import ScrollContainer from 'react-indiana-drag-scroll';
import styled from 'styled-components';
import HightLight from '../../styled-components/HighLight';
import Text from '../../styled-components/Text';
import CheckIcon from '../../components/Icons/Check';
import Button from '../../styled-components/Button';
import Title from "../../components/Title";
import Description from "../../components/Description";
import ComboBox from '../../components/ComboBox';
import Switch from '../../components/Switch';
import PerfectScrollbar from 'react-perfect-scrollbar';

const MetamaskInfo = styled(HightLight)`
    width: 150px;
    height: 80px;
    border-radius: 10px;
    background-color: #C4C4C4;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SecretRecoveryPhrase = styled(HightLight)`
    width: 100%;
    height: 26px;
    box-sizing: border-box;
    background: #F0F0F0;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 47px;
`;

const Security = () => {
    const [privacyMode, setPrivacyMode] = useState(false);
    const [incomingTransactoin, setIncomingTransactoin] = useState(false);
    return (
        <PerfectScrollbar style={{
            height: `calc(100vh - 50px - 39px - 44px)`,
            // paddingRight: `12px`
        }}>
        {/* <ScrollContainer style={{height: `calc(100vh - 50px - 39px - 44px)`}} vertical={true} horizontal={false} hideScrollbars={true}> */}
            <Title>Protect your wallet</Title>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: `14px`,
                paddingBottom: `13px`,
            }}>
                <MetamaskInfo>metamask<br /> info video</MetamaskInfo>
            </div>
            <Description>protect your wallet by saving your secret recovery phrase<br /> in various places like on a piece of paper, password manager<br /> and/or the cloud.</Description>
            <SecretRecoveryPhrase>
                <CheckIcon width={17} height={17} />
                <Text style={{
                    marginLeft: `12px`,
                }}>Secret recovery phrase backed up</Text>
            </SecretRecoveryPhrase>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "27px",
            }}>
                <Button style={{
                    backgroundColor: "#15EA37",
                    width: "127px",
                }}>Back up again</Button>
                <Button style={{
                    backgroundColor: "#15EA37",
                    width: "127px",
                }}>Reveal phrase</Button>
            </div>
            <Title style={{
                marginBottom: "9px",
            }}>Password</Title>
            <Description style={{
                marginBottom: "14px",
            }}>Choose a strong password to unlock metamask app<br /> on your device If you lose this password, you will need<br /> your Secret Recovery Phrase to re-import your wallet.</Description>
            <div style={{
                display: "flex",
                justifyContent: "flex-start",
                marginBottom: "22px",
            }}>
                <Button style={{
                    background: "#15EA37",
                    width: "127px",
                }}>Change password</Button>
            </div>
            <Title style={{
                marginBottom: "16px"
            }}>Auto-lock</Title>
            <Description style={{
                marginBottom: "10px"
            }}>Choose the amount of time before the application automatically locks</Description>
            <ComboBox 
                list={[{text: "30 seconds"},{text: "1 minute"},{text: "2 minute"},{text: "5 minute"},]}
                onChange={() => {}}
            />
            <Title style={{
                marginTop: "32px",
                marginBottom: "15px",
            }}>Show private key for “Name of the account here”</Title>
            <Description style={{
                marginBottom: "12px"
            }}>Choose the amount of time before the<br /> application automatically locks</Description>
            <div style={{
                display: "flex",
                justifyContent: "flex-start",
                marginBottom: '22px'
            }}>
                <Button style={{
                    backgroundColor: "#15EA37",
                    width: "157px",
                    height: "39px"
                }}>Show private key</Button>
            </div>
            <Title style={{
                marginBottom: "15px"
            }}>Clear privacy data</Title>
            <Description style={{
                marginBottom: "12px"
            }}>Clear privacy data so all websites must request<br /> access to view account information again.</Description>
            <div style={{
                display: "flex",
                justifyContent: "flex-start",
                marginBottom: "19px"
            }}>
                <Button style={{
                    backgroundColor: "#15EA37",
                    width: "157px",
                    height: "39px"
                }}>Clear privacy data</Button>
            </div>
            <Title style={{
                marginBottom: "21px"
            }}>Clear browser history</Title>
            <Description style={{
                marginBottom: "18px"
            }}>Clear your entire browser history</Description>
            <div style={{
                display: "flex",
                justifyContent: "flex-start",
                marginBottom: "22px"
            }}>
                <Button style={{
                    backgroundColor: "#15EA37",
                    width: "157px",
                    height: "39px"
                }}>Clear browser history</Button>
            </div>
            <Title style={{
                marginBottom: "21px"
            }}>Clear browser cookies</Title>
            <Description style={{
                marginBottom: "18px"
            }}>Clear your entire browser’s cookies</Description>
            <div style={{
                display: "flex",
                justifyContent: "flex-start",
                marginBottom: "27px"
            }}>
                <Button style={{
                    backgroundColor: "#15EA37",
                    width: "157px",
                    height: "39px"
                }}>Clear browser cookies</Button>
            </div>
            <div style={{
                display: "flex",
                marginBottom: `16px`,
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <Title>Privacy mode</Title>
                <Switch on={privacyMode} onClick={() => setPrivacyMode(oldVal => !oldVal)}></Switch>
            </div>
            <Description style={{
                marginBottom: "23px"
            }}>websites must request access to view<br /> your account information.</Description>
            <div style={{
                display: "flex",
                marginBottom: `16px`,
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <Title>Get incoming transactions</Title>
                <Switch on={incomingTransactoin} onClick={() => setIncomingTransactoin(oldVal => !oldVal)}></Switch>
            </div>
            <Description style={{
                marginBottom: "12px"
            }}>Third party api is used to show your<br /> incoming transactions in the history.<br /> Turn off if you don’t want us to pull data<br /> from those services</Description>
        {/* </ScrollContainer> */}
        </PerfectScrollbar>
    )
}

export default Security;