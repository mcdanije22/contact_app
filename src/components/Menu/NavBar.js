import React from 'react';


const NavBar = ({hideSide,onClick}) =>{
    
    return (
        <div className ='nav' >
            <button className = 'sideBarToggle' onClick = {hideSide} >=</button>
            <input type= "text" placeholder='search by name' className='search'></input><button className='searchBtn'>T</button>
            <button className = 'addContact' onClick={onClick} >+add new contact</button>
            <button className='signOut'> sign out</button>
           
        </div>
    );
}

export default NavBar;