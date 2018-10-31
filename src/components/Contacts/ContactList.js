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
                key={i}
                id={i}
                contacts={contacts[i]}
                removeContacts={ removeContacts.bind(this,i) /*() => removeContacts(contact.id)*/}
                />
            );
        })
        }
        </div>
    );
}

export default ContactList;