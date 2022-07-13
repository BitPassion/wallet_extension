import styled from 'styled-components';
import Text from '../../styled-components/Text';
import QRCode from 'qrcode';
import { useRef, useState } from 'react';
import useEffectOnce from '../../hooks/useEffectOnce';
import Button from '../../styled-components/Button';
import { useSearchParams } from 'react-router-dom';

const QRCodeBoard = styled.div`
width: 270px;
height: 270px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 20px;
box-shadow: 0 0 10px #f0f0f0;
position: relative;
& canvas {
    width: 180px !important;
    height: 180px !important;
}
& ${Button} {
    position: absolute;
    width: 180px;
    top: 100%;
    transform: translateY(-50%);
}
`;

const QR_Code = () => {
    const [searchParams] = useSearchParams();
    const CanvasRef = useRef(null);
    const dataOfQRCode = {
        name: "SuperBluestar",
        location: "Yokohama",
        amount: searchParams.get('amount')
    }
    const [qrcodeURL, setQrcodeURL] = useState("");
    useEffectOnce(() => {
        QRCode.toCanvas(CanvasRef.current, dataOfQRCode.toString(), (err1) => {
            if (err1) {
                console.error(err1)
            }
        })
        QRCode.toDataURL(dataOfQRCode.toString(), (err2, url) => {
            if (err2) {
                setQrcodeURL("Failed to generate url");
            } else {
                setQrcodeURL(url);
            }
        })
    }, []);
    return (<>
        <Text style={{
            margin: `22px 0`,
        }}>Receive</Text>
        <QRCodeBoard>
            <canvas ref={CanvasRef}/>
            <a href={qrcodeURL} target="_blank" rel="noreferrer"><Text>{qrcodeURL.slice(0, Math.min(10, qrcodeURL.length))} ...</Text></a>
            <Button style={{
                backgroundColor: "#7EC8DF",
                width: "215px",
                height: "45px"
            }}>Copy address</Button>
        </QRCodeBoard>
        <div style={{ 
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
        }}>
            <Button style={{
                width: "215px",
                height: "45px"
            }}>Request payment</Button>
        </div>
    </>)
}

export default QR_Code;