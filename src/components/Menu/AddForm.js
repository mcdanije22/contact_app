import React from 'react';

const AddForm = ({showAdd, submitData,firstChange, lastChange, numberChange, emailChange, locationChange,instagramChange,facebookChange,linkedinChange,twitterChange}) =>{

 
    
    return (
        <div className={showAdd} > 
          <form className='addform' onSubmit={submitData}>
          <h1>Add Contact</h1> <button className = 'close'>X</button>
          <hr></hr>

            <form className='bodyform'>
              <input className= 'addinput' type='text' placeholder='First Name' name='First' onChange={firstChange}/>
              <input className= 'addinput' type='text' placeholder='Last Name' name='last' onChange={lastChange}/>              
              <input className= 'addinput' type='text' placeholder='Phone Number' name='number' onChange={numberChange}/>
              <input className= 'addinput' type='text' placeholder='Email' name='email' onChange={emailChange}/>
              <br/>
              <input className= 'addinput' type='text' placeholder='Location' name='location' onChange={locationChange}/>
            <br/>
            <h2>Add Social Media Link</h2>
            <hr/>
            <input className= 'addinput' type='text' placeholder='Instagram' name='instagram' onChange={instagramChange} />
            <input className= 'addinput' type='text' placeholder='Facebook' name='facebook' onChange ={facebookChange}/>
            <br/>
            <input className= 'addinput' type='text' placeholder='Linkedin' name='linkedin' onChange={linkedinChange}/>
            <input className= 'addinput' type='text' placeholder='Twitter' name='twitter' onChange={twitterChange}/>

              
              <br/>
              </form> 

              <footer className='bottom'>
              <button className='clear' type='reset'>clear</button>
              <button type='submit' className='submit' >Add</button>
              </footer>
          </form>
          
        </div>
    );
}

export default AddForm;