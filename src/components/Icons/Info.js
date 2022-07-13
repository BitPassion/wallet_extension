import Info from '../../assets/info.png';

const InfoIcon = ({style, width = 9, height = 9, ...props}) => (
    <img style={{
        width: width,
        height: height,
        ...style
    }} src={Info} alt="Info" {...props}/>
)

export default InfoIcon;