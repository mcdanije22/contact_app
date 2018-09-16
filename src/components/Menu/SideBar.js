import React from 'react';
 
const SideBar = ({toggle}) =>{
const hide = {
  display: toggle?'none':'block',
} 
    return (
        <div className ='sideBar' style={hide} >
          <ul>
        <a href = "#" id = "a"> <li> A </li> </a>
        <a href = "#" id = "b"> <li> B </li> </a>
        <a href = "#" id = "c"> <li> C </li> </a>
        <a href = "#" id = "d"> <li> D </li> </a>
        <a href = "#" id = "e"> <li> E </li> </a>
        <a href = "#" id = "f"> <li> F </li> </a>
        <a href = "#" id = "g"> <li> G </li> </a>
        <a href = "#" id = "h"> <li> H </li> </a>
        <a href = "#" id = "i"> <li> I </li> </a>
        <a href = "#" id = "j"> <li> J </li> </a>
        <a href = "#" id = "k"> <li> K </li> </a>
        <a href = "#" id = "l"> <li> L </li> </a>
        <a href = "#" id = "m"> <li> M </li> </a>
        <a href = "#" id = "n"> <li> N </li> </a>
        <a href = "#" id = "o"> <li> O </li> </a>
        <a href = "#" id = "p"> <li> P </li> </a>
        <a href = "#" id = "q"> <li> Q </li> </a>
        <a href = "#" id = "r"> <li> R </li> </a>
        <a href = "#" id = "s"> <li> S </li> </a>
        <a href = "#" id = "t"> <li> T </li> </a>
        <a href = "#" id = "u"> <li> U </li> </a>
        <a href = "#" id = "v"> <li> V </li> </a>
        <a href = "#" id = "w"> <li> W </li> </a>
        <a href = "#" id = "x"> <li> X </li> </a>
        <a href = "#" id = "y"> <li> Y </li> </a>
        <a href = "#" id = "z"> <li> Z </li> </a>
      </ul>
        </div>
    );
}

export default SideBar;