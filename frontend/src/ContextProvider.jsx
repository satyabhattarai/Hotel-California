import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    currentUser: null,
    token: null,
});

export const ContextProvider = ({ children }) => {
    const [user, set_user] = useState("hi");
    const [token, set_token] = useState("");

    return (
        <StateContext.Provider
            value={{
                user,
                set_user,
                token,
                set_token,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
