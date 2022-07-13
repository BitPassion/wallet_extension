
import History from '../../assets/transactionhistory.png';

const HistoryIcon = ({style, width = 9, height = 9, ...props}) => (
    <img style={{
        width: width,
        height: height,
        ...style
    }} src={History} alt="History"/>
)

export default HistoryIcon;
