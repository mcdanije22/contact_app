import React from 'react';
import ContactCard from './ContactCard';

const ContactList = ({contacts,}) =>{
    
       
    return (
        <div className = 'contactDisplay' >
        {contacts.map((user,i) =>{
            return (
                <ContactCard 
                key={i} 
                first={contacts[i].first} 
                last={contacts[i].last} 
                email={contacts[i].email} 
                number={contacts[i].number} 
                area={contacts[i].area} 
                instagram={contacts[i].instagram}
                facebook={contacts[i].facebook}
                linkedin={contacts[i].linkedin}
                twitter={contacts[i].twitter}
                />
            );
        })
        }
        </div>
    );
}

export default ContactList;