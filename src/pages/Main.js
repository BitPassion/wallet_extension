import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import HighLight from "../styled-components/HighLight";
import Text from "../styled-components/Text";
import Button from "../styled-components/Button";
import ReceiveIcon from "../components/Icons/Receive";
import SendIcon from "../components/Icons/Send";
import NFTFolder from "../components/NFTFolder";
import IssuerFolder from "../components/IssuerFolder";
// import ScrollContainer from 'react-indiana-drag-scroll';
import RightIcon from '../components/Icons/Right';
import TrashIcon from '../components/Icons/Trash';
import SwapIcon from '../components/Icons/Swap';
import PerfectScrollbar from 'react-perfect-scrollbar';

const MainBoard = styled.div`
    height: calc(100% - 50px);
    display: flex;
    flex-direction: column;
`;

const Board = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BoardButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 34px;
    margin-bottom: 27px;
`;

const BoradButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    & ${HighLight} {
        background-color: #C4C4C4;
        border-radius: 1000px;
        width: 37px;
        height: 37px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const TabMenu = styled.div`
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    box-shadow: 0px -2px 6px grey;
    background-color: #F0F0F0;
    &.active {
        background-color: white;
    }
`;

const Tabs = styled.div`
    display: flex;
    & ${TabMenu} {
        width: 88px;
        height: 44px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        padding-top: 8px;
        &:not(:first-child) {
            margin-left: -12px;
        }
    }
`;

const TabPanel = styled.div`
    padding: 21px 27px 28px 27px;
    margin-top: -12px;
    background: white;
    height: 280px;
    z-index: 20;
    box-sizing: border-box;
    overflow: hidden;
`;

const MarketPlaceNFTs = styled.div`
    margin: 5px 0;
    display: flex;
    width: fit-content;
`;

const MarketPlaceIssuers = styled.div`
    margin: 5px 0;
    display: flex;
    width: fit-content;
`;

const Footer = styled.div`
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TokenItem = styled.div`
    display: flex;
    height: 40px;
    margin: 12px 0px;
    & ${HighLight} {
        border-radius: 1000px;
        width: 37px;
        height: 37px;
    }
`;

const VotingItem = styled(HighLight)`
    width: calc(100% - 12px);
    height: 84px;
    border-radius: 10px;
    margin-bottom: 16px;
    &.last-item {
        margin-bottom: 0px;
    }
`;

const SiteItem = styled.div`
    display: flex;
    height: 40px;
    margin: 12px 0px;
    & ${HighLight} {
        border-radius: 1000px;
        width: 37px;
        height: 37px;
    }
`;

