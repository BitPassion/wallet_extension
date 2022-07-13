import Settings from '../../assets/settings.png';

const SettingIcon = ({style, width = 9, height = 9, ...props}) => (
    <img style={{
        width: width,
        height: height,
        ...style
    }} src={Settings} alt="Settings"/>
)

export default SettingIcon;
