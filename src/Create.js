import { useState } from "react";

const Create = () => {
const [title, setTitle] = useState('');
const [body, setBody] = useState('');
const [author, setAuthor] = useState('mario');
const [isPending, setIsPending] = useState('false')

const handleSubmit = (e) =>{
    e.preventDefault();

    const blog = {title, body, author}
    console.log(blog)
    setIsPending(true)
    fetch('http://localhost:8000/blogs',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(blog)
    }).then(()=>{
        console.log('new blog added')
    })
    setIsPending(false)
}
    return (  
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit = {handleSubmit} >
                <label htmlFor="">Blog Title:</label>
                <input type="text" name="" id="" required value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label>Blog body:</label>
                <textarea value = {body} onChange = {(e) => setBody(e.target.value)} ></textarea>
                <label htmlFor="">Blog author</label>
                <select value = {author} onChange = {(e) =>setAuthor(e.target.value)} >
                    <option value="mario">mario</option>
                    <option value="mario">yoshi</option>
                    <option value="mario">luigi</option>
                </select>
                {!isPending && <button >Add Blog</button>
                }
                {isPending && <button>Adding blog...</button> }
            </form>
        </div>
    );
}
 
export default Create;