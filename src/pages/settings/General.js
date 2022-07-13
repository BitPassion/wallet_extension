// import ScrollContainer from 'react-indiana-drag-scroll';
import RadioButton from '../../components/RadioButton';
import Switch from '../../components/Switch';
import ComboBox from '../../components/ComboBox';
import { useState } from "react";
import Text from "../../styled-components/Text";
import PerfectScrollbar from 'react-perfect-scrollbar';

const radioList = [{
    text: "Native", 
},{
    text: "Fiat", 
},]

const General = () => {
    const [hideTokensWithoutBalance, setHideTokensWithoutBalance] = useState(false);
    const [activeRadio, setActiveRadio] = useState(0);
    return (
        <PerfectScrollbar style={{
            height: `calc(100vh - 50px - 39px - 44px)`,
            paddingRight: `12px`
        }}>
        {/* <ScrollContainer style={{height: `calc(100vh - 50px - 39px - 44px)`}} vertical={true} horizontal={false} hideScrollbars={true}> */}
            <Text style={{
                fontWeight: 700,
                fontSize: "14px",
                marginBottom: "11px",
            }}>Currency conversion</Text>
            <Text style={{
                fontSize: "10px",
                marginBottom: "7px"
            }}>Display FIAT values in using a specific currency<br /> throughout the application</Text>
            <ComboBox 
                list={[{text: "EUR - EURO"},{text: "USD - DOLLAR"},]}
                onChange={() => {}}
            />
            <Text style={{
                marginTop: "8px",
                fontWeight: 700,
                fontSize: "14px",
                marginBottom: "4px",
            }}>Primary currency</Text>
            <Text style={{
                fontSize: '10px',
                marginBottom: "10px",
            }}>Select native to prioritize displaying values in the<br /> native currency of the chain (e.g. ETH).<br /> Select Fiat to prioritize displaying values in<br /> your selected fiat currency.</Text>
            <div style={{
                display: "flex",
                marginBottom: `16px`,
            }}>
                {radioList.map((radio, id) => (
                    <RadioButton key={id} text={radio.text} active={activeRadio === id} onClick={() => setActiveRadio(id)}></RadioButton>
                ))}
            </div>
            <Text style={{
                fontWeight: 700,
                fontSize: "14px",
                marginBottom: "11px",
            }}>Current language</Text>
            <Text style={{
                fontSize: "10px",
                marginBottom: "9px",
            }}>Translate the application to a different supported laguage</Text>
            <ComboBox 
                list={[{text: "English"},{text: "German"},]}
                onChange={() => {}}
            />
            <Text style={{
                marginTop: "20px",
                fontWeight: 700,
                fontSize: "14px",
                marginBottom: "11px",
            }}>Search Engine</Text>
            <Text style={{
                fontSize: "10px",
                marginBottom: "13px",
            }}>Change the default search engine used when<br /> entering search terms in the URL bar.</Text>
            <ComboBox 
                list={[{text: "DuckDuckGo"},{text: "Google"},]}
                onChange={() => {}}
            />
            <div style={{
                display: "flex",
                marginTop: "15px",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "5px",
            }}>
                <Text style={{
                    fontWeight: 700,
                    fontSize: "14px",
                }}>Hide tokens without balance</Text>
                <Switch on={hideTokensWithoutBalance} onClick={() => setHideTokensWithoutBalance(oldVal => !oldVal)}></Switch>
            </div>
            <Text style={{
                fontSize: "10px",
                marginBottom: "13px",
            }}>prevents tokens with no balance from displaying in your token listing</Text>
            <Text style={{
                fontWeight: 700,
                fontSize: "14px",
                marginBottom: "11px",
            }}>Account identicon</Text>
            <div style={{
                display: "flex",
            }}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                }}>
                    <div style={{
                        width: "39px",
                        height: "39px",
                        borderRadius: "1000px",
                        border: true ? "none" : `1px solid #7ec8df`,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <div style={{
                            width: "33px",
                            height: "33px",
                            borderRadius: "1000px",
                            border: `1px solid black`,
                        }}></div>
                    </div>
                    <Text style={{
                        marginLeft: `12px`
                    }}>Jazzicons</Text>
                </div>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                }}>
                    <div style={{
                        width: "39px",
                        height: "39px",
                        borderRadius: "1000px",
                        border: false ? "none" : `1px solid #7ec8df`,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <div style={{
                            width: "33px",
                            height: "33px",
                            borderRadius: "1000px",
                            border: `1px solid black`,
                        }}></div>
                    </div>
                    <Text style={{
                        marginLeft: `12px`
                    }}>blockies</Text>
                </div>
            </div>
        {/* </ScrollContainer> */}
        </PerfectScrollbar>
    )
}

export default General;