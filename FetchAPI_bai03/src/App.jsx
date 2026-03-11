import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    var fetchdata = fetch(url);
    var res = fetchdata.then((response) => {
      return response.json();
    }).then((data) => {
      setData(data);
      console.log(data);

    })
  }, [])
  return (
    <>
      {
      data.map((item)=>{
        return <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.phone}</p>
          <p>{item.website}</p>
        </div>
      })
    }
    </>
  )
}

export default App
