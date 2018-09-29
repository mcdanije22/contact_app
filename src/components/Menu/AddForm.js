import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const AddForm = ({showAdd, submitData,closeModal,firstChange, lastChange, numberChange, emailChange, locationChange,instagramChange,facebookChange,linkedinChange,twitterChange}) =>{

 const clearForm = () =>{
  document.getElementById("form").reset();
 }
 
    
    return (
        <div className={showAdd} > 
          <form className='addform' onSubmit={submitData}>
          <div className='addHeader'>
          <h1>Add Contact</h1> <button className='closeBtn' type='button' className = 'close' onClick={closeModal}>
          <FontAwesomeIcon icon={faTimes} />
          </button>
          </div>
          <hr></hr>

            <form className='bodyform' id='form'>
              <input className= 'addinput' type='text' placeholder='First Name' name='First' onChange={firstChange}/>
              <input className= 'addinput' type='text' placeholder='Last Name' name='last' onChange={lastChange}/>              
              <input className= 'addinput' type='text' placeholder='Phone Number' name='number' onChange={numberChange}/>
              <input className= 'addinput' type='text' placeholder='Email' name='email' onChange={emailChange}/>
              <br/>
              <input className= 'addinput' type='text' placeholder='Location' name='location' onChange={locationChange}/>
            <br/>
            <h2> Social Media</h2>
            <hr/>
            <input className= 'addinput' type='text' placeholder='Instagram URL' name='instagram' onChange={instagramChange} />
            <input className= 'addinput' type='text' placeholder='Facebook URL' name='facebook' onChange ={facebookChange}/>
            <br/>
            <input className= 'addinput' type='text' placeholder='Linkedin URL' name='linkedin' onChange={linkedinChange}/>
            <input className= 'addinput' type='text' placeholder='Twitter URL' name='twitter' onChange={twitterChange}/>

              
              <br/>
              </form> 

              <footer className='bottom'>
              <button className='clear' type='reset' onClick={clearForm}>clear</button>
              <button type='submit' className='submit' >Add</button>
              </footer>
          </form>
          
        </div>
    );
}

export default AddForm;