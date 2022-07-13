import { useState } from "react";
import styled from "styled-components";
import Down from './Icons/Down';
import Text from "../styled-components/Text";

const Item = styled.div`
`;

const ListGroup = styled.div`
`

const Selected = styled.div`
`;

const SelectedGroup = styled.div`
    width: 200px;
    position: relative;
    & > ${Selected} {
        border-radius: 10px;
        background-color: #f0f0f0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 6px 16px;
        box-sizing: border-box;
        width: 100%;
        height: 44px;
        & img {
            transition: all 0.5s;
        }
    }
    & > ${ListGroup} {
        display: none;
    }
    &.open ${Selected} {
        & img {
            transform: rotate(180deg);
        }
    }
    &.open > ${ListGroup} {
        z-index: 50;
        display: block;
        position: absolute;
        top: 40px;
        margin-top: 5px;
        width: 100%;
        border-radius: 10px;
        background-color: #f0f0f0;
        & ${Item} {
            height: 40px;
            display: flex;
            align-items: center;
            width: 100%;
            padding: 12px 16px;
            box-sizing: border-box;
        }
    }
`;

const defaultList = [{
    text: "AAA1"
},{
    text: "AAA2"
},];

const ComboBox = ({list = defaultList, onChange = () => {}, selected = 0, ...props}) => {
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(selected);
    return (
        <SelectedGroup className={`${open ? "open" : ""}`} onClick={() => setOpen(oldVal => !oldVal)} {...props}>
            <Selected>
                <Text>{list[selectedItem].text}</Text>
                <Down width={"13px"} height={"8px"}/>
            </Selected>
            <ListGroup>
            {list.map((item, id) => (
                <Item key={id} onClick={() => setSelectedItem(id)}>{item.text}</Item>
            ))}
            </ListGroup>
        </SelectedGroup>
    )
}

export default ComboBox;