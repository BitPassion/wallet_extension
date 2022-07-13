import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import Text from "../styled-components/Text";
import Button from "../styled-components/Button";
import SidemenuOpenIcon from "../components/SidemenuOpenIcon";
import SendIcon from "../components/Icons/Send";
import AddFundsIcon from "../components/Icons/AddFunds";
import ExpandIcon from "../components/Icons/Expand";
import ConnectIcon from "../components/Icons/Connect";
import HistoryIcon from "../components/Icons/History";
import ShareIcon from "../components/Icons/Share";
import ScanIcon from "../components/Icons/Scan";
import FillKYCIcon from "../components/Icons/FillKYC";
import SettingsIcon from "../components/Icons/Settings";
import HelpIcon from "../components/Icons/Help";
import RequestIcon from "../components/Icons/Request";
import AddIcon from "../components/Icons/Add";
import { useContext, useState } from "react";
import SignalImg from "../components/SignalImg";
import styled from "styled-components";
import ReactModal from 'react-modal';

// Context
import { AppContext } from "../context/AppContextProvider";

const styles = {
    bmBurgerButton: {
        width: "50px",
        height: "50px",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    bmMenuWrap: {
      background: "white",
      top: 0,
    },
    bmItemList: {
        display: "flex",
        flexDirection: "column",
    }
}

const Topbar = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    background-color: #c4c4c4;
`;

const MenuTopboard = styled.div`
    background-color: white;
    padding: 32px 25px 27px 25px;
`;
const MenuContent = styled.div`
    background-color: #f0f0f0;
    padding: 20px;
    height: 100%;
`;

const List = styled.ul`
    list-style: none;
    padding-left: 0;
`;

const Item = styled.li`
    display: flex;
    align-items: center;
    cursor: pointer;
    &.active {
        background: lightgray;
        border-top-right-radius: 1000px;
        border-bottom-right-radius: 1000px;
        height: 31px;
        margin-left: -100px;
        padding-left: 100px;
    }
`;

const SidebarOpen = styled.div`
    width: 50px; 
    height: 50px; 
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const SingleNetwork = styled.div`
    display: flex;
    align-items: center;
    margin: 12px;
    cursor: pointer;
`;

const MainLayout = () => {
    const { setOpenError } = useContext(AppContext);
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => {
        setIsOpen(false);
    }
    const openMenu = () => {
        setIsOpen(true);
    }
    const navigateClose = (_to) => {
        if (pathname !== _to) {
            navigate(_to);
        }
        closeMenu();
    }
    const [networkModal, setNetworkModal] = useState(false);
    const [networks] = useState([{
        chainId: 0,
        name: "Ethereum Main Network"
    },{
        chainId: 0,
        name: "Ropsten test network"
    },{
        chainId: 0,
        name: "Kovan test network"
    },{
        chainId: 0,
        name: "Rinkeby test network"
    },{
        chainId: 0,
        name: "Goerli test network"
    },{
        chainId: 0,
        name: "Binance Smart Chain Mainnet"
    },{
        chainId: 0,
        name: "Matic Mainnet"
    },]);
    
    return (
        <>
            <Menu 
                isOpen={isOpen}
                customBurgerIcon={ false }
                customCrossIcon={ false } 
                onClose={closeMenu}
                onOpen={openMenu}
                styles={styles}
                width={'287px'} 
            >
                <MenuTopboard>
                    <Text className="font-roboto" style={{
                        fontSize: "18px",
                        marginBottom: "40px",
                    }} onClick={() => {
                        navigateClose("/main")
                    }}>VALO.id</Text>
                    <Text className="font-roboto" style={{
                        fontSize: "18px",
                        marginLeft: "3px",
                        marginBottom: "10px",
                    }}>Acconut name</Text>
                    <Text className="font-roboto" style={{
                        fontSize: "12px",
                        marginLeft: "3px",
                        marginBottom: "6px",
                    }}>Total Balance</Text>
                    <Text className="font-roboto" style={{
                        fontSize: "12px",
                        marginLeft: "3px",
                        marginBottom: "18px",
                    }}>Address</Text>
                    <div style={{display: "flex"}}>
                        <Button style={{
                            backgroundColor: "#C4C4C4",
                            width: "114px",
                            height: "31px",
                            marginRight: "10px"
                        }}>
                            <SendIcon width={11} height={14} style={{
                                marginRight: "7px"
                            }}></SendIcon>
                            <Text>Send</Text>
                        </Button>
                        <Button style={{
                            backgroundColor: "#C4C4C4",
                            width: "114px",
                            height: "31px"
                        }} onClick={() => {
                            navigateClose('/main/add-funds');
                        }}>
                            <AddFundsIcon width={11} height={14} style={{
                                marginRight: "7px"
                            }}></AddFundsIcon>
                            <Text>Add funds</Text>
                        </Button>
                    </div>
                </MenuTopboard>
                <MenuContent>
                    <List>
                        <Item style={{
                            marginBottom: "18px"
                        }}>
                            <ExpandIcon width={18} height={18}/>
                            <Text style={{
                                marginLeft: "16px"
                            }}>Expand View</Text>
                        </Item>
                        <Item style={{
                            marginBottom: "18px"
                        }}>
                            <ConnectIcon width={18} height={18}/>
                            <Text style={{
                                marginLeft: "16px"
                            }}>Connected Sites</Text>
                        </Item>
                        <Item style={{
                            marginBottom: "18px"
                        }} className="active" onClick={() => navigateClose("/main/transaction-history")}>
                            <HistoryIcon width={18} height={18}/>
                            <Text style={{
                                marginLeft: 10
                            }}>Transaction History</Text>
                        </Item>
                        <Item style={{
                            marginBottom: "10px"
                        }}>
                            <ShareIcon width={18} height={18}/>
                            <Text style={{
                                marginLeft: 10
                            }}>Share my Public Address</Text>
                        </Item>
                        <Item style={{
                            marginBottom: "10px"
                        }}>
                            <ScanIcon width={18} height={18}/>
                            <Text style={{
                                marginLeft: 10
                            }}>View on Etherscan</Text>
                        </Item>
                        <Item style={{
                            marginBottom: "10px"
                        }} onClick={() => navigateClose("/main/fill-kyc")}>
                            <FillKYCIcon width={18} height={18}/>
                            <Text style={{
                                marginLeft: 10
                            }}>Fill your KYC</Text>
                        </Item>
                        <Item style={{
                            marginBottom: "10px"
                        }}>
                            <SettingsIcon width={18} height={18}/>
                            <Text style={{
                                marginLeft: 10
                            }} onClick={() => {
                                navigateClose("/main/settings");
                            }}>Settings</Text>
                        </Item>
                        <Item style={{
                            marginBottom: "10px"
                        }}>
                            <HelpIcon width={18} height={18}/>
                            <Text style={{
                                marginLeft: 10
                            }}>Help</Text>
                        </Item>
                        <Item style={{
                            marginBottom: "10px"
                        }}>
                            <RequestIcon width={18} height={18}/>
                            <Text style={{
                                marginLeft: 10
                            }} onClick={() => { 
                                setOpenError(true);
                                closeMenu();
                            }}>Request a feature</Text>
                        </Item>
                    </List>
                </MenuContent>
            </Menu>
            <Topbar>
                <SidebarOpen onClick={openMenu}>
                    <SidemenuOpenIcon/>
                </SidebarOpen>
                <div style={{
                    padding: "12px"
                }}>
                    <Text style={{
                        textAlign: "right",
                        fontSize: "18px",
                    }}>Account name</Text>
                    <div style={{
                        display: "flex", 
                        cursor: "pointer",
                        alignItems: "center"
                    }} onClick={() => setNetworkModal(true)}>
                        <SignalImg style={{
                            marginRight: `8px`
                        }} signal={true}></SignalImg>
                        <Text style={{
                            fontSize: "10px"
                        }}>Current network (Ethereum mainnet etc)</Text>
                    </div>
                </div>
            </Topbar>
            <Outlet />
            <ReactModal 
                isOpen={networkModal}
                contentLabel="Minimal Modal Example"
                onRequestClose={() => setNetworkModal(false)}
                style={{
                    overlay: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: `30`,
                    },
                    content: {
                        position: 'relative',
                        width: "calc(100% - 120px)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        height: "fit-content",
                        inset: 0,
                    }
                }}
            >
                {networks.map((network, id) => (
                    <SingleNetwork key={id}>
                        <SignalImg style={{
                            marginRight: `12px`
                        }} signal={false}></SignalImg>
                        <Text>{network.name}</Text>
                    </SingleNetwork>
                ))}
                
                <SingleNetwork onClick={() => {
                    setNetworkModal(false)
                    navigate("/main/settings/add-network")
                }}>
                    <AddIcon width={"18px"} height={"18px"} style={{
                        marginRight: `12px`,
                        marginLeft: "-4px"
                    }}></AddIcon>
                    <Text>Add network</Text>
                </SingleNetwork>
            </ReactModal>
        </>
    )
}

export default MainLayout;