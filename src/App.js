import React, { Component } from 'react';
import NavBar from './components/Menu/NavBar';
import SideBar from './components/Menu/SideBar';
import AddForm from './components/Menu/AddForm';
import ContactList from './components/Contacts/ContactList';






class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      
      contacts: [
        {first:'Josh',last:'McDaniel',number:'555-666-7777',email:'joshmcdaniel@gmail.com',area:'Mount Morris, Ny',instagram:'https://www.instagram.com/mcdanije/', facebook:'https://www.facebook.com/josh.mcdaniel.5201', linkedin:'https://www.linkedin.com/in/mcdanije/',twitter:'https://twitter.com/'},
        {first:'Briana',last:'McDaniel',number:'888-999-1111',email:'brianamcdaniel@gmail.com',area:'Mount Morris, Ny',instagram:'https://www.instagram.com/mcdanije/', facebook:'https://www.facebook.com/josh.mcdaniel.5201', linkedin:'https://www.linkedin.com/in/mcdanije/',twitter:'https://twitter.com/'},
        {first:'Finn',last:'McDaniel',number:'222-333-4444',email:'finnmcdaniel@gmail.com',area:'Mount Morris, Ny',instagram:'https://www.instagram.com/mcdanije/', facebook:'https://www.facebook.com/josh.mcdaniel.5201', linkedin:'https://www.linkedin.com/in/mcdanije/',twitter:'https://twitter.com/'},
        {first:'Josh',last:'McDaniel',number:'555-666-7777',email:'joshmcdaniel@gmail.com',area:'Mount Morris, Ny',instagram:'https://www.instagram.com/mcdanije/', facebook:'https://www.facebook.com/josh.mcdaniel.5201', linkedin:'https://www.linkedin.com/in/mcdanije/',twitter:'https://twitter.com/'},
        {first:'Briana',last:'McDaniel',number:'888-999-1111',email:'brianamcdaniel@gmail.com',area:'Mount Morris, Ny',instagram:'https://www.instagram.com/mcdanije/', facebook:'https://www.facebook.com/josh.mcdaniel.5201', linkedin:'https://www.linkedin.com/in/mcdanije/',twitter:'https://twitter.com/'},
        {first:'Finn',last:'McDaniel',number:'222-333-4444',email:'finnmcdaniel@gmail.com',area:'Mount Morris, Ny',instagram:'https://www.instagram.com/mcdanije/', facebook:'https://www.facebook.com/josh.mcdaniel.5201', linkedin:'https://www.linkedin.com/in/mcdanije/',twitter:'https://twitter.com/'},
      ],
        toggle:true,
        class: 'modalClose', 
        searchField:'',

        first: '',
        last: '',
        number: '',
        email:'',
        area:'',
        instagram: '',
        facebook: '',
        linkedin:'',
        twitter:''
            }
    }
  


  //functions for modal start//
addModalToggle = () => {
   this.setState({class:'modal'})
}
closeModalToggle = () =>{
  this.setState({class:'modalClose'})
}
  //functions for modal start//

  //functions that capture form data start//
firstChange = (event) => {
  this.setState({first:event.target.value})
  console.log(this.state.first)
}
lastChange = (event) => {
  this.setState({last:event.target.value})
  console.log(this.state.last)
}
numberChange = (event) => {
  this.setState({number:event.target.value})
  console.log(this.state.number)
}
emailChange = (event) => {
  this.setState({email:event.target.value})
  console.log(this.state.email)
}
locationChange = (event) => {
  this.setState({area:event.target.value})
  console.log(this.state.area)
}
instagramChange = (event) => {
  this.setState({instagram:event.target.value})
}
  //functions that capture form data end//

  //logic for adding contact object to state start//
submitData = (event) => {
    if (this.state.first==''||this.state.last==''||this.state.number==''||this.state.email==''||this.state.area==''){
      alert('Please Fill In All Fields')
      event.preventDefault();
    }else {
 let newContact = {
    first:this.state.first,
    last:this.state.last,
    number:this.state.number,
    email:this.state.email,
    area:this.state.area,
    instagram:this.state.instagram,
    facebook:this.state.facebook,
    linkedin:this.state.linkedin,
    twitter:this.state.twitter
  }


this.setState({contacts:this.state.contacts.concat([newContact])})
  document.getElementById("form").reset();
this.setState({class:'modalClose'})
event.preventDefault();
    }
}
  //logic for adding contact object to state end//

  searchFieldChange = (event) => {
    this.setState({searchField:event.target.value})
  }

  /*removeContacts = (event) => {
    let array = this.state.contacts; 
    let index = array.indexOf(event.target.value)
    array.splice(index,1);
    this.setState({contacts: array});
  }*/

  /*removeContacts = (id) =>{
    this.setState({
      contacts:this.state.contacts.filter((contacts,id)=> contacts.id != id)
    })
  }  */
  removeContacts = (i) => {
    let contacts = this.state.contacts; 
    contacts.splice(i,1);
    this.setState({contacts: contacts});
  }

  render() {
    const {contacts, searchField} = this.state;
    const filteredContacts =contacts.filter(contacts =>{
      return contacts.first/* this is for side bar letters [0]*/.toLowerCase().includes(searchField.toLowerCase());
    })
    return (
      <div className='container'>
        <NavBar         
        modalToggle={this.addModalToggle} 
        search={this.searchFieldChange}
        />
        <AddForm  
        clear={this.clearBtn}
        closeModal={this.closeModalToggle}
        showAdd={this.state.class} 
        submitData={this.submitData} 
        firstChange={this.firstChange} 
        lastChange={this.lastChange} 
        numberChange={this.numberChange}
        emailChange = {this.emailChange}
        locationChange = {this.locationChange}
        instagramChange = {this.instagramChange}
        facebookChange = {this.facebookChange}
        linkedinChange = {this.linkedinChange}
        twitterChange = {this.twitterChange}
        />
        <ContactList 
        contacts={filteredContacts} 
        removeContacts={this.removeContacts}
        />
      </div>
    );
  }
}

export default App;