const Main = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(0);
    const tabs = [{
        tabText: "Assets", 
        tabContent: <TabPanel>
            <PerfectScrollbar style={{
                height: "auto",
                paddingBottom: `12px`
            }}>
            {/* <ScrollContainer className="scroll-container" vertical={true} horizontal={true} hideScrollbars={true}> */}
                <Text style={{
                    marginBottom: "6px"
                }}>Marketplace</Text>
                <MarketPlaceNFTs>
                    {[0,0,0,0,0].map((nft, id) => {
                        return <NFTFolder key={id} />
                    })}
                </MarketPlaceNFTs>
                <Text>Issuer</Text>
                <MarketPlaceIssuers>
                    {[0,0,0,0,0].map((issuer, id) => {
                        return <IssuerFolder key={id} />
                    })}
                </MarketPlaceIssuers>
            {/* </ScrollContainer> */}
            </PerfectScrollbar>
            <Footer>
                <Button style={{
                    width: "207px",
                    height: "45px",
                }}>Add NFTs</Button>
            </Footer>
        </TabPanel>
    },{
        tabText: "Tokens", 
        tabContent: <TabPanel>
            <PerfectScrollbar style={{
                height: "200px",
                paddingRight: `16px`
            }}>
            {/* <ScrollContainer style={{height: "200px"}} vertical={true} horizontal={false} hideScrollbars={false}> */}
                {[0,0,0,0,0,0,0,0,0].map((issuer, id) => {
                    return (<TokenItem key={id} >
                        <HighLight style={{
                            backgroundColor: "#c4c4c4",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "9px",
                            textAlign: "center"
                        }}>{id === 0 ? <>Token<br />logo</> : ""}</HighLight>
                        <div style={{
                            marginLeft: "12px",
                            flexGrow: 1,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-evenly"
                        }}>
                            <Text>Balance</Text>
                            <Text>Amount of tokens</Text>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                        }}>
                            <RightIcon width={16} height={27}></RightIcon>
                        </div>
                    </TokenItem>)
                })}
            {/* </ScrollContainer> */}
            </PerfectScrollbar>
            <Footer>
                <Button style={{
                    width: "207px",
                    height: "45px",
                }}>Add Token</Button>
            </Footer>
        </TabPanel>
    },{
        tabText: "Voting", 
        tabContent: <TabPanel>
            <PerfectScrollbar style={{
                height: "260px",
            }}>
            {/* <ScrollContainer style={{height: "260px"}} className="scroll-container" vertical={true} horizontal={false} hideScrollbars={false}> */}
                {[0,0,0,0,0,0,0,0].map((vote, id) => {
                    return (
                        <Link to={`/main/vote/${id}`} key={id}>
                            <VotingItem style={{
                                backgroundColor: "#c4c4c4",
                                display: "flex",
                                alignItems: "flex-end",
                                padding: "15px 17px",
                                boxSizing: "border-box",
                            }} className={id === 7 ? "last-item" : ""}>Vote for new COB for nationalist pary</VotingItem>
                        </Link>
                    )
                })}
            {/* </ScrollContainer> */}
            </PerfectScrollbar>
        </TabPanel>
    },{
        tabText: <>Connected<br />sites</>, 
        tabContent: <TabPanel>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
            }}>
                <Text>SiteInfo</Text>
                <Text>Disconnect</Text>
            </div>
            <PerfectScrollbar style={{
                height: "260px",
                paddingRight: `11px`
            }}>
            {/* <ScrollContainer style={{height: "260px"}} vertical={true} horizontal={false} hideScrollbars={false}> */}
                {[0,0,0,0,0,0,0,0,0].map((issuer, id) => {
                    return (<SiteItem key={id} >
                        <HighLight style={{
                            backgroundColor: "#c4c4c4",
                            width: "37px",
                            height: "37px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "9px",
                            textAlign: "center"
                        }}>site <br />favicon</HighLight>
                        <div style={{
                            marginLeft: "12px",
                            flexGrow: 1,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-evenly"
                        }}>
                            <Text>Site Name</Text>
                            <Text>Site Address</Text>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                        }}>
                            <TrashIcon width={19} height={20}></TrashIcon>
                        </div>
                    </SiteItem>)
                })}
            {/* </ScrollContainer> */}
            </PerfectScrollbar>
        </TabPanel>
    }];
    return (
        <MainBoard>
            <Board>
                <Button style={{
                    backgroundColor: "#E4E4E4",
                    width: "140px",
                    height: "31px",
                    marginTop: "22px",
                }}>Address</Button>
                <Text style={{
                    marginTop: "9px"
                }}>Total Balance</Text>
                <BoardButtonGroup>
                    <BoradButton style={{
                        marginRight: "20px"
                    }} onClick={() => navigate("/main/receive")}>
                        <HighLight style={{
                            marginBottom: "4px"
                        }}>
                            <ReceiveIcon width={15} height={19} />
                        </HighLight>
                        Receive
                    </BoradButton>
                    <BoradButton style={{
                        marginRight: "20px"
                    }} onClick={() => navigate("/main/send")}>
                        <HighLight style={{
                            marginBottom: "4px"
                        }}>
                            <SendIcon width={19} height={19} />
                        </HighLight>
                        Send
                    </BoradButton>
                    <BoradButton style={{
                        marginRight: "20px"
                    }} onClick={() => navigate("/main/swap")}>
                        <HighLight style={{
                            marginBottom: "4px"
                        }}>
                            <SwapIcon width={19} height={19} />
                        </HighLight>
                        Swap
                    </BoradButton>
                </BoardButtonGroup>
            </Board>
            <Tabs>
            {tabs.map((menu, id) => (
                <TabMenu onClick={() => setActiveTab(id)} key={id} className={activeTab === id ? "active" : ""} style={{
                    zIndex: activeTab === id ? 11 : 10 - id
                }}>
                    <Text style={{
                        fontSize: id === 3 ? "8px" : "12px",
                        lineHeight: id === 3 ? "9px" : "14px",
                        textAlign: "center"
                    }}>{menu.tabText}</Text>
                </TabMenu>
            ))}
            </Tabs>
            {tabs[activeTab].tabContent}
        </MainBoard>
    )
}

export default Main;
