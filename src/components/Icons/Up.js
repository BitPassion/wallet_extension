import Up from '../../assets/up.png';

const UpIcon = ({style, width = 9, height = 9, ...props}) => (
    <img style={{
        width: width,
        height: height,
        ...style
    }} src={Up} alt="Up"/>
)

export default UpIcon;
