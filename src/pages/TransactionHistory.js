import { useState } from "react";
// import ScrollContainer from "react-indiana-drag-scroll";
import styled from "styled-components";
import HighLight from "../styled-components/HighLight";
import SendIcon from "../components/Icons/Send";
import RefreshCheckIcon from "../components/Icons/RefreshCheck";
import ReceiveIcon from "../components/Icons/Receive";
import Text from "../styled-components/Text";
import ReactModal from 'react-modal';
import HigtLight from "../styled-components/HighLight";
import PerfectScrollbar from 'react-perfect-scrollbar';

const SingleTransaction = styled.div`
    width: 100%;
`;

const TransactionDetail = styled.div`
    display: flex;
    margin: 12px 0;
`;

const HighLightCircle = styled(HighLight)`
    border-radius: 1000px;
    width: 37px;
    height: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const IconTypes = {
    Send: <SendIcon width={"23px"} height={"23px"} />,
    RefreshCheck: <RefreshCheckIcon width={"23px"} height={"23px"} />,
    Receive: <ReceiveIcon width={"23px"} height={"23px"} />,
}

const TransactionStatus = {
    Confirmed: "Confirmed",
    Failed: "Failed"
}

const SCOneLine = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 12px 0;
    width: 100%;
`;

const BillingHighLight = styled(HigtLight)`
    border-radius:10px;
    width: 100%;
    padding: 12px 12px;
    box-sizing: border-box;
`;

const TextUnderline = styled(Text)`
    text-decoration: underline;
    cursor: pointer;
`;

