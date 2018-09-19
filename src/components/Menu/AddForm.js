import React from 'react';

const AddForm = ({showAdd, test}) =>{

 
    
    return (
        <div className={showAdd} > 
          <form className='addform'>
          <h1>Add Contact</h1> <button className = 'close'>X</button>
          <hr></hr>

            <div className='bodyform'>     
            <form>
              <input className= 'addinput' type='text' placeholder='First Name' name='First' />
              <br/>              
              <input className= 'addinput' type='text' placeholder='Last Name' name='last'/>
              <br/>              
              <input className= 'addinput' type='text' placeholder='Phone Number' name='number'/>
              <br/>
              <input className= 'addinput' type='text' placeholder='Email' name='email'/>
              <br/>
              <input className= 'addinput' type='text' placeholder='Notes' name='notes'/>
              <br/>
              </form> 
              </div>

              <footer className='bottom'>
              <button className='clear'>clear</button>
              <button className='submit' onClick={test}>Add</button>
              </footer>
          </form>
          
        </div>
    );
}

export default AddForm;