import { createContext, useContext, useState } from "react";

const StateContext = createContext({
  currentUser: null,
  token: null,
});

export const ContextProvider = ({ children }) => {
  const [user, set_user] = useState("");
  const [role, set_role] = useState("");

  const [orders, setshoworders] = useState(false);
  const [cleaningalert, setcleaningalert] = useState(false);
  const [extraitemalert, setextraitemalert] = useState(false);
  const [showItems, setShowItems] = useState(false);

  //maile ya "false" halda as a string read garyo and uta js ma {orders&& </>}
  //le yeslai as a true boolean read garyo so testo nahuna ko lagi false as a boolean pass garnu parcha.
  return (
    <StateContext.Provider
      value={{
        user,
        set_user,
        role,
        set_role,
        orders,
        setshoworders,
        cleaningalert,
        setcleaningalert,
        extraitemalert,
        setextraitemalert,
        showItems,
        setShowItems,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
