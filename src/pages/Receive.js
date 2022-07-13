import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const ReceiveLayout = styled.div`
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 50px - 24px);
`;

const Receive = () => {
    return (
        <ReceiveLayout>
            <Outlet />
        </ReceiveLayout>
    )
}

export default Receive;