import { gray, red, green } from '../constants/colors';

const ProgressBar = ({style, percent = 0}) => {
    const color = percent > 50 ? green : red;
    return (
        <div style={{
            position: 'relative',
            ...style
        }}>
            <div style={{
                position: 'absolute',
                backgroundColor: gray,
                borderRadius: "1000px",
                width: "100%",
                height: "100%",
            }}></div>
            <div style={{
                position: 'absolute',
                backgroundColor: color,
                borderRadius: "1000px",
                width: `${percent}%`,
                left: 0,
                height: "100%",
            }}></div>
        </div>
    )
}

export default ProgressBar;