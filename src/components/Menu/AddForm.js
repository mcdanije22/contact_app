import React from 'react';

const AddForm = ({showAdd, submitData,firstChange, lastChange, numberChange, emailChange, locationChange}) =>{

 
    
    return (
        <div className={showAdd} > 
          <form className='addform' onSubmit={submitData}>
          <h1>Add Contact</h1> <button className = 'close'>X</button>
          <hr></hr>

            <form className='bodyform'>
              <input className= 'addinput' type='text' placeholder='First Name' name='First' onChange={firstChange}/>
              <br/>              
              <input className= 'addinput' type='text' placeholder='Last Name' name='last' onChange={lastChange}/>
              <br/>              
              <input className= 'addinput' type='text' placeholder='Phone Number' name='number' onChange={numberChange}/>
              <br/>
              <input className= 'addinput' type='text' placeholder='Email' name='email' onChange={emailChange}/>
              <br/>
              <input className= 'addinput' type='text' placeholder='Location' name='location' onChange={locationChange}/>
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