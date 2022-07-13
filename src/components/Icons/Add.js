import Add from '../../assets/add.png';

const AddIcon = ({style, width = 9, height = 9, ...props}) => (
    <img style={{
        width: width,
        height: height,
        ...style
    }} src={Add} alt="Add" {...props}/>
)

export default AddIcon;
