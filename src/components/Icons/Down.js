import Down from '../../assets/down.png';

const DownIcon = ({style, width = 9, height = 9, ...props}) => (
    <img style={{
        width: width,
        height: height,
        ...style
    }} src={Down} alt="Down"/>
)

export default DownIcon;
