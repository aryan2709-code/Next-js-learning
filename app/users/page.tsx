// Making a client side component , writing code this way will not provide any server side rendering and 
// it doesn't get rid of the waterfall problem

"use client"

import axios from "axios";
import { use, useEffect,useState } from "react";

export default function User() {
    const [loading , setLoading] = useState(true);
    const [data , setData] = useState();

    useEffect(() => {
    axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
    .then(response => {
        setData(response.data);
        setLoading(false);
    })
    },[])

    if(loading)
    {
        return <div>
            loading--
        </div>
    }

    return <div>
        User Page
        {data.name}
        {data.email}
    </div>
}