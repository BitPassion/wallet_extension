import styled from "styled-components";

const Container = styled.div`
    width: 39px;
    height: 16px;
    border-radius: 1000px;
    display: flex;
    align-items: center;
    background-color: #c4c4c4;
    & > div {
        border: 1px solid black;
        width: 14px;
        height: 14px;
        border-radius: 1000px;
        box-sizing: border-box;
        margin-left: 0;
        transition: all 0.5s;
    }
    &.open {
        background-color: #15EA37;
    }
    &.open > div {
        margin-left: calc(100% - 14px);
        border: none;
        background-color: #4BB78F;
    }
`;

const Switch = ({on = false, ...props}) => {
    return (
        <Container className={`${on ? "open" : ""}`} {...props}>
            <div></div>
        </Container>
    )
}

export default Switch;
