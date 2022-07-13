import Refresh from '../../assets/refresh.png';

const RefreshIcon = ({style, width = 9, height = 9, ...props}) => (
    <img style={{
        width: width,
        height: height,
        ...style
    }} src={Refresh} alt="Refresh"/>
)

export default RefreshIcon;
