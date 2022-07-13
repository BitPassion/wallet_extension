import Text from "../../styled-components/Text";
import { useState } from "react";
import RadioButton from '../../components/RadioButton';
import InputWhite from "../../styled-components/InputWhite";
import styled from "styled-components";
import Button from "../../styled-components/Button";

const InputBox = styled(InputWhite)`
    border: none;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.25);
    text-align: center;
    &:focus {
        border: none;
        outline: none;
    }
    &::placeholder {
        color: black;
    }
`;

const cardTypes = [{
    type: "visa", text: "Visa"
},{
    type: "mastercard", text: "Mastercard"
},]

const AddFundsCreditDetail = () => {
    const [cardType, setCardType] = useState(0);
    return (
        <>
            <Text style={{
                marginBottom: `36px`
            }}>Credit card details</Text>
            <div style={{
                display: "flex",
                marginBottom: `38px`,
            }}>
                {cardTypes.map((radio, id) => (
                    <RadioButton key={id} text={radio.text} active={cardType === id} onClick={() => setCardType(id)}></RadioButton>
                ))}
            </div>
            <Text style={{
                textAlign: "center",
                marginBottom: "8px"
            }}>Card number</Text>
            <div style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "13px"
            }}>
                <InputBox placeholder={"4470 xxxxxxxxxx 4321"}/ >
            </div>
            <Text style={{
                textAlign: "center",
                marginBottom: "14px"
            }}>Exp. date</Text>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "16px"
            }}>
                <InputBox style={{
                    width: "63px",
                    marginRight: "3px"
                }} placeholder={"01"}/ > / <InputBox style={{
                    width: "63px",
                    marginLeft: "3px"
                }} placeholder={"2021"}/ >
            </div>
            <Text style={{
                textAlign: "center",
                marginBottom: "8px"
            }}>Full name in the card</Text>
            <div style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "13px"
            }}>
                <InputBox placeholder={"Mark Doe"}/ >
            </div>
            <Text style={{
                textAlign: "center",
                marginBottom: "8px"
            }}>CVV</Text>
            <div style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "32px"
            }}>
                <InputBox style={{
                    width: "50%"
                }} placeholder={"XXX"}/ >
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                marginTop: `22px`,
            }}>
                <Button style={{
                    width: "123px",
                    height: "45px",
                    backgroundColor: "#15EA37"
                }} onClick={() => {}}>Add Card</Button>
            </div>
        </>
    )
}

export default AddFundsCreditDetail;