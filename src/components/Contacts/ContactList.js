import React from 'react';
import ContactCard from './ContactCard';

const ContactList = ({contacts,toggle}) =>{
    
        const moved = {
            paddingLeft: toggle? '0':'15%'
        }
    console.log(contacts[0])
    return (
        <div className = 'contactDisplay' style={moved}>
        {contacts.map((user,i) =>{
            return (
                <ContactCard 
                key={i} 
                first={contacts[i].first} 
                last={contacts[i].last} 
                email={contacts[i].email} 
                number={contacts[i].number} 
                notes={contacts[i].notes} />
            );
        })
        }
        </div>
    );
}

export default ContactList;