import React, { useEffect, useState } from 'react'


export const FunCompApis = () => {

    const [postData, setPostData] = useState([]);
    const [Error, setError] = useState(false);

    useEffect(() => {
        // fetch("https://jsonplaceholder.typicode.com/posts")
        //     .then((res) =>  res.json())
        //     .then((result) => {
        //         console.log(result)
        //         setPostData(result);
        //     })
        //     .catch((err) =>{
        //         console.log(err);
        //     })
        AsyncAPiCall();
    },[])

    const AsyncAPiCall = async () => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const result = await response.json();
            setPostData(result);
            setError(false);

        }
        catch(e){
            console.error(e);
            setError(true);
        }
    }

    return(

        <>
        <h3>Make an api call</h3>
        {
            postData.map((data, id) => {
                return(
                    <div key={id} > {data.title}</div>
                )
            })
        }

        </>
       

    )
}