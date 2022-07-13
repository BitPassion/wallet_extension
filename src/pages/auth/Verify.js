import { Link } from 'react-router-dom';
import { useState } from 'react';

import Button from '../../styled-components/Button';
import Spinner from '../../styled-components/Spinner';

import { Logo, Title, FullInput, Center, TextUnderline } from "./Common";

const Verify = () => {
    const [loading] = useState(false);
    return (
        <>
            <Logo>Valo.id logo</Logo>
            { loading ? <Spinner /> :
            <>
                <Title className="font-roboto-400">Sign In</Title>
                <FullInput placeholder="Password or other" />
                <Title className="font-roboto-400" style={{
                    marginTop: "18px",
                    marginBottom: "18px",
                }}>Or</Title>
                <Button style={{
                    backgroundColor: "#15EA37",
                    width: "111px",
                }}>Verify with app</Button>
                <Center style={{
                    paddingTop: "50px",
                }}>
                    <Link to="/extra">
                        <TextUnderline style={{
                            fontSize: "12px",
                            color: "#000000",
                        }}>Register</TextUnderline>
                    </Link>
                </Center>
            </> }
        </>
    )
}

export default Verify;
