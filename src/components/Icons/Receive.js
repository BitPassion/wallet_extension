import Receive from '../../assets/receive.png';

const ReceiveIcon = ({style, width = 9, height = 9, ...props}) => (
    <img style={{
        width: width,
        height: height,
        ...style
    }} src={Receive} alt="Receive"/>
)

export default ReceiveIcon;
