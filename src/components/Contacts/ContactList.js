import React from 'react';
import ContactCard from './ContactCard';

const ContactList = ({contacts,removeContacts}) =>{
 
       
    return (
        <div className = 'contactDisplay' >
        
        {contacts.map((contact,i) =>{
            return (
                <ContactCard 
                /*key={i} 
                id={i}
                first={contacts[i].first} 
                last={contacts[i].last} 
                email={contacts[i].email} 
                number={contacts[i].number} 
                area={contacts[i].area} 
                instagram={contacts[i].instagram}
                facebook={contacts[i].facebook}
                linkedin={contacts[i].linkedin}
                twitter={contacts[i].twitter}*/
                contacts={contacts[i]}
                removeContacts={removeContacts}
                />
            );
        })
        }
        </div>
    );
}

export default ContactList;