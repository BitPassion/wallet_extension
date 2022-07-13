import RefreshCheck from '../../assets/refresh-check.png';

const RefreshCheckIcon = ({style, width = 9, height = 9, ...props}) => (
    <img style={{
        width: width,
        height: height,
        ...style
    }} src={RefreshCheck} alt="RefreshCheck"/>
)

export default RefreshCheckIcon;
