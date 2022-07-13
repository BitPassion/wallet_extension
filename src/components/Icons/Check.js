import Check from '../../assets/check.png';

const CheckIcon = ({style, width = 9, height = 9, ...props}) => (
    <img style={{
        width: width,
        height: height,
        ...style
    }} src={Check} alt="Check"/>
)

export default CheckIcon
