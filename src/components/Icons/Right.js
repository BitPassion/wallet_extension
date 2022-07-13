import Right from '../../assets/gt.png';

const RightIcon = ({style, width = 9, height = 9, ...props}) => (
    <img style={{
        width: width,
        height: height,
        ...style
    }} src={Right} alt="Right"/>
)

export default RightIcon;
