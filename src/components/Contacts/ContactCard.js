import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const ContactCard = ({removeContacts,contacts}) =>{
    const {first,last,number,email,area,instagram,facebook,linkedin,twitter} = contacts;

    const insta = instagram.value;

    const hide = {
        display: insta?'block':'none'
      }


    return (
        <div className='contactCard'>
            <div className='cardTop'>
               <img className='contactPhoto' src= 'https://via.placeholder.com/130x130' alt='person'/> 
                <h2>{first} {last} <button className='editBtn'><FontAwesomeIcon icon={faPencilAlt} /> </button><button className='editBtn' onClick={ removeContacts }><FontAwesomeIcon icon={faTrashAlt} /></button></h2> 
                <hr/>
            </div>
                <div className= 'cardBottom'>
                    <p>Phone Number: {number} </p>
                    <p>Email Address: {email}</p>
                    <p>Location: {area}</p>
                </div>
                <footer className='cardFooter'> 
                    <button style={hide} type='button' className='instagram'><a href= {instagram} target="_blank" >
                    <FontAwesomeIcon icon={faInstagram} />
                    </a></button>
                    <button type='button' className='facebook'><a href= {facebook} target="_blank">
                    <FontAwesomeIcon icon={faFacebookF} />
                    </a></button>
                    <button type='button' className='linkedin'><a href= {linkedin} target="_blank">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                    </a></button>
                    <button type='button' className='twitter'><a href= {twitter} target="_blank">
                    <FontAwesomeIcon icon={faTwitter} />
                    </a></button>
                </footer>
            </div>
       
    );
}

export default ContactCard;