import Axios, * as others from "axios";
import React, {createContext, useState, useEffect} from "react";
import domain from "../utils/domain";
import { useRouter } from 'next/router';


const UserContext = createContext();

function UserContextProvider(props) {
    const router = useRouter();
    const [user, setUser] = useState(undefined);
    const [ready, setReady] = useState(false);

    async function getUser() {
        const userRes = await Axios.get(`${domain}/user/isloggedin`);
        if(!userRes.data) {
        router.push('/register');
        setReady(true);
        }
        else{
        setUser(userRes.data);
        setReady(true);
        }
    }

    useEffect(() =>{
        getUser();
    }, []);

    // allows time to check if browswer is logged in or not.
    if(!ready) return null;
  return <UserContext.Provider value={{user, getUser}}>{props.children}</UserContext.Provider>
};

export default UserContext;
export {UserContextProvider};