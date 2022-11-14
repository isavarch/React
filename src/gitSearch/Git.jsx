import { useState } from "react";
import '../../src/App.css'

const Git=()=>{

        const [search,setSearch]= useState("");
        const [user,setUser]= useState({});

        
            const fecthUser = async ()=>{
            try{
                const response = await fetch(`https://api.github.com/users/${search}`)
                const data = await response.json();
                setUser(data)
                }catch(error){
                    console.log("error"),error.message
                }
            
        }

    return(
        <div className="App">
            <div className="container">
                <h1>Buscador GitHub</h1>
                <div className="grid">
                    <input type="text" placeholder="Ingresa nombre de usuario" onChange={(e)=>setSearch(e.target.value)} />
                </div>
                <div className="letra">
                    <button className="btn" onClick={fecthUser}>Buscar</button>
                </div>
                <article>
                    <div>
                        <img src={user.avatar_url} alt="" />
                        <h4>{user.login}</h4>
                        <p>{user.bio}..</p>
                        <h3>{user.company}.</h3>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default Git;