import { createContext, useState } from "react";
import ReactModal from 'react-modal';
import { zIndex03 } from "../constants/zIndexs";
import Text from "../styled-components/Text";

export const AppContext = createContext({});

const AppContextProvider = ({children}) => {
    const [openError, setOpenError] = useState(false);
    return (
        <AppContext.Provider 
            value={{
                openError,
                setOpenError
            }}
        >
            {children}
            <ReactModal 
                isOpen={openError}
                contentLabel="Error"
                onRequestClose={() => setOpenError(false)}
                style={{
                    overlay: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: `${zIndex03}`,
                    },
                    content: {
                        position: 'relative',
                        width: "calc(100% - 120px)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "fit-content",
                        inset: 0,
                    }
                }}
            >
                <Text style={{
                    margin:"10% 0 10%",
                    fontSize: "18px"
                }}>OopS.</Text>
                <Text style={{
                    fontSize: "18px"
                }}>ERROR</Text>
                <Text style={{marginBottom:"10%"}}>404</Text>
                <Text style={{marginBottom:"10%", color:"#FF5656"}}>X _ X</Text>
            </ReactModal>
        </AppContext.Provider>
    )
}

export default AppContextProvider;