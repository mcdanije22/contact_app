import React from 'react';


const ContactCard = ({first,last,number,email,area}) =>{
    
    return (
        <div className='contactCard'>
            <div className='cardTop'>
                <img className='contactPhoto' src= 'https://via.placeholder.com/130x130' alt='person'/>
                <h2>{first} {last}</h2>
                <hr/>
            </div>
                <div className= 'cardBottom'>
                    <p>Phone Number: {number}</p>
                    <p>Email Address: {email}</p>
                    <p>Location: {area}</p>
                </div>
                <footer className='cardFooter'> 
                    <button>S</button>
                    <button>S</button>
                    <button>S</button>
                    <button>S</button>
                </footer>
            </div>
       
    );
}

export default ContactCard;