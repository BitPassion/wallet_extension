import Share from '../../assets/sharemypublicaddress.png';

const ShareIcon = ({style, width = 9, height = 9, ...props}) => (
    <img style={{
        width: width,
        height: height,
        ...style
    }} src={Share} alt="Share"/>
)

export default ShareIcon;
