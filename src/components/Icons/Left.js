import Left from '../../assets/left.png';

const LeftIcon = ({style, width = 9, height = 9, ...props}) => (
    <img style={{
        width: width,
        height: height,
        ...style
    }} src={Left} alt="Left"/>
)

export default LeftIcon;
