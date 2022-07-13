import Request from '../../assets/requestafeature.png';

const RequestIcon = ({style, width = 9, height = 9, ...props}) => (
    <img style={{
        width: width,
        height: height,
        ...style
    }} src={Request} alt="Request"/>
)

export default RequestIcon;
