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
        {first:'Josh',last:'McDaniel',number:'555-666-7777',email:'joshmcdaniel@gmail.com',notes:'cool guy'},
        {first:'Briana',last:'McDaniel',number:'888-999-1111',email:'brianamcdaniel@gmail.com',notes:'cooler girl'},
        {first:'Finn',last:'McDaniel',number:'222-333-4444',email:'finnmcdaniel@gmail.com',notes:'coolest dog'},
        {first:'Josh',last:'McDaniel',number:'555-666-7777',email:'joshmcdaniel@gmail.com',notes:'cool guy'},
        {first:'Briana',last:'McDaniel',number:'888-999-1111',email:'brianamcdaniel@gmail.com',notes:'cooler girl'},
        {first:'Finn',last:'McDaniel',number:'222-333-4444',email:'finnmcdaniel@gmail.com',notes:'coolest dog'},
      ],
        toggle:true,
        class: 'modalClose'            
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
    console.log(this.state.toggle)     
}

onClick = () => {
   this.setState({class:'modal'})
}
//addform btn//
handleChange = (event) => {
console.log('josh')
event.preventDefault()
}

  render() {
    return (
      <div className='container'>
        <NavBar hideSide={this.hideSide} onClick={this.onClick}/>
        <SideBar  toggle={this.state.toggle} />
        <AddForm  showAdd={this.state.class} test ={this.handleChange}/>
        <ContactList contacts={this.state.contacts} toggle={this.state.toggle} />
      </div>
    );
  }
}

export default App;
