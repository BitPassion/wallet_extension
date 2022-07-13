// import { useEffect } from 'react';
import { 
    Outlet, 
    // useNavigate 
} from 'react-router-dom';
import styled from 'styled-components';

const CenterView = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 22px;
    flex-direction: column;
    height: 100%;
`;

const Auth = () => {
    // const navigate = useNavigate();
    // useEffect(() => {
    //   navigate("/main");
    // }, [])
    return (
        <CenterView>
            <Outlet />
        </CenterView>
    )
}

export default Auth;