import { Outlet } from "react-router";
import styled from "styled-components";

const SwapLayout = styled.div`
    padding: 44px 38px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 50px - ${44 * 2}px);
`;

const Swap = () => {
    return (<SwapLayout>
        <Outlet />
    </SwapLayout>)
}

export default Swap;