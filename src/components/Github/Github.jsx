import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";


function Github(){
    const data= useLoaderData();

    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/digu100')
    //     .then(response=> response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])

    return(
        <div
        className="text-center m-4 bg-purple-500 p-4 text-3xl"
        >Github followers: {data.followers}</div>
    )
}

export default Github;

export const githubInfoLoader= async ()=>{
   const response= await fetch('https://api.github.com/users/digu100')
   return response.json();
}




