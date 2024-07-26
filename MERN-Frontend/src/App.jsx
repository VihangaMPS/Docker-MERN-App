import {useState, useEffect} from 'react'
import axios from "axios";
import './App.css'

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/api/users").then((response) => {
            setUsers(response.data.data);
        }).catch((error) => {
            console.error("Error when fetching Users", error);
        })
    }, []);

    return (
        <>
            <h1>Users</h1>
            <div>
                {users.map((user) => (
                    <div key={user.id}>
                        <span><h2>{user.name}</h2>{user.email}</span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default App
