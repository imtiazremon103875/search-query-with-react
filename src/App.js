import logo from './logo.svg';
import './App.css';
import Table from './component/Table';
import {Users} from "./user"
import { useState } from 'react';

function App() {

  const[query,setQuery]=useState("")

  const keys=["first_name","last_name","email"]
  // console.log(query)

  const search=(data)=>{
    return data.filter((item)=>
    // item.first_name.toLowerCase().includes(query) || item.last_name.toLowerCase().includes(query)||item.email.toLowerCase().includes(query))
    keys.some(key=>item[key].toLowerCase().includes(query)) );
  }
  return (
    <div className="App">
 <input className='search' placeholder='Search...' onChange={(e)=> setQuery(e.target.value)}></input>
 {/* <ul className='list'>
{
  Users.filter(user=>user.first_name.toLowerCase().includes(query)).map((user)=>{
    return <li className='listItem' key={user.id}>{user.first_name}</li>
  })
}

 </ul> */}

 <Table data={search(Users)}/>
    </div>
  );
}

export default App;
