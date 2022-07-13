import { useNavigate } from 'react-router-dom';
import Text from '../styled-components/Text';
import Button from '../styled-components/Button';

import ProgressBar from '../components/ProgressBar';

const Vote = () => {
    const navigate = useNavigate();
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            height: `calc(100% - 50px)`,
            justifyContent: "center",
            padding: `0px 54px`,
            boxSizing: "border-box",
        }}>
            <Text style={{
                paddingBottom: "18px",
                fontSize: "18px",
                lineHeight: "18px"
            }}>Thank you for voting.</Text>
            <Text style={{
                wordBreak: "break-all"
            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
            <div style={{
                paddingTop: "27px",
                width: "100%",
            }}>
                <Text style={{
                    textAlign: 'right',
                    marginBottom: "10px"
                }}>70%</Text>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                }}>
                    <Text style={{
                        paddingRight: `30px`,
                        width: "26px",
                    }}>YES</Text>
                    <ProgressBar percent={70} style={{
                        width: "100%",
                        height: "10px",
                    }}/>
                </div>
                <Text style={{
                    textAlign: 'right',
                    marginTop: `15px`,
                    marginBottom: '10px',
                }}>30%</Text>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                }}>
                    <Text style={{
                        paddingRight: `30px`,
                        width: "26px",
                    }}>NO</Text>
                    <ProgressBar percent={30} style={{
                        width: "100%",
                        height: "10px",
                    }}/>
                </div>
            </div>
            <div style={{
                paddingTop: `73px`,
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Button style={{
                    width: "161px",
                    backgroundColor: "#15EA37",
                }} onClick={() => navigate("/main")}>Return to main view</Button>
            </div>
        </div>
    )
}

export default Vote;
