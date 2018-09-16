import React, { Component } from 'react';
import Menu from './components/Menu/Menu';
import ContactList from './components/Contacts/ContactList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      contacts: [
        {first:'Josh',last:'McDaniel',number:'555-666-7777',email:'joshmcdaniel@gmail.com',notes:'cool guy'},
        {first:'Briana',last:'McDaniel',number:'888-999-1111',email:'brianamcdaniel@gmail.com',notes:'cooler girl'},
        {first:'Finn',last:'McDaniel',number:'222-333-4444',email:'finnmcdaniel@gmail.com',notes:'coolest dog'},
      ]
    }
  }
  render() {
    return (
      <div className='container'>
        <Menu/>
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