const TransactionHistory = (props) => {
    const [openTransactionDetail, setOpenTransactionDetail] = useState(false);
    
    const [transactions] = useState([{
        transactionNumber: "Transaction number",
        timestamp: "Date-Time",
        device: "Device",
        type: IconTypes.Send,
        text: "Sent BNB",
        status: TransactionStatus.Confirmed,
        amount: "Amount"
    },{
        transactionNumber: "Transaction number",
        timestamp: "Date-Time",
        device: "Device",
        type: IconTypes.RefreshCheck,
        text: "Smart contract interaction",
        status: TransactionStatus.Confirmed,
        amount: "Amount"
    },{
        transactionNumber: "Transaction number",
        timestamp: "Date-Time",
        device: "Device",
        type: IconTypes.Receive,
        text: "Received SYA",
        status: TransactionStatus.Confirmed,
        amount: "Amount"
    },{
        transactionNumber: "Transaction number",
        timestamp: "Date-Time",
        device: "Device",
        type: IconTypes.Send,
        text: "Sent BNB",
        status: TransactionStatus.Failed,
        amount: "Amount"
    },{
        transactionNumber: "Transaction number",
        timestamp: "Date-Time",
        device: "Device",
        type: IconTypes.RefreshCheck,
        text: "Smart contract interaction",
        status: TransactionStatus.Confirmed,
        amount: "Amount"
    },{
        transactionNumber: "Transaction number",
        timestamp: "Date-Time",
        device: "Device",
        type: IconTypes.Receive,
        text: "Received SYA",
        status: TransactionStatus.Confirmed,
        amount: "Amount"
    },{
        transactionNumber: "Transaction number",
        timestamp: "Date-Time",
        device: "Device",
        type: IconTypes.Receive,
        text: "Received SYA",
        status: TransactionStatus.Confirmed,
        amount: "Amount"
    },{
        transactionNumber: "Transaction number",
        timestamp: "Date-Time",
        device: "Device",
        type: IconTypes.Send,
        text: "Sent BNB",
        status: TransactionStatus.Failed,
        amount: "Amount"
    },{
        transactionNumber: "Transaction number",
        timestamp: "Date-Time",
        device: "Device",
        type: IconTypes.RefreshCheck,
        text: "Smart contract interaction",
        status: TransactionStatus.Confirmed,
        amount: "Amount"
    },{
        transactionNumber: "Transaction number",
        timestamp: "Date-Time",
        device: "Device",
        type: IconTypes.Receive,
        text: "Received SYA",
        status: TransactionStatus.Confirmed,
        amount: "Amount"
    },])
    return (
        <PerfectScrollbar style={{
            height: `calc(100vh - 50px - ${63}px)`,
            padding: `58px 40px 5px 40px`
        }}>
        {/* <ScrollContainer style={{
            padding: `${paddingLg}px`,
            height: `calc(100vh - 50px - 44px)`,
        }} vertical={true} horizontal={false} hideScrollbars={true}> */}
            {transactions.map((transaction, id) => (<SingleTransaction key={id}>
                <Text>{transaction.transactionNumber} - {transaction.timestamp} - {transaction.device}</Text>
                <TransactionDetail>
                    <HighLightCircle style={{
                        cursor: "pointer"
                    }} onClick={() => {setOpenTransactionDetail(true)}}>
                        {transaction.type}
                    </HighLightCircle>
                    <div style={{
                        flexGrow: 1,
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        paddingLeft: `16px`,
                    }}>
                        <Text style={{
                            fontSize: "10px"
                        }}>{transaction.text}</Text>
                        <Text style={{
                            fontSize: "10px"
                        }}>{transaction.status}</Text>
                    </div>
                    <Text style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: "10px"
                    }}>{transaction.amount}</Text>
                </TransactionDetail>
            </SingleTransaction>))}
            
            <ReactModal 
                isOpen={openTransactionDetail}
                contentLabel="Smart Contract interaction"
                onRequestClose={() => setOpenTransactionDetail(false)}
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
                        borderRadius: "10px",
                    }
                }}
            >
                <Text style={{marginBottom: `22px`}}>Smart Contract interaction</Text>
                
                <SCOneLine style={{
                    padding: "0px 11px",
                    boxSizing: "border-box",
                    marginBottom: "8px",
                }}>
                    <Text>Status</Text>
                    <Text>Date</Text>
                </SCOneLine>
                <SCOneLine style={{
                    padding: "0px 11px",
                    boxSizing: "border-box",
                    marginBottom: "8px",
                    marginTop: "0px"
                }}>
                    <Text style={{color: "#4BB78F"}} onClick={() => {
                        console.log(props)
                        props.openError()
                    }}>Confrimed</Text>
                    <Text>26.10.2021</Text>
                </SCOneLine>

                <BillingHighLight style={{marginBottom: "6px"}}>
                    <SCOneLine>
                        <Text>From</Text>
                        <Text>To</Text>
                    </SCOneLine>
                    <SCOneLine style={{marginBottom:"0"}}>
                        <Text>0xfs...rt187</Text>
                        <Text>0xfs...xpr48</Text>
                    </SCOneLine>
                </BillingHighLight>

                <SCOneLine style={{
                    padding: "0px 11px",
                    boxSizing: "border-box",
                    marginBottom: "8px",
                    marginTop: "0px",
                }}>
                    <Text>Nonce</Text>
                </SCOneLine>
                <SCOneLine style={{
                    padding: "0px 11px",
                    boxSizing: "border-box",
                    marginBottom: "8px",
                    marginTop: "0px",
                }}>
                    <Text>#162</Text>
                </SCOneLine>

                <BillingHighLight style={{paddingTop: "0"}}>
                    <SCOneLine>
                        <Text>Amount</Text>
                        <Text>0 €</Text>
                    </SCOneLine>
                    <SCOneLine>
                        <Text>Estimated gas fee</Text>
                        <Text>0.3112 €</Text>
                    </SCOneLine>
                    <SCOneLine style={{marginBottom:"0"}}>
                        <Text>Total amount</Text>
                        <Text>0.3112 €</Text>
                    </SCOneLine>
                </BillingHighLight>

                <TextUnderline style={{color: "#7EC8DF", marginTop: "10%"}} onClick={() => {
                    window.open("https://google.com")
                }}>View on BSCscan</TextUnderline>
            </ReactModal>
        {/* </ScrollContainer> */}
        </PerfectScrollbar>
    )
}

export default TransactionHistory;