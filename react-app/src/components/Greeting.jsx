import React, { useState } from "react";
import { useEffect } from "react";

function Greeting(props){
    const [times, setTimes]= useState(0);
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        console.log("component mounted");
        const handleClick = () => setTimes((c) => c + 1);
        document.addEventListener('click', handleClick);

        async function fetchData(){
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setPosts(data);
        }

        fetchData();

        return () => {
            console.log('component unmonted');
            document.removeEventListener('click', handleClick);
        }
    }, []);

    useEffect(()=>{
        console.log('count updated');
        document.title = `Count: ${times}`;

        return () => {
            console.log('second useeffect cleanup');
        }
    },[times]);

    function increment(){
        setTimes(times+1);
    }
    return <>
    <span>this is a Greeting {props.name}</span>
    <h4 onClick={increment}>You click this {times} times.</h4>
    <ul>
        {posts.map(post => (<li key={post.id}>{post.title}</li>))}
    </ul>
    </>

}

export default Greeting