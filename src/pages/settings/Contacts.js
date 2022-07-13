import { useNavigate } from "react-router-dom";
// import ScrollContainer from "react-indiana-drag-scroll";
import styled from "styled-components";
import Title from "../../components/Title";
import Text from "../../styled-components/Text";
import Button from "../../styled-components/Button";
import TrashIcon from '../../components/Icons/Trash';
import PerfectScrollbar from 'react-perfect-scrollbar';

const ContactItem = styled.div`
    display: flex;
    height: 40px;
    margin: 12px 0px;
`;

const Footer = styled.div`
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Contact = () => {
    const navigate = useNavigate();
    return (
        <>
            <PerfectScrollbar style={{
                height: `calc(100vh - 50px - 39px - 44px)`,
                paddingRight: `12px`
            }}>
            {/* <ScrollContainer style={{height: `calc(100vh - 50px - 39px - 44px - 64px)`}} vertical={true} horizontal={false} hideScrollbars={true}> */}
                <Title>My contacts</Title>
                {[0,0,0,0,0,0,0,0,0].map((contact, id) => {
                    return (<ContactItem key={id} >
                        <div style={{
                            flexGrow: 1,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-evenly"
                        }}>
                            <Text style={{
                                fontSize: "10px"
                            }}>Crypto.com wallet</Text>
                            <Text style={{
                                fontSize: "10px"
                            }}>*public wallet address here*</Text>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                        }}>
                            <TrashIcon width={19} height={20}></TrashIcon>
                        </div>
                    </ContactItem>)
                })}
            {/* </ScrollContainer> */}
            </PerfectScrollbar>
            <Footer>
                <Button style={{
                    backgroundColor: "#15EA37",
                    width: "157px",
                    height: "39px"
                }} onClick={() => navigate("/main/settings/add-contact")}>Add contact</Button>
            </Footer>
        </>
    )
}

export default Contact;