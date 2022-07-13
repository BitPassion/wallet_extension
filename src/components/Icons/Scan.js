import Scan from '../../assets/viewonetherscan.png';

const ScanIcon = ({style, width = 9, height = 9, ...props}) => (
    <img style={{
        width: width,
        height: height,
        ...style
    }} src={Scan} alt="Scan"/>
)

export default ScanIcon;
