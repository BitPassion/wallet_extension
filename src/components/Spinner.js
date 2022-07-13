import Spinner from '../styled-components/Spinner';
import LoadingImg from '../assets/loading.png';

const SpinnerCom = ({...props}) => (
    <Spinner src={LoadingImg} alt="Loading" {...props}/>
)

export default SpinnerCom;
