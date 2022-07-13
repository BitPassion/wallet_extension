import AddFunds from '../../assets/addfunds.png';

const AddFundsIcon = ({style, width = 9, height = 9, ...props}) => (
    <img style={{
        width: width,
        height: height,
        ...style
    }} src={AddFunds} alt="AddFunds" {...props}/>
)

export default AddFundsIcon;
