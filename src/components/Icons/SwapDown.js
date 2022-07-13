import SwapDown from '../../assets/swap-down.png';

const SwapDownIcon = ({style, width = 9, height = 9, ...props}) => (
    <img style={{
        width: width,
        height: height,
        ...style
    }} src={SwapDown} alt="SwapDown" {...props}/>
)

export default SwapDownIcon;
