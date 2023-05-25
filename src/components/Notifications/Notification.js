import React,{useState,useEffect} from "react";
import { gettoken } from "../../firebase";
const Notifications = (props)=>{
    const [isTokenFound, setTokenFound]=useState(false)

    console.log("Token found", isTokenFound)
    
    useEffect(()=>{
        let data

        async function tokenFunc(){
            data= await gettoken(setTokenFound)
            if(data){
                console.log("Token is",data)
            }
            return data
        }
        tokenFunc()
    },[setTokenFound])

    return <></>
}

Notification.propType={  

}

export default Notifications