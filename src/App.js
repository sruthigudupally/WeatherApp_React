import React, { useState } from 'react'

const App = () => {
  let api={
    key:"77f0358990660e8c1dfaf4deebb34472",
    url:"https://api.openweathermap.org/data/2.5/weather"
  }
  let [city,setcity]=useState("")
  let [weather,setweather]=useState({})
  let [error,seterror]=useState("")
  // let [loading,setloading]=(true)
  
  function searchWeather(){
    // setloading(true);
    fetch(`${api.url}?q=${city}&appid=${api.key}&units=metric`)
    .then((val) => val.json())
    .then((data) => {
     
      if (!data.main) {
        seterror('Data not found');
        setweather({});
      } else {
        setweather(data);
        seterror(''); 
      }
    })
    .catch(() => {
      seterror('Error fetching data');
     
    }
   
   
      
      
    )
    
}
  //   .then(val=>
  //     val.json()).then(x=>setweather(x)
      
  //   // .catch((err)=>seterror("not found"))
  // );
  
  // }
  function usingKey(x){
  if(x.key==="Enter"){
     searchWeather()
  }
  }
  return (
    <>
    <center>
    <div>
      <center className='card'>
      <div className='card-body'>
        <div className='card-title'>
          <h1 id="head">Weather App</h1>
         
            <input type="text" name="city"  value={city} onChange={(e)=>setcity(e.target.value)} onKeyPress={usingKey} id="input" placeholder='enter your city'/>
            <br/><br/>
            <button type="submit"  onClick={searchWeather} id="but1"> Search</button>
        


        </div>
        {weather.main ?(
          <>
          <h3>{weather.name}</h3>
          <p>{weather.main.temp} c</p>
          </>
        ):<p>{error}</p>
      }
      </div>
      </center>
    </div>
    </center>
    </>
  )
}

export default App
