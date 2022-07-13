import Trash from '../../assets/trash.png';

const TrashIcon = ({style, width = 9, height = 9, ...props}) => (
    <img style={{
        width: width,
        height: height,
        ...style
    }} src={Trash} alt="Trash"/>
)

export default TrashIcon;
