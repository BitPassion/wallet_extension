import { useState } from 'react';
import ComboBoxB from '../../components/ComboBoxB';
import Text from '../../styled-components/Text';
import Button from '../../styled-components/Button';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import Success from '../../components/Success';
import Spinner from '../../components/Spinner';
import XButton from '../../styled-components/XButton';
import { useNavigate } from 'react-router';

const AmountWarning = styled.div`
    color: ##ff5656;
`;

const AmountWrapper = styled.div`
    position: relative;
    width: 100vw;
    display: flex;
    justify-content: center;
    & ${AmountWarning} {
        position: absolute;
        top: 0;
    }
`


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

const Index = () => {
    const navigate = useNavigate();
    const [amountSwap, setAmountSwap] = useState(0);
    const [loadingStep, setLoadingStep] = useState(0);
    const getQuateHandler = () => {
        setLoadingStep(1);
        setTimeout(() => {
            setLoadingStep(2);
            setTimeout(() => {
                navigate("/main/swap/confirm");
            }, 1000)
        }, 2000);
    }
    return (<>
        <div style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            
            <ComboBoxB 
                style={{
                    marginTop: "22px",
                    marginBottom: `34px`,
                }}
                list={[{text: "Choose asset"},{text: "Asset 01"},{text: "Asset 02"},]}
                onChange={() => {}}
            />
            <Text style={{
                marginBottom: `30px`,
            }}>Amount</Text>
            <AmountWrapper>
                <AmountWarning>{amountSwap >= 10 ? "Not enough *token here* to complete this swap." : ""}</AmountWarning>
                <AmountInput style={{
                    marginBottom: "23px"
                }}>
                    <Input onChange={e => setAmountSwap(e.target.value)} value={amountSwap}/>
                </AmountInput>
            </AmountWrapper>
            <Text style={{
                marginBottom: "16px"
            }}>Available</Text>
            <ComboBoxB 
                style={{
                    marginBottom: `84px`,
                }}
                list={[{text: "Select token"},{text: "Token 01"},{text: "Token 02"},]}
                onChange={() => {}}
            />
            { loadingStep === 1 ? (
            <div style={{
                position: "fixed",
                width: "100%",
                height: "100%",
                top: 0,
                backgroundColor: `rgba(255, 255, 255, 0.75)`,
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Spinner />
            </div>) : ""}
        </div>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            flexGrow: 0
        }}>
            <Text style={{
                marginRight: `30px`,
            }}>Max Slippage 3%</Text>
            <Button style={{
                width: "123px",
                height: "45px",
                backgroundColor: "#15EA37",
            }} onClick={() => getQuateHandler()}>Get quotes</Button>
        </div>
        <ReactModal 
            isOpen={loadingStep === 2}
            contentLabel="Minimal Modal Example"
            onRequestClose={() => setLoadingStep(0)}
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
            <Success />
            <Text>Transaction completed.</Text>
            <XButton onClick={() => setLoadingStep(0)}>X</XButton>
        </ReactModal>
    </>)
}

export default Index;
