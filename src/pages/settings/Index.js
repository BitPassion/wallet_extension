import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import Text from "../../styled-components/Text";
import RightIcon from "../../components/Icons/Right";
import { marginSm } from "../../constants/dimentions";

const SettingListGroup = styled.ul`
    list-style: none;
    padding-left: 0;
    margin-top: 0;
`;

const SettingList = styled.li`
    display: flex;
    width: 100%;
    margin-bottom: 37px;
`;

const SettingListTitle = styled(Text)`
    font-weight: 700;
    margin-top: 0px;
    margin-bottom: 11px;
    font-size: 14px;
`;

const SettingListDescription = styled(Text)`
    font-weight: 400;
    font-size: 10px;
`;

const settingList = [{
    title: "General",
    description: <>Currency conversion, primary currency,<br /> language, and search engine</>,
    url: "/general"
},{
    title: "Security & Privacy",
    description: <>Privacy settings, Meta Metrics, private key and wallet<br /> secret recovery phrase</>,
    url: "/security"
},{
    title: "Advanced",
    description: <>Access developer features, reset account,<br /> setup testnets, sync with extension, state logs,<br /> IPFS gateway and custom RPC</>,
    url: "/advanced"
},{
    title: "Contacts",
    description: <>Add, edit, remove and manage your accounts</>,
    url: "/contacts"
},{
    title: "Networks",
    description: <>Add, and edit custom RPC networks</>,
    url: "/networks"
},];

const SettingsIndex = () => {
    const navigate = useNavigate();
    return (
        <SettingListGroup>
            {settingList.map((setting, id) => (
                <SettingList key={id}>
                    <div style={{
                        flexGrow: 1,
                        marginRight: marginSm,
                    }}>
                        <SettingListTitle>{setting.title}</SettingListTitle>
                        <SettingListDescription>{setting.description}</SettingListDescription>
                    </div>
                    <div style={{
                        flexGrow: 0,
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer"
                    }} onClick={() => navigate(`/main/settings${setting.url}`)}>
                        <RightIcon width={"16px"} height={"27px"}/>
                    </div>
                </SettingList>
            ))}
        </SettingListGroup>
    )
}

export default SettingsIndex;