import UpIcon from "../components/Icons/Up";
import Text from "../styled-components/Text";
import styled from "styled-components";
import Input from "../styled-components/Input";
import Button from '../styled-components/Button';
// import ScrollContainer from "react-indiana-drag-scroll";
import PerfectScrollbar from 'react-perfect-scrollbar';

const BillingHighLight = styled(Input)`
    border-radius: 10px;
    width: 100%;
    padding: 15px;
    box-sizing: border-box;
    margin-bottom: 21px;
    text-align: center;
    height: 43px;
`;

const TextUnderline = styled(Text)`
    text-decoration: underline;
    cursor: pointer;
`;

const FillKYC = () => {
    return (
        <PerfectScrollbar style={{
            height: `calc(100vh - 50px)`,
        }}>
        {/* <ScrollContainer style={{
            height: `calc(100vh - 50px)`,
        }} vertical={true} horizontal={false} hideScrollbars={true}> */}
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
            }}>
                <Text style={{
                    marginTop: `34px`,
                    fontSize: "18px",
                    marginBottom: "57px",
                }}>Valo.id.logo</Text>
                <Text style={{
                    marginTop: `0px`,
                    fontSize: "18px",
                    marginBottom: "57px",
                }}>Establish your credibility:</Text>
            </div>
            <div style={{
                padding: "0 19px 25px 19px"
            }}>
                <div style={{
                    boxShadow: "3px 0 5px gray",
                    borderRadius: `10px`,
                    padding: `33px 34px`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                    <Text style={{
                        marginBottom: "50px"
                    }}>Fill your KYC</Text>

                    <Text style={{
                        marginBottom: "11px"
                    }}>Tire 2</Text>
                    <BillingHighLight placeholder="Full name"/>
                    <BillingHighLight placeholder="Address"/>
                    <BillingHighLight placeholder="Phone"/>
                    <BillingHighLight placeholder="Backup e-mail"/>
                    <Text style={{
                        marginTop: `20px`,
                        marginBottom: `15px`,
                    }}>Tire 3</Text>
                    <Text style={{
                        width: "60%",
                        textAlign: "center",
                        marginBottom: "8px",
                    }}>Upload photo of drivers license of passport</Text>
                    <Button style={{
                        width: "111px",
                        height: "39px",
                        marginBottom: "7px",
                    }}>
                        <UpIcon width={"15px"} height={"20px"} />
                    </Button>
                    <Text style={{
                        width: "60%",
                        textAlign: "center",
                        marginBottom: "7px",
                    }}>Upload an invoice with your address showing</Text>
                    <Button style={{
                        width: "111px",
                        height: "39px",
                        marginBottom: "47px",
                    }}>
                        <UpIcon width={"15px"} height={"20px"} />
                    </Button>
                    <Button style={{
                        backgroundColor: "#15EA37",
                        marginBottom: "9px",
                        width: "111px",
                        height: "39px"
                    }} onClick={() => {}}>Next</Button>
                    <TextUnderline style={{
                        marginBottom: "29px",
                    }}>Later(use only tier 1 KYC)</TextUnderline>
                    <Text>2/2</Text>
                </div>
            </div>
        {/* </ScrollContainer> */}
        </PerfectScrollbar>
    )
}

export default FillKYC;