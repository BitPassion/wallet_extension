import SuccessImg from '../assets/success.png';

const Success = ({style, ...props}) => (
    <img src={SuccessImg} alt="Success" style={{...style}} {...props}/>
)

export default Success;
