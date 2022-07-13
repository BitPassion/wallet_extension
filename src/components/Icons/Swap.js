import Swap from '../../assets/swap.png';

const SwapIcon = ({style, width = 9, height = 9, ...props}) => (
    <img style={{
        width: width,
        height: height,
        ...style
    }} src={Swap} alt="Swap"/>
)

export default SwapIcon;
