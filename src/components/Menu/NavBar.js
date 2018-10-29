import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';


const NavBar = ({modalToggle,search}) =>{
    return (
        <div className ='nav' >
       
            <input type= "text" placeholder='search by first name' className='search' name='search' onChange={search} ></input>
            <button className='searchBtn'>
            <FontAwesomeIcon icon={faSearch} />
            </button>
            <button className = 'addContact' onClick={modalToggle}> 
            <FontAwesomeIcon icon={faUserPlus} />

            </button>
           
        </div>
    );
}

export default NavBar;