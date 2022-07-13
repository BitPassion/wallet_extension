import LedGreen from '../assets/led-green.png';
import LedBlue from '../assets/led-blue.png';

const SignalImg = ({signal = true, style}) => (
    <img style={{
        width: "9px",
        height: "9px",
        ...style
    }} src={signal ? LedGreen : LedBlue} alt="True"/>
)

export default SignalImg;
