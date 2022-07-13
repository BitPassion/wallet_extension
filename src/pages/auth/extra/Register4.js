import Text from '../../../styled-components/Text';

const Register3 = () => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
        }}>
            <Text style={{
                fontSize: "18px",
                marginTop: "35px",
            }}>Well done! Let us help you to start.</Text>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "32px 20px 0 20px",
                borderRadius: "10px",
                boxShadow: "2px 0px 5px #F0F0F0",
                padding: "55px 34px 21px 34px",
                width: "calc(100% - 40px - 68px)",
            }}>
                <Text style={{
                    marginBottom: "46px",
                    textAlign: "center",
                    fontSize: "18px"
                }}>Graphics & text here</Text>
                <ul style={{
                    fontSize: "18px",
                    listStyle: "disc",
                    paddingLeft: "0px",
                    marginBottom: "53px",
                }}>
                    <li>How to confirm sign in</li>
                    <li>How to request KYC</li>
                    <li>How to sign documents</li>
                    <li>How to add assets</li>
                    <li>How to vote</li>
                </ul>
                <Text style={{
                    textDecoration: "underline",
                    marginBottom: "15px"
                }}>Skip</Text>
                <Text>1/5</Text>
            </div>
        </div>
    )
}

export default Register3;
