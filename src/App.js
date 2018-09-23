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
        {first:'Josh',last:'McDaniel',number:'555-666-7777',email:'joshmcdaniel@gmail.com',area:'Mount Morris, Ny'},
        {first:'Briana',last:'McDaniel',number:'888-999-1111',email:'brianamcdaniel@gmail.com',area:'Mount Morris, Ny'},
        {first:'Finn',last:'McDaniel',number:'222-333-4444',email:'finnmcdaniel@gmail.com',area:'Mount Morris, Ny'},
        {first:'Josh',last:'McDaniel',number:'555-666-7777',email:'joshmcdaniel@gmail.com',area:'Mount Morris, Ny'},
        {first:'Briana',last:'McDaniel',number:'888-999-1111',email:'brianamcdaniel@gmail.com',area:'Mount Morris, Ny'},
        {first:'Finn',last:'McDaniel',number:'222-333-4444',email:'finnmcdaniel@gmail.com',area:'Mount Morris, Ny'},
      ],
        toggle:true,
        class: 'modalClose', 

        first: '',
        last: '',
        number: '',
        email:'',
        area:'' 
            }
    }
  

  hideSide = () =>{
    if(this.state.toggle){
    this.setState(        
        {toggle:false}
    )}
    else{
        this.setState({toggle:true})
    }
    //test state change
    //console.log(this.state.toggle)     
}

addModalToggle = () => {
   this.setState({class:'modal'})
}
firstChange = (event) => {
  //let first = event.target.value
  this.setState({first:event.target.value})
  console.log(this.state.first)
  //console.log(first)
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

submitData = (event) => {
 let newContact = {
    first:this.state.first,
    last:this.state.last,
    number:this.state.number,
    email:this.state.email,
    area:this.state.area
  }
/*console.log(this.state.first)
console.log(this.state.last)*/
this.setState({contacts:this.state.contacts.concat([newContact])})
console.log(this.state.contacts)
this.setState({class:'modalClose'})
event.preventDefault();
}
  render() {
    return (
      <div className='container'>
        <NavBar hideSide={this.hideSide} modalToggle={this.addModalToggle}/>
        <SideBar  toggle={this.state.toggle} />
        <AddForm  
        showAdd={this.state.class} 
        submitData={this.submitData} 
        firstChange={this.firstChange} 
        lastChange={this.lastChange} 
        numberChange={this.numberChange}
        emailChange = {this.emailChange}
        locationChange = {this.locationChange}
        />
        <ContactList contacts={this.state.contacts} toggle={this.state.toggle} />
      </div>
    );
  }
}

export default App;
