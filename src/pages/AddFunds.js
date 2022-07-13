import { Outlet } from "react-router-dom";
import styled from "styled-components";

const AddFundsLayout = styled.div`
    display: flex;
    flex-direction: column;
    padding: 22px;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 50px);
    box-sizing: border-box;
`;

const AddFunds = () => {
    return (
        <AddFundsLayout>
            <Outlet />
        </AddFundsLayout>
    )
}

export default AddFunds;