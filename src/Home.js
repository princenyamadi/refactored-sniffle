import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    
    // const [name, setName] = useState('mario')



   
    // useEffect(() => {
    //     console.log('use effect ran');
    //     // console.log(blogs)
    //     console.log(name)
    // }, [name])

    useEffect(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                setBlogs(data);
            })
    }, [])

    return ( 
        <div className="home">
            {
                blogs && <BlogList blogs={blogs}  title="All Blogs!" /> }
            {/* <button onClick={() => setName('luigi')} >Change name</button>
            <p>{name}</p> */}
        </div>
     );
}
 
export default Home;