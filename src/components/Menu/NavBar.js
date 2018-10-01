import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';


const NavBar = ({hideSide,modalToggle,search}) =>{
     
    return (
        <div className ='nav' >
                
            <button className = 'sideBarToggle'  onClick = {hideSide} >
            <FontAwesomeIcon icon={faBars} />
            </button>
            <input type= "text" placeholder='search by name' className='search' name='search' onChange={search}></input><button className='searchBtn'>
            <FontAwesomeIcon icon={faSearch} />
            </button>
            <button className = 'addContact' onClick={modalToggle}> 
            <FontAwesomeIcon icon={faUserPlus} />

            </button>
            <button className='signOut'> sign out</button>
           
        </div>
    );
}

export default NavBar;