import Axios, * as others from "axios";
import React, {createContext, useState, useEffect} from "react";
import domain from "../utils/domain";

const UserContext = createContext();

function UserContextProvider(props) {
    const [user, setUser] = useState(undefined);

    async function getUser() {
        const userRes = await Axios.get(`${domain}/user/isloggedin`);
        setUser(userRes.data);
        console.log(userRes.data);
    }
    useEffect(() =>{
        getUser();
    }, []);

  return <UserContext.Provider value={{user, getUser}}>{props.children}</UserContext.Provider>
};

export default UserContext;
export {UserContextProvider};