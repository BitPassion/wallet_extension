import { useState } from "react";
import SwapDownIcon from "../../components/Icons/SwapDown";
import RefreshIcon from "../../components/Icons/Refresh";
import InfoIcon from "../../components/Icons/Info";
import Text from "../../styled-components/Text";
import styled from "styled-components";
import HigtLight from "../../styled-components/HighLight";
import Button from '../../styled-components/Button';
import ReactModal from 'react-modal';
import Left1Icon from "../../components/Icons/Left1";
import RadioButton from '../../components/RadioButton';
import XButton from '../../styled-components/XButton';

const BillingHighLight = styled(HigtLight)`
    border-radius: 10px;
    width: 100%;
    padding: 11px 17px;
    box-sizing: border-box;
`;

const BillingOneLine = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const BillingOneLineRight = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const TextUnderline = styled(Text)`
    text-decoration: underline;
    cursor: pointer;
`;

const Title = styled(Text)`
    font-weight: 700;
    margin: 12px 0;
`;

const Input = styled.input``;
const AmountInput = styled.div`
    width: 200px;
    height: 59px;
    text-align: center;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.25);
    border-radius: 1000px;
    border: none;
    outline: none;
    & ${Input} {
        border: none;
        border-bottom: 1px solid black;
        width: 89px;
        height: 48px;
        text-align: center;
        &:active, &:focus {
            outline: none;
        }
    }
`;

