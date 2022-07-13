import Connect from '../../assets/connectedsites.png';

const ConnectIcon = ({style, width = 9, height = 9, ...props}) => (
    <img style={{
        width: width,
        height: height,
        ...style
    }} src={Connect} alt="Connect"/>
)

export default ConnectIcon;
