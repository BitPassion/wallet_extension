import Expand from '../../assets/expandview.png';

const ExpandIcon = ({style, width = 9, height = 9, ...props}) => (
    <img style={{
        width: width,
        height: height,
        ...style
    }} src={Expand} alt="Expand"/>
)

export default ExpandIcon;
