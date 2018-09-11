import React from 'react';

const AddForm = ({showAdd}) =>{
  
    return (
        <div className={showAdd} > 
          <form className='addform'>
          <h1>Add Contact</h1> <button className = 'close'>X</button>
          <hr></hr>

            <div className='bodyform'>      
              <input className= 'addinput' type='text' placeholder='First Name'/>
              <br/>              
              <input className= 'addinput' type='text' placeholder='Last Name'/>
              <br/>              
              <input className= 'addinput' type='text' placeholder='Phone Number'/>
              <br/>
              <input className= 'addinput' type='text' placeholder='Email'/>
              <br/>
              <input className= 'addinput' type='text' placeholder='Notes'/>
              <br/>
              </div>

              <footer className='bottom'>
              <button className='clear'>clear</button>
              <button className='submit'>Add</button>
              </footer>
          </form>
          
        </div>
    );
}

export default AddForm;