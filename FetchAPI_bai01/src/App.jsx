import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])
  var url = "https://jsonplaceholder.typicode.com/users";

  // useEffect(() => {
  //   var fetchdata = fetch(url);
  //   var res = fetchdata.then((response) => {
  //     return response.json();
  //   }).then((data) => {
  //     setData(data);
  //     console.log(data);

  //   })
  // }, [])

  useEffect(()=>{
    async function fetchdata() {
      var res = await fetch(url);
      var data = await res.json();
      console.log(data);
      setData(data);
    }
    fetchdata();
  }, [])


  return (
    <>
    {
      data.map((item)=>{
        return <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.email}</p>
        </div>
      })
    }
    </>
  )
}

export default App
