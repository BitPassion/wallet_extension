import Send from '../../assets/send.png';

const SendIcon = ({style, width = 9, height = 9, ...props}) => (
    <img style={{
        width: width,
        height: height,
        ...style
    }} src={Send} alt="Send"/>
)

export default SendIcon;
