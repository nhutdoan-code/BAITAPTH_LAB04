import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { id } from 'react'

function App() {
  const [data, setData] = useState([])
  const [user, setUser] = useState(null)
  const [id, setId] = useState("")
  const [error, setError] = useState("")
  var url = `https://jsonplaceholder.typicode.com/users/${id}`;

  useEffect(() => {
    if (id==="") {
      return;
    }

    //Ép kiểu sang number để so sánh
    const numId = Number(id);

    if (numId<1 || numId>10) {
      setError("User not found")
      setUser(null);
      return;
    }
    setError("")

    var fetchdata = fetch(url);
    var res = fetchdata.then((response) => {
      return response.json();
    })
    .then((data) => {
      if (!data.id) {
          setError("User not found")
          setUser(null)
        } else {
          setUser(data)
        }
    })
    .catch(()=>{
      setError("User not found")
      setUser(null)
    })
  }, [id])
  return (
    <>
      <input type="number" placeholder='Nhập userId(1-10)' value={id} onChange={(e) => setId(e.target.value)}/>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {
      user && (
        <div>
          <p>{user.name}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
        </div>
      )
    }
    </>
  )
}

export default App