const Confirm = () => {
    const [openQuote, setOpenQuote] = useState(false);
    const [openQuoteDetail, setOpenQuoteDetail] = useState(false);
    const [openEditLimit, setOpenEditLimit] = useState(false);
    const [openGasFee, setOpenGasFee] = useState(false);
    const [openMetamaskFee, setOpenMetamaskFee] = useState(false);
    const [activeRadio, setActiveRadio] = useState("default");
    return (
        <>
            <div style={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "calc(100% + 20px)",
                marginTop: "-5px",
            }}>
                <Text style={{
                    marginBottom: "9px"
                }}>0,175 BNB</Text>
                <SwapDownIcon width={12} height={15} style={{
                    marginBottom: "12px"
                }}/>
                <Text style={{
                    marginBottom: "12px"
                }}>BUSD</Text>
                <Text style={{
                    fontSize: "24px",
                    marginBottom: "49px",
                }}>10</Text>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "26px",
                    alignItems: "center",
                }}>
                    <Text style={{
                        marginRight: `11px`
                    }}>1 BUSD = 0.0017000000 BNB</Text>
                    <RefreshIcon />
                </div>
                <BillingHighLight>
                    <BillingOneLine style={{
                        marginBottom: "21px"
                    }}>
                        <Text>Using the best quote</Text>
                        <TextUnderline onClick={() => {setOpenQuote(true)}}>Details</TextUnderline>
                    </BillingOneLine>
                    <BillingOneLine style={{
                        marginBottom: "2px"
                    }}>
                        <Text style={{
                            marginRight: `4px`,
                            fontSize: "10px"
                        }}>Estimated gas fee</Text>
                        <InfoIcon width={"11px"} height={"11px"} style={{
                            cursor: "pointer"
                        }} onClick={() => {setOpenGasFee(true)}}/>
                        <Text style={{
                            flexGrow: 1,
                            textAlign: "right",
                            fontSize: "10px"
                        }}>0.0008 BNB</Text>
                    </BillingOneLine>
                    <BillingOneLineRight style={{
                        marginBottom: "10px"
                    }}>
                        <Text style={{
                            fontSize: "10px"
                        }}>0.39 €</Text>
                    </BillingOneLineRight>
                    <BillingOneLine style={{
                        marginBottom: "2px"
                    }}>
                        <Text style={{
                            fontSize: "10px"
                        }}>Max gas fee</Text>
                        <Text style={{
                            fontSize: "10px"
                        }}>0.0008 BNB</Text>
                    </BillingOneLine>
                    <BillingOneLineRight style={{
                        marginBottom: "10px",
                        fontSize: "10px"
                    }}>
                        <Text>0.70 €</Text>
                    </BillingOneLineRight>
                    <BillingOneLine style={{
                        marginBottom: "12px"
                    }}>
                        <Text style={{
                            fontSize: "10px"
                        }}>This will ENABLE BUSD for swapping</Text>
                        <TextUnderline style={{
                            fontSize: "10px"
                        }} onClick={() => setOpenEditLimit(true)}>Edit limit</TextUnderline>
                    </BillingOneLine>
                    <hr style={{
                        width: "100%",
                        marginBottom: "14px"
                    }}/>
                    <BillingOneLine>
                        <Text style={{
                            marginRight: `7px`,
                            fontSize: "10px"
                        }}>Quotes include a 0,875% MetaMask fee</Text>
                        <InfoIcon width={"11px"} height={"11px"} style={{
                            cursor: "pointer"
                        }} onClick={() => setOpenMetamaskFee(true)}/>
                        <div style={{
                            flexGrow: 1
                        }}></div>
                    </BillingOneLine>
                </BillingHighLight>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                flexGrow: 0,
                marginTop: "19px"
            }}>
                <Button style={{
                    width: "123px",
                    height: "45px",
                    backgroundColor: "#15EA37"
                }} onClick={() => {}}>Confirm Swap</Button>
            </div>
            <ReactModal 
                isOpen={openQuote}
                contentLabel="Open Quote"
                onRequestClose={() => setOpenQuote(false)}
                style={{
                    overlay: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    },
                    content: {
                        position: 'relative',
                        width: "calc(100% - 120px)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "fit-content",
                        inset: 0,
                    }
                }}
            >
                <Text>Quotes overview</Text>
                <table style={{
                    height: "300px"
                }}>
                    <tr>
                        <td><Text>BNB Receiving</Text></td>
                        <td><Text>Estimated gas fee</Text></td>
                        <td><Text>Overall value</Text></td>
                    </tr>
                    {[0,1,2,3].map((val,id) => (<tr key={id}>
                        <td><TextUnderline onClick={() => {
                            setOpenQuoteDetail(true)
                        }}>0,00875</TextUnderline></td>
                        <td><Text>€ 0,52</Text></td>
                        <td><Text>BEST</Text></td>
                    </tr>))}
                </table>
            </ReactModal>
            <ReactModal 
                isOpen={openQuoteDetail}
                contentLabel="Quote Detail"
                onRequestClose={() => setOpenQuoteDetail(false)}
                style={{
                    overlay: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
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
                <div style={{
                    display: "flex",
                    alignItems: "center",
                }}>
                    <Left1Icon style={{cursor: "pointer"}} onClick={() => setOpenQuoteDetail(false)}/>
                    <Text style={{
                        marginLeft: `16px`,
                    }}>Quote details</Text>
                </div>
                <Title>Rate</Title>
                <div style={{
                    display: "flex",
                    margin: `12px 0`,
                    alignItems: "center"
                }}>
                    <Text style={{
                        marginRight: `12px`
                    }}>1 BUSD = 0.0017000000 BNB</Text>
                    <RefreshIcon />
                </div>
                <Title>Max Slippage</Title>
                <Text>3 %</Text>
                <Title>Guaranteed amount</Title>
                <Text>0,0009 BNB (~€0,45)</Text>
                <Title>Estimated gas fee</Title>
                <Text>0,0009 BNB (~€0,45)</Text>
                <Title>Source</Title>
                <Text>This quote comes from <b>Pancakeswap</b> which finds the best price by splittiny your order between different decentralized exchanges</Text>
            </ReactModal>
            <ReactModal 
                isOpen={openEditLimit}
                contentLabel="Edit permision"
                onRequestClose={() => setOpenEditLimit(false)}
                style={{
                    overlay: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
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
                <div style={{
                    display: "flex",
                    alignItems: "center",
                }}>
                    <Left1Icon style={{cursor: "pointer"}} onClick={() => setOpenEditLimit(false)}/>
                    <Text style={{
                        marginLeft: `16px`,
                    }}>Edit permission</Text>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: 'column',
                    marginBottom: `16px`,
                }}>
                    <RadioButton style={{
                        marginTop: `16px`,
                        marginBottom: "5px",
                    }} text={<Text style={{
                        fontWeight: "700"
                    }}>Spend limit permission</Text>} active={activeRadio === "default"} onClick={() => setActiveRadio("default")}></RadioButton>
                    <div style={{
                        paddingLeft: `16px`,
                        marginLeft: `12px`,
                        marginBottom: "12px"
                    }}>
                        <Text style={{
                            marginBottom: "6px"
                        }}>Allow SWAPS to withdraw and spend up to the following amount:</Text>
                        <Text style={{
                            wordBreak: "break-all"
                        }}>115876456541635468436241654654654684635132468463513645654654654.3643454 BUSD</Text>
                    </div>
                    <RadioButton style={{
                        marginTop: `16px`,
                        marginBottom: "5px",
                    }} text={<Text style={{
                        fontWeight: "700"
                    }}>Custom spend limit</Text>} active={activeRadio === "custom"} onClick={() => setActiveRadio("custom")}></RadioButton>
                    <div style={{
                        paddingLeft: `16px`,
                        marginLeft: `12px`,
                        marginBottom: "10px",
                    }}>
                        <Text>Enter a max spend limit</Text>
                    </div>
                    <AmountInput style={{
                        marginBottom: "27px"
                    }}>
                        <Input/>
                    </AmountInput>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: "100%",
                    flexGrow: 0,
                }}>
                    <Button style={{
                        width: "123px",
                        height: "45px",
                        backgroundColor: "#15EA37"
                    }} onClick={() => {setOpenEditLimit(false)}}>Set</Button>
                </div>
            </ReactModal>
            <ReactModal 
                isOpen={openGasFee}
                contentLabel="Gas Fee Estimation"
                onRequestClose={() => setOpenGasFee(false)}
                style={{
                    overlay: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
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
                <XButton onClick={() => setOpenGasFee(false)}>X</XButton>
                <Title>Estimated gas fees</Title>
                <Text>Gas fees are paid to crypto miners who process transactions on the network.</Text>
                <Text>Metamask does not profit from gas fees. The “estimated gas fee” is what we expect the actual fee to be. The exact amount depends on network conditions.</Text>
                <Text>“max gas fee” is the most you’ll spend. When the network is volatile this can be a large amount.</Text>
            </ReactModal>
            <ReactModal 
                isOpen={openMetamaskFee}
                contentLabel="Metamask Swap Fee"
                onRequestClose={() => setOpenMetamaskFee(false)}
                style={{
                    overlay: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
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
                <XButton onClick={() => setOpenMetamaskFee(false)}>X</XButton>
                <Title>MetaMask Swap fee</Title>
                <Text>Get the best price from the top liquidity sources every time. A fee of 0,875% is automatically factored into each quote, which supports ongoing development to make MetaMask even better</Text>
            </ReactModal>
        </>
    )
}

export default Confirm;