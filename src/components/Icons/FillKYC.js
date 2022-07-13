import FillKYC from '../../assets/fillyourkyc.png';

const FillKYCIcon = ({style, width = 9, height = 9, ...props}) => (
    <img style={{
        width: width,
        height: height,
        ...style
    }} src={FillKYC} alt="FillKYC"/>
)

export default FillKYCIcon;
