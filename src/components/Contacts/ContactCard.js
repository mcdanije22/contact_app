import React from 'react';


const ContactCard = ({first,last,number,email,notes}) =>{
    
    return (
        <div className='contactCard'>
            <h2>{first} {last}</h2>
            <p>{number}</p>
            <p>{email}</p>
            <p>{notes}</p>

        </div>
    );
}

export default ContactCard;