import React from 'react';


const ContactCard = ({first,last,number,email,notes}) =>{
    
    return (
        <div className='contactCard'>
            <div className='cardTop'>
                <img className='contactPhoto' src= 'https://via.placeholder.com/130x130' alt='contact photo'/>
                <h2>{first} {last}</h2>
                <hr/>
            </div>
                <div className= 'cardBottom'>
                    <p>Phone Number: {number}</p>
                    <p>Email Address: {email}</p>
                    <p>Notes: {notes}</p>
                </div>
                <footer className='cardFooter'></footer>
            </div>
       
    );
}

export default ContactCard;