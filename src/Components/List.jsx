import React from 'react'
import { Link, NavLink } from "react-router-dom";


function List() {
  return (
    <div className=' container'>
        <div className="list-group">
        
        <li style={{backgroundColor:"green" ,fontWeight:"bolder",color:"white"  }} className="list-group-item list-group-item-action ">Hizmetlerimiz</li>
        <NavLink className="nav-link list-group-item list-group-item-action list-group-item-secondary  "to="/hizmetlerimiz/iyikidogdunbebek">İyi Ki Doğdun Bebek</NavLink>
        <NavLink className="nav-link list-group-item list-group-item-action list-group-item-secondary "to="/hizmetlerimiz/arabuluculuk">Arabuluculuk</NavLink>

        <NavLink className="nav-link list-group-item list-group-item-action list-group-item-secondary "to="/hizmetlerimiz/sikcasorulansorular">Sıkça Sorulan Sorular</NavLink>

        
      </div>
      <hr />
      <div className="list-group">
   
       <li className="list-group-item  " style={{backgroundColor:"green" ,fontWeight:"bolder",color:"white"  }}>Projeler</li>
        <NavLink className="nav-link list-group-item list-group-item-action list-group-item-secondary  "to="/projeler/tamamlanan">Tamamlanan</NavLink>
        <NavLink className="nav-link list-group-item list-group-item-action list-group-item-secondary  "to="/projeler/devameden">Devam Eden</NavLink>
        <NavLink className="nav-link list-group-item list-group-item-action list-group-item-secondary  "to="/projeler/planlanan">Planlanan</NavLink>
      </div>
    
<hr />
    </div>
  )
}

export default List