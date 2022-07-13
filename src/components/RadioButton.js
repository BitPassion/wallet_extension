import Text from "../styled-components/Text";

const RadioButton = ({ text = "", active = false, style, ...props}) => {
    return (<div style={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        ...style,
    }} {...props}>
        <div style={{
            width: `16px`,
            height: `16px`,
            borderRadius: "1000px",
            borderColor: `black`,
            borderWidth: "1px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderStyle: "solid",
        }}>
            {active ? 
            <div style={{
                width: `10px`,
                height: `10px`,
                border: "none",
                borderRadius: "1000px",
                backgroundColor: `15ea37`,
            }}></div> : 
            <></>}
        </div>
        <Text style={{
            marginLeft: `12px`,
            minWidth: "80px",
        }}>{text}</Text>
    </div>)
}

export default RadioButton;