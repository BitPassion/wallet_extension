import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Button from '../../styled-components/Button';
import Spinner from '../../components/Spinner';
import Success from '../../components/Success';
import { Logo, Title, FullInput, Center, TextUnderline } from "./Common";

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    let navigate = useNavigate();
    const loginHandler = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
                navigate("/main");
            }, 1000);
        }, 2000);
    }
    return (
        <>
            <Logo className="font-roboto-400">Valo.id logo</Logo>
            { loading ? <Spinner style={{
                marginTop: "35px"
            }}/> : (
                success ? <>
                    <Success style={{
                        marginTop: "33px"
                    }}/>
                </> :
            <>
                <Title className="font-roboto-400">Sign In</Title>
                <FullInput className="font-roboto-400" style={{
                    marginBottom: "33px"
                }} placeholder="Profile id" />
                <FullInput className="font-roboto-400" placeholder="Password or other" />
                <Center style={{
                    padding: "50px",
                }}>
                    <Link to="/verify">
                        <TextUnderline style={{
                            fontSize: "12px",
                            color: "#000000",
                        }}>Register</TextUnderline>
                    </Link>
                </Center>
                <Center>
                    <Button style={{
                        width: "111px",
                        backgroundColor: "#15EA37",
                    }} onClick={loginHandler}>Sign In</Button>
                </Center>
            </>) }
        </>
    )
}

export default Login;
