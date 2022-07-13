import Help from '../../assets/help.png';

const HelpIcon = ({style, width = 9, height = 9, ...props}) => (
    <img style={{
        width: width,
        height: height,
        ...style
    }} src={Help} alt="Help"/>
)

export default HelpIcon;
