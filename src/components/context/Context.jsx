import React, {createContext} from "react";
import { useState } from "react";


export const Context = createContext();

const ContextProvider = ({children}) => {

    const [cuant, setCuant] = useState(0);
    const [gender, setGender] = useState();

    return (
        <Context.Provider value={{cuant, setCuant, gender, setGender}}>
            {children}
        </Context.Provider>
    )
}


export default ContextProvider;