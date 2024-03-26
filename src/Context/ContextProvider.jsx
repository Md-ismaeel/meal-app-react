import { useState } from "react";
import { userContext } from "./UserContext";

export const ContextProvider = (props) => { // or {children} this both will work
    const [user, setUser] = useState([
        { name: 'ismail' },
        { name: 'islam' },
        { name: 'Allah' },
        { name: 'God' },
        { name: 'khalid' }
    ])
    return (
        <>
            <userContext.Provider value={{ user, setUser }}>
                {props.children}
            </userContext.Provider>
        </>
    );
}
